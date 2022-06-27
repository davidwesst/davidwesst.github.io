using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Net;
using System.IO;
using System.Xml.Serialization;

using DW.Website.Models;

namespace DW.Website.Functions
{
    public class ListContent
    {
        private readonly ILogger _logger;

        public ListContent(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<ListContent>();
        }

        [Function("content")]
        public HttpResponseData Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get")]
            HttpRequestData req)
        {
            // generate file
            var rssFeed = new Feed("David Wesst | Blog", "https://www.davidwesst.com/blog", "A blog", new List<FeedItem>(), _logger);
            var rssContent = rssFeed.GenerateRss();
            
            // build response
            var res = req.CreateResponse(HttpStatusCode.OK);
            res.Headers.Add("Content-Type", "text/xml; charset=UTF-8");
            res.WriteString(rssFeed.GenerateRss());

            // return
            return res;
        }        
    }
}