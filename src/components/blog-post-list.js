import React from "react"
import styles from "../styles/blog-post-list.module.css"

console.log(styles)

const BlogPost = props => (
    <div className={styles.blogPost}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
)

export default function BlogPostList() {
    return (
        <div>
            <BlogPost
                title="This is my title 1"
                excerpt="This is my excerpt 1"
            />
            <BlogPost
                title="This is my title 2"
                excerpt="This is my excerpt 2"
            />
            <BlogPost
                title="This is my title 3"
                excerpt="This is my excerpt 3"
            />
        </div>
    )
}
