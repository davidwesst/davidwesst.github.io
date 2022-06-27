using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.Extensions.Logging;

namespace DW.Website.Models
{
    public class FeedSource
    {
        private string? BLOB_CONNECTION_STRING = System.Environment.GetEnvironmentVariable("BLOG_CONNECTION_STRING");
        private string? BLOB_CONTAINER_NAME = System.Environment.GetEnvironmentVariable("BLOG_CONTAINER_NAME");

        public IEnumerable<BlobItem> feedSourceItems;
        public IList<FeedItem> feedItems;

        public FeedSource(ILogger logger)
        {
            feedItems = new List<FeedItem>();

            BlobContainerClient blogFileClient = new BlobContainerClient(BLOB_CONNECTION_STRING, BLOB_CONTAINER_NAME);
            var blobs = blogFileClient.GetBlobs(Azure.Storage.Blobs.Models.BlobTraits.Metadata);
            this.feedSourceItems = from b in blobs
                                    where b.Name.EndsWith("index.md")
                                    select b;

            foreach (var blob in this.feedSourceItems)
            {
                logger.LogInformation(blob.Name);
                logger.LogInformation($"Metadata Count: {blob.Metadata.Count}");
                foreach (var metadata in blob.Metadata)
                {
                    logger.LogInformation($"{metadata.Key}: {metadata.Value}");
                }

                feedItems.Add(new FeedItem(){ 
                    Description = "Description", 
                    Link = $"https://www.davidwesst.com/blog/{blob.Name.Split('/',1)}",
                    Title = blob.Name,
                    PublishDate = DateTime.UtcNow
                });
            }
        }
    }
}