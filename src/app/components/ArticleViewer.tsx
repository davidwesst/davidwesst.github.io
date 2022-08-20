import * as React from "react";
import { useParams } from "react-router";
import { IArticle } from "../models/Article";

export interface IArticleViewer {
    articleId?: string
}

const ArticleViewer = (props: IArticleViewer) => {
    const { articleId } = useParams<IArticleViewer>(); 
    return (
        <>
        <h1>{props.articleId || articleId + "title goes here"}</h1>
        <article>
            This is more where more article content should be displayed.
        </article>
        </>
    )
}
export default ArticleViewer;