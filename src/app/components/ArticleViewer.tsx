import * as React from "react";
import { useParams } from "react-router";
import { IArticle } from "../models/Article";

export interface IArticleViewer {
    articleId?: string
}

const ArticleViewer = (props: IArticleViewer) => {
    const { articleId } = useParams<IArticleViewer>();
    const [ article, setArticle ] = React.useState<IArticle>({ ID: "loading", Title: "loading...", Content: "Loading..."});

    React.useEffect(()=> {
        fetch(`/api/articles/${articleId}`)
            .then(async (res) => {
                if(res.status === 200) {
                    const article = await res.json() as IArticle;
                    if(article) {
                        setArticle(article);
                    }
                } else {
                    console.error("failed to get article");
                }
            });
    },[]);

    return (
        <>
        <h1>{article.Title || "Failed to load article"}</h1>
        <article>
            {article.Content}
        </article>
        </>
    )
}
export default ArticleViewer;