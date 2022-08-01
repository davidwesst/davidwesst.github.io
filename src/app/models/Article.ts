export interface IArticle {
    ID: string;
    Title: string;
}

class Article implements IArticle {
    ID: string;
    Title: string;
}
export default Article;