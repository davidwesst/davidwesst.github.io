export interface IArticle {
    ID: string;
    Title: string;
    ContentUri: string;
    ContentFileUri: string;
}

class Article implements IArticle {
    ID: string;
    Title: string;
    ContentUri: string;
    ContentFileUri: string;
}
export default Article;