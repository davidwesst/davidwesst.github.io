
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;

namespace DW.Website.Models 
{
    public class Article
    {
        public readonly string DEFAULT_CONTENT_FILE_NAME = "index.md";

        public string ID { get; set; }
        public string Title { get; set; }
        public DateTime PublishDate { get; set; }
        public string Description { get; set; }
        public List<string> Tags { get; set; }
       public string ContentUri { get; set; }
       public string ContentFileUri { get; set; }

        public const string METADATA_SLUG = "slug";
        public const string METADATA_TITLE = "title";
        public const string METADATA_DESCRIPTION = "description";
        public const string METADATA_PUBLISH_DATE = "publishDate";
        public const string METADATA_TAGS = "tags";

        public Article()
        {
            this.ID = String.Empty;
            this.Title = String.Empty;
            this.PublishDate = DateTime.MinValue;
            this.Description = String.Empty;
            this.Tags = new List<string>();
            this.ContentUri = String.Empty;
            this.ContentFileUri = String.Empty;
        }

        public Article(string id, string title, DateTime publishDate, string description, List<string> tags, string contentUri, string contentFileUri)
        {
            this.ID = id;
            this.Title = title;
            this.PublishDate = publishDate;
            this.Description = description;
            this.Tags = tags;
            this.ContentUri = contentUri;
            this.ContentFileUri = contentFileUri;
        }

        public Article(BlobItem blob, string storageConnectionString, string storageContainerName)
        {
            this.ID = blob.Metadata[METADATA_SLUG];
            this.Title = blob.Metadata[METADATA_TITLE];
            this.Description = blob.Metadata[METADATA_DESCRIPTION];
            this.Tags = new List<string>(blob.Metadata[METADATA_TAGS].Split(","));

            // parse the date
            DateTime publishDate = DateTime.MinValue;
            DateTime.TryParse(blob.Metadata[METADATA_PUBLISH_DATE], out publishDate);
            this.PublishDate = publishDate;

            // retrieve the location and content URIs
            BlobClient client = new BlobClient(storageConnectionString, storageContainerName, this.ID + "/index.md");
            this.ContentFileUri = client.Uri.ToString();
            this.ContentUri = this.ContentFileUri.Remove(this.ContentFileUri.LastIndexOf(DEFAULT_CONTENT_FILE_NAME));
            
            // retrieve content
            /*using(var reader = new StreamReader(client.OpenRead())) {
                var fileContent = reader.ReadToEnd();
                this.Content = this.TrimFrontMatter(fileContent);
            }*/
        }

        public bool IsMetadataComplete()
        {
            return (
                !String.IsNullOrEmpty(this.ID)
                && !String.IsNullOrEmpty(this.Title)
                && !this.PublishDate.Equals(DateTime.MinValue)
                && this.Tags.Count > 0
            );
        }

        private string TrimFrontMatter(string mdString)
        {
            var endIndex = mdString.IndexOf("---",3);
            return mdString.Remove(0,endIndex+4).Trim();
        }
    }
}