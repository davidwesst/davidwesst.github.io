using Microsoft.Extensions.Logging;
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
        public ILogger logger { get; set; }
        public IEnumerable<FeedItem> Items { get; set; }

        public Feed(string title, string link, string description, ILogger logger)
        {
            this.Title = title;
            this.Link = link;
            this.Description = description;
            this.logger = logger;
            this.Items = new List<FeedItem>();
        }

        public Feed(string title, string link, string description, ILogger logger, IEnumerable<Article> items)
            : this(title, link, description, logger)
        {
            this.Items = items.Select(x => new FeedItem(x));
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
            var titleElement = rssDocument.CreateElement("title");
            titleElement.InnerText = this.Title;
            channel.AppendChild(titleElement);
            var linkElement = rssDocument.CreateElement("link");
            linkElement.InnerText = this.Link;
            channel.AppendChild(linkElement);
            var descElement = rssDocument.CreateElement("description");
            descElement.InnerText = this.Description;
            channel.AppendChild(descElement);

            // attach to root
            rssRoot.AppendChild(channel);

            // TODO: add items
            foreach (var item in this.Items)
            {
                channel.AppendChild(item.GetRssItem(ref rssDocument));
            }

            // return
            return rssDocument.OuterXml;
        }
    }
}