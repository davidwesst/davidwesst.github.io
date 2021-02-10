import React from "react"
import { Helmet } from "react-helmet"
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
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
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