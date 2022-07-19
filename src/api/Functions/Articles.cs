using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using DW.Website.Models;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Net;

namespace DW.Website.Functions
{
    public class Articles
    {
        private readonly ILogger _logger;
        private List<Article> _articles;

        public Articles(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<Articles>();
            _articles = new List<Article>();
        }

        [Function("articles")]
        public async Task<HttpResponseData> List(
            [HttpTrigger(AuthorizationLevel.Anonymous, "GET")]
            HttpRequestData req)
        {   
            // get articles
            _articles = RetrieveArticles();

            // create response
            var response = req.CreateResponse();
            await response.WriteAsJsonAsync(_articles);

            // return
            return response;
        }

        private List<Article> RetrieveArticles()
        {
            string? connectionString = System.Environment.GetEnvironmentVariable("ARTICLES_CONNECTION_STRING");
            string? containerName = System.Environment.GetEnvironmentVariable("ARTICLES_CONTAINER_NAME");

            BlobContainerClient blogFileClient = new BlobContainerClient(connectionString, containerName);

            var blobs = blogFileClient.GetBlobs(Azure.Storage.Blobs.Models.BlobTraits.Metadata)
                            .Where(b => b.Name.EndsWith("index.md"))
                            .ToList();

            // log articles with incomplete metadata
            blobs.ConvertAll(b => new Article(b))
                .Where(a => a.IsMetadataComplete() == false)
                .ToList()
                .ForEach(b => _logger.LogWarning($"Problem with metadata with {b.ID}. Excluding from article list."));

            return blobs.ConvertAll(b => new Article(b))
                        .Where(a => a.IsMetadataComplete() == true)
                        .OrderBy(a => a.PublishDate)
                        .Reverse()
                        .ToList();
        }
    }      
}