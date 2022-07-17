using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using DW.Website.Models;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Net;

namespace DW.Website.Functions
{
    public class GetArticles
    {
        private readonly ILogger _logger;
        private List<Article> _articles;

        public GetArticles(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<GetArticles>();
            _articles = new List<Article>();
        }

        [Function("articles")]
        public HttpResponseData Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "GET")]
            HttpRequestData req)
        {   
            // get articles
            _articles = RetrieveArticles();

            // create response
            var response = req.CreateResponse(HttpStatusCode.Accepted);
            _articles.ForEach(a => response.WriteString(a.ToJSON() + "\n"));

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
            return blobs.ConvertAll(b => new Article(b));
        }
    }      
}