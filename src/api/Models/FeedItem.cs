using System.Xml;

namespace DW.Website.Models
{
    public class FeedItem
    {
        public string Title { get; set; }
        public string Link { get; set; }
        public string Description { get; set; }
        public DateTime PublishDate { get; set; }

        public FeedItem()
        {
            this.Title = String.Empty;
            this.Link = String.Empty;
            this.Description = String.Empty;
        }

        public XmlElement GetRssItem(ref XmlDocument xmlDoc)
        {
            var item = xmlDoc.CreateElement("item");

            // title
            var titleEl = XmlHelper.CreateTextElement("title", this.Title, ref xmlDoc);
            item.AppendChild(titleEl);

            // link
            var linkEl = XmlHelper.CreateTextElement("link", this.Link, ref xmlDoc);
            item.AppendChild(linkEl);

            // guid
            var guidEl = XmlHelper.CreateTextElement("guid", this.Link, ref xmlDoc);
            item.AppendChild(guidEl);

            // description
            var descEl = XmlHelper.CreateTextElement("description", this.Description, ref xmlDoc);
            item.AppendChild(descEl);
            
            // publish date
            var publishEl = XmlHelper.CreateTextElement("pubDate", this.PublishDate.ToUniversalTime().ToString("ddd, dd MMM yyyy hh:mm:ss") + " GMT", ref xmlDoc);
            item.AppendChild(publishEl);

            return item;
        }
    }
}