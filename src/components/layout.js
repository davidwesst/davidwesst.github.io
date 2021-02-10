import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "../styles/layout.module.css"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div style={{ margin: `3rem auto`, maxWidth:800, padding: `0 1rem` }}>
        <header>
            <h1>{ data.site.siteMetadata.title }</h1>
            <nav class={styles.navList} >
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/videos">Videos</Link>
            </nav>
        </header>
        {children}
    </div>
  )
}