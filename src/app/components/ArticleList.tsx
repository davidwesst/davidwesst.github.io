import * as React from "react";
import { Link } from "react-router-dom";
import { IArticle } from "../models/Article";

export interface IArticleListProps {
    items: Array<IArticle>;
}

const ArticleList = ({ items }: IArticleListProps) => {
    const articleComponents = items.map((article, index) => {
        return (
            <article key={article.ID}>
                <Link to={`/blog/${article.ID}`}>
                    {article.Title}
                </Link>
            </article>
        );
    });

    return (
        <>
        <h2>There are {items.length} items in this ArticleList component.</h2>
        {articleComponents}
        </>
    );
}
export default ArticleList