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
    const [ article, setArticle ] = React.useState<IArticle>({ ID: "loading", Title: "loading...", ContentUri: "#", ContentFileUri: ""});
    const [ content, setContent ] = React.useState<string>("");

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
        if(article.ContentFileUri) {
            fetch(article.ContentFileUri)
                .then(async (res) => {
                    if(res.status === 200) {
                        let fileText = await res.text();
                        // remove the front matter and update content string
                        setContent(fileText.replace(/---$.*^---/ms, ""));
                    }
                })
        }
    }, [article]);

    function parseMarkdown(mdContent: string, baseUrl: string) {
        const markedOptions : marked.MarkedOptions = {
            baseUrl: baseUrl,
            sanitizer: DOMPurify.sanitize,
            smartypants: true,
            smartLists: true
        };

        return { 
            __html: marked.parse(mdContent, markedOptions)
        };
    }

    return (
        <>
        <h1>{article.Title || "Failed to load article"}</h1>
        <article dangerouslySetInnerHTML={parseMarkdown(content, article.ContentUri)} />
        </>
    )
}
export default ArticleViewer;