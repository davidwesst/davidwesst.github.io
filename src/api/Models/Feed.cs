using System.Xml.Serialization;

namespace DW.Website.Models
{
    [XmlRoot("rss")]
    public class Feed
    {
        [XmlAttribute("version")]
        public string Version { get; set; }

        [XmlElement("channel")]
        public FeedChannel Channel { get; set; }

        public Feed()
        {
            this.Version = "2.0";
            this.Channel = new FeedChannel("davidwesst.com", "https://www.davidwesst.com/blog", "My description");
        }
    }
}