import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Blog({ data }) {
  return (
    <Layout>
      <Header headerText="Blog" />
      <p>I've been blogging for longer than what is posted here, but hopefully I dig up a backup of my content prior to 2015. Until then, take a peek.</p>
      <hr />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={`/blog${node.fields.slug}`}>
          <h3>{node.frontmatter.title}</h3>
          <em>{node.frontmatter.date}</em>
          <p>{node.excerpt}</p>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query allPostsQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`