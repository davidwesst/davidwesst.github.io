export interface IArticle {
    ID: string;
    Title: string;
    Content: string;
    ContentUri: string;
}

class Article implements IArticle {
    ID: string;
    Title: string;
    Content: string;
    ContentUri: string;
}
export default Article;