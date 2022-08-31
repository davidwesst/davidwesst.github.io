using System.Xml;

public static class XmlHelper
{
    public static XmlElement CreateTextElement(string elementName, string elementText, ref XmlDocument doc)
    {
        var element = doc.CreateElement(elementName);
        element.InnerText = elementText;
        return element;
    }
}