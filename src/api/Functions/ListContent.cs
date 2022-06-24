using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Net;
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
            // parse query string

            // generate file
            var rssFeed = new Feed();
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(Feed));
            
            // return as body
            var res = req.CreateResponse(HttpStatusCode.OK);
            xmlSerializer.Serialize(res.Body, rssFeed);
            return res;
        }        
    }
}