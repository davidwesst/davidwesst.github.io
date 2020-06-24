import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Welcome</h1>
      <Link to="/blog/">Check out my blog</Link>
      <p>What a world this is, eh?</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`