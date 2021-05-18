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
  siteMetadata: {
    title: `Gatsby Glass`,
    author: {
      name: `Yinka Adedire`,
      summary: `Self-taught front-end web dev. JAMStack.`,
    },
    description: `A minimal & beautiful gatsby personal blog starter with a nice glassmorphism UI.`,
    siteUrl: `https://gatsbyglass.netlify.app`,
    social: {
      twitter: `yinkakun`,
    },
    socialLinks: [
      {
        name: 'github',
        url: 'https://github.com',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `media`,
        path: `${__dirname}/static/media`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro`, `Poppins\:400,400i,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Frosted Blog`,
        short_name: `Gatsby Frosted`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};


// module.exports = {
//   flags: {
//     PRESERVE_WEBPACK_CACHE: true,
//   },
//   siteMetadata: {
//     title: `davidwesst.com`,
//     siteUrl: `https://www.davidwesst.com`,
//     description: `Amateur Gamedev Done Professionally`,
//     tagline: `Amateur Gamedev Done Professionally`,
//     author: {
//       name: `David Wesst`,
//       shortname: `DW`,
//     },
//     social: {
//       twitter: `https://twitter.com/davidwesst`,
//       youtube: `https://youtube.com/davidwesst`,
//       github: `https://github.com/davidwesst`
//     }
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`,
//     {
//       resolve: `gatsby-transformer-remark`,
//       options: {
//         plugins: [
//           {
//             resolve: `gatsby-remark-images`,
//             maxWidth: 800,
//           }
//         ]
//       }
//     },
//     {
//       resolve: `gatsby-plugin-typography`,
//       options: {
//         pathToConfigModule: `src/utils/typography`
//       }
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `blog`,
//         path: `${__dirname}/content/blog`
//       }
//     },
//     {
//       resolve: `gatsby-plugin-feed`,
//       options: {
//         feeds: [
//           {
//             serialize: ({ query: { site, allMarkdownRemark } }) => {
//               return allMarkdownRemark.edges.map(edge => {
//                 return Object.assign({}, edge.node.frontmatter, {
//                   description: edge.node.excerpt,
//                   date: edge.node.frontmatter.date,
//                   url: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
//                   guid: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
//                   custom_elements: [{ "content:encoded": edge.node.html }]
//                 });
//               });
//             },
//             query: `
//               {
//                 allMarkdownRemark(
//                   sort: { order: DESC, fields: [frontmatter___date] },
//                 ) {
//                   edges {
//                     node {
//                       excerpt
//                       html
//                       fields { slug }
//                       frontmatter {
//                         title
//                         date
//                       }
//                     }
//                   }
//                 }
//               }
//             `,
//             output: "/blog/rss.xml",
//             match: "^/blog/"
//           },
//           {
//             serialize: ({ query: { allYoutubeVideo } }) => {
//               return allYoutubeVideo.edges.map(edge => {
//                 return Object.assign({}, {
//                   title: edge.node.title,
//                   date: edge.node.publishedAt,
//                   url: `https://www.youtube.com/watch?v=${edge.node.videoId}`,
//                 });
//               });
//             },
//             query: `
//             {
//               allYoutubeVideo(sort: {fields: publishedAt, order:DESC}) {
//                 edges {
//                   node {
//                     title
//                     description
//                     publishedAt
//                     thumbnail {
//                       url
//                       width
//                       height
//                     }
//                     videoId
//                   }
//                 }
//               }
//             }
//             `,
//             output: "/videos/rss.xml",
//             match: "^/videos/"
//           }
//         ]
//       }
//     },
//     {
//       resolve: `gatsby-source-youtube-v2`,
//       options: {
//         channelId: ['UCjygutS5FiTM_4Nhlg0dA5w'],
//         apiKey: process.env.YOUTUBE_API_KEY,
//         maxVideos: 50
//       }
//     }
//   ],
// }
