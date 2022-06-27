using System.Xml;

namespace DW.Website.Models
{
    public class Feed
    {
        // const
        internal const string DEFAULT_VERSION = "2.0";
        internal const string DEFAULT_LANGUAGE = "en-ca";
        internal const string DEFAULT_ENCODING = "utf-8";

        public string Title { get; set; }
        public string Link { get; set; }
        public string Description { get; set; }
        //public List<FeedItem> Items { get; set; }

        public Feed(string title, string link, string description)
        {
            this.Title = title;
            this.Link = link;
            this.Description = description;
            //this.Items = new List<FeedItem>();
        }

        public Feed(string title, string link, string description, List<FeedItem> items)
            : this(title, link, description)
        {
            //this.Items = items;
        }

        public string GenerateRss()
        {
            // setup document
            var rssDocument = new XmlDocument();

            // setup root
            var rssRoot = rssDocument.CreateElement("rss");
            rssRoot.SetAttribute("version", DEFAULT_VERSION);
            rssDocument.AppendChild(rssRoot);

            // setup channel
            var channel = rssDocument.CreateElement("channel");
            rssRoot.AppendChild(channel);

            // TODO: add items

            // return
            return rssDocument.OuterXml;
        }
    }
}