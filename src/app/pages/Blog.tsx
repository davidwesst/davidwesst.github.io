import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import RSSLink from "../components/RSSLink";
import { IArticle } from "../models/Article";

const Blog = () => {
    const [articles, setArticles] = useState(new Array<IArticle>());

    useEffect(()=> {
        fetch("http://localhost:7071/api/articles")
            .then(async (res)=> {
                setArticles(await res.json());
            })
    }, []);
    
    return (
        <>
            <h1>HELLO BLOG! Hello again!</h1>
            <RSSLink />

            <section>
                {articles.length > 0 &&
                    <>
                        <article>You have {articles.length} blog posts.</article>
                        <ArticleList items={articles} />
                    </>
                }
            </section>
        </>
    )
}
export default Blog;