import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Videos({ data }) {
  return (
    <Layout>
      <Header headerText="Videos" />
      <p>Since starting down this game development journey, I have been creating video content updates about the projects, what I've learned and so forth. Below is a list of my most recent videos, which are all hosted and available on <a href={data.site.siteMetadata.social.youtube}>YouTube</a>.</p>
      <hr />
      {data.allYoutubeVideo.edges.map(({ node }) => (
        <Link to={`https://www.youtube.com/watch?v=${node.videoId}`}>
          <h3>{node.title}</h3>
          <em>{node.publishedAt}</em>
          <article>
            <img height={node.thumbnail.height/2} width={node.thumbnail.width/2} src={node.thumbnail.url} alt={`Thumbnail images for ${node.title} video`} />
          </article>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allYoutubeVideo(sort: {fields: publishedAt, order:DESC}) {
      edges {
        node {
          title
          description
          publishedAt
          thumbnail {
            url
            width
            height
          }
          description
          videoId
        }
      }
    }
    site {
      siteMetadata {
        social {
          github
          twitter
          youtube
        }
        title
      }
    }
  }
`