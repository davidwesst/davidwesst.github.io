import * as React from "react";
import { useParams } from "react-router";
import { marked } from "marked";
import * as DOMPurify from "dompurify";
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

    React.useEffect(()=> {

    }, [article])

    function parseArticle() {
        const markedOptions : marked.MarkedOptions = {
            baseUrl: `http://127.0.0.1:10000/devstoreaccount1/blog/${articleId}/`,
            sanitizer: DOMPurify.sanitize,
            smartypants: true,
            smartLists: true
        };

        return { 
            __html: marked.parse(article.Content, markedOptions)
        };
    }

    return (
        <>
        <h1>{article.Title || "Failed to load article"}</h1>
        <article dangerouslySetInnerHTML={parseArticle()} />
        </>
    )
}
export default ArticleViewer;