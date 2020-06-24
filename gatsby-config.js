/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `davidwesst.com`,
    tagline: `Amateur GameDev Done Professionally`,
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
    `gatsby-transformer-remark`
  ],
}
