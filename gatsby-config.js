/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const activeEnv = process.env.NODE_ENV || "development"
require("dotenv").config({
  path: `.env.${activeEnv}`,
})
console.log(`the node process environment is ${activeEnv}`)

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    title: `davidwesst.com`,
    siteUrl: `https://www.davidwesst.com`,
    description: `Amateur Gamedev Done Professionally`,
    tagline: `Amateur Gamedev Done Professionally`,
    author: {
      name: `David Wesst`,
      shortname: `DW`,
    },
    social: {
      twitter: `https://twitter.com/davidwesst`,
      youtube: `https://youtube.com/davidwesst`,
      github: `https://github.com/davidwesst`
    }
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            maxWidth: 800,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/blog/rss.xml",
            match: "^/blog/"
          },
          {
            serialize: ({ query: { allYoutubeVideo } }) => {
              return allYoutubeVideo.edges.map(edge => {
                return Object.assign({}, {
                  title: edge.node.title,
                  date: edge.node.publishedAt,
                  url: `https://www.youtube.com/watch?v=${edge.node.videoId}`,
                });
              });
            },
            query: `
            {
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
                    videoId
                  }
                }
              }
            }
            `,
            output: "/videos/rss.xml",
            match: "^/videos/"
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCjygutS5FiTM_4Nhlg0dA5w'],
        apiKey: process.env.YOUTUBE_API_KEY,
        maxVideos: 50
      }
    }
  ],
}
