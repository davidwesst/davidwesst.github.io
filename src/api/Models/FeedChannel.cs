using System.Xml.Serialization;

namespace DW.Website.Models
{
    [XmlRoot("channel")]
    public class FeedChannel
    {
        [XmlElement("title", typeof(string))]
        public string Title { get; set; }
        [XmlElement("link", typeof(string))]
        public string Link { get; set; }
        [XmlElement("description", typeof(string))]
        public string Description { get; set; }

        public FeedChannel()
        {
            this.Title = String.Empty;
            this.Link = String.Empty;
            this.Description = String.Empty;
        }

        public FeedChannel(string t, string l, string d)
        {
            this.Title = t;
            this.Link = l;
            this.Description = d;
        }
    }
}