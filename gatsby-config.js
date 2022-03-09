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
    title: `David Wesst`,
    author: {
      name: `David Wesst`,
      summary: `Technology by Day. Creativity by Night.`,
    },
    description: `The personal and somewhat professional website for David Wesst, a.k.a. DW, a.k.a. Wessty.`,
    siteUrl: `https://www.davidwesst.com`,
    social: {
      twitter: `davidwesst`,
    },
    socialLinks: [
      {
        name: 'youtube',
        displayName: '[Y]ouTube',
        url: 'https://youtube.com/davidwesst'
      },
      {
        name: 'github',
        displayName: '[G]itHub',
        url: 'https://github.com/davidwesst',
      },
      {
        name: 'twitter',
        displayName: '[T]witter',
        url: 'https://twitter.com/davidwesst',
      },
      {
        name: 'instagram',
        displayName: '[I]nstagram',
        url: 'https://instagram.com/davidwesst',
      },
      {
        name: 'facebook',
        displayName: '[F]acebook',
        url: 'https://facebook.com/davidwesst'
      },
      {
        name: 'linkedin',
        displayName: '[L]inkedIn',
        url: 'https://ca.linkedin.com/in/davidwesst'
      }
    ],
  },
  plugins: [
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
        ignore: [`**/\.*`],
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content/data`
      }
    },
    `gatsby-transformer-csv`,
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
                  url: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {fields: {contentType: {eq: "posts"}}}
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
            output: '/blog/rss.xml',
            match: "^/blog/",
            title: "davidwesst.com RSS"
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway\:300,400,400i,700,700i`,
                `open sans\:400,400i,700,700i`,
                `source code pro\:400,400i,700`,
              ],
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-dts-css-modules`
  ],
};