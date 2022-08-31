using Azure;
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
        private enum ArticleContentType
        {
            UNKNOWN,
            JSON,
            RSS_XML
        }

        private readonly ILogger logger;
        private List<Article> articles;

        private string connectionString;
        private string containerName;

        public Articles(ILoggerFactory loggerFactory)
        {
            connectionString = this.GetEnvironmentVariable("ARTICLES_CONNECTION_STRING");
            containerName = this.GetEnvironmentVariable("ARTICLES_CONTAINER_NAME");
            
            logger = loggerFactory.CreateLogger<Articles>();
            articles = RetrieveArticles();

            if(String.IsNullOrEmpty(connectionString) || String.IsNullOrEmpty(containerName))
            {
                logger.LogError($"Invalid connectionString or containerName value. connectionString: {connectionString}, containerName: {containerName} ");
            }
        }

        [Function("articles")]
        public async Task<HttpResponseData> List(
            [HttpTrigger(AuthorizationLevel.Anonymous, "GET", Route = null)]
            HttpRequestData req)  
        {
            // create response
            HttpResponseData? response = null;

            // determine content-type
            switch (this.DetermineContentType(req))
            {   
                case ArticleContentType.JSON:
                    // create JSON response
                    response = req.CreateResponse();
                    await response.WriteAsJsonAsync(articles);
                    break;
                case ArticleContentType.RSS_XML: 
                    // create RSS_XML response
                    response = req.CreateResponse(HttpStatusCode.OK);
                    response.Headers.Add("Content-Type", "application/rss+xml; charset=UTC-8");
                    var rssFeed = new Feed("Blog by David Wesst", "https://www.davidwesst.com/blog", "This is my blog", logger, articles.AsEnumerable());
                    await response.WriteStringAsync(rssFeed.GenerateRss());
                    break;
                default:
                    // create UNKNOWN response
                    response = req.CreateResponse(HttpStatusCode.NotAcceptable);
                    break;
            }
                        
            // return
            return response;
        }

        [Function("articles/{id}")]
        public async Task<HttpResponseData> GetArticle(
            [HttpTrigger(AuthorizationLevel.Anonymous, "GET", Route = "articles/{id}")]
            HttpRequestData req, string id)
        {
            // find article
            var article = articles.FirstOrDefault(a => a.ID.Equals(id));

            // build response
            HttpResponseData res = req.CreateResponse(HttpStatusCode.NotFound);
            if(article != null)
            {
                res = req.CreateResponse();
                await res.WriteAsJsonAsync(article);
            }

            // return
            return res; 
        }

        private List<Article> RetrieveArticles()
        {
            BlobContainerClient blogFileClient = new BlobContainerClient(connectionString, containerName);

            var blobs = blogFileClient.GetBlobs(Azure.Storage.Blobs.Models.BlobTraits.Metadata)
                            .Where(b => b.Name.EndsWith("index.md"))
                            .ToList();

            // log articles with incomplete metadata
            blobs.ConvertAll(b => new Article(b, connectionString, containerName))
                .Where(a => a.IsMetadataComplete() == false)
                .ToList()
                .ForEach(b => logger.LogWarning($"Problem with metadata with {b.ID}. Excluding from article list."));

            // return complete articles only, incompletes ones are not parsed correctly
            return blobs.ConvertAll(b => new Article(b, connectionString, containerName))
                        .Where(a => a.IsMetadataComplete() == true)
                        .OrderBy(a => a.PublishDate)
                        .Reverse()
                        .ToList();
        }

        private string GetEnvironmentVariable(string key)
        {
            string? variable = System.Environment.GetEnvironmentVariable(key);
            if(variable == null) {
                return String.Empty;
            }
            else {
                return variable;
            }
        }

        private ArticleContentType DetermineContentType(HttpRequestData req)
        {
            ArticleContentType ct = ArticleContentType.UNKNOWN;

            // process headers and then query string
            IEnumerable<string>? contentTypeHeader;

            if(req.Headers.TryGetValues("Content-Type", out contentTypeHeader) == false)
            {
                // check query string and process contentType value, if provided
                if(req.Url.Query.ToLower().Contains("content-type"))
                {
                    var prefix = "content-type=";
                    var index = req.Url.Query.ToLower().IndexOf(prefix);
                    var value = req.Url.Query.Substring(index + prefix.Length);
                    contentTypeHeader = value.Split("&").AsEnumerable();
                }
            }

            // determine value from content-type value
            if(contentTypeHeader != null)
            {
                var contentType = contentTypeHeader.First();                
                if(contentType.Contains("application/xml") 
                    || contentType.Contains("text/xml")
                    || contentType.Contains("application/rss+xml"))
                {
                    ct = ArticleContentType.RSS_XML;
                } 
                else if (contentType.Contains("application/json")
                            || contentType.Contains("application/javascript"))
                {
                    ct = ArticleContentType.JSON;
                }
            }

            return ct; 
        }
    }     
}