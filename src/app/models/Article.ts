export interface IArticle {
    ID: string;
    Title: string;
    Content: string;
}

class Article implements IArticle {
    ID: string;
    Title: string;
    Content: string
}
export default Article;