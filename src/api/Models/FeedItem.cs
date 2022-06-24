namespace DW.Website.Models
{
    public class FeedItem
    {
        public string Title { get; set; }
        public Uri Link { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string UID { get; set; }
        public DateTime PublishDate { get; set; }
    }
}