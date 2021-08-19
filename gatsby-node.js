const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { report } = require("process");

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages({ graphql, actions, reporter });
  await createGamePages({ graphql, actions, reporter });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // for markdown files
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
    });

    const fileNode = getNode(node.parent);

    createNodeField({
      node,
      name: `contentType`,
      value: fileNode.sourceInstanceName,
    });

    if (fileNode.sourceInstanceName === 'posts') {
      createNodeField({
        name: `slug`,
        node,
        value: `/blog${relativeFilePath}`,
      });
    }

    if (fileNode.sourceInstanceName === 'pages') {
      createNodeField({
        name: `slug`,
        node,
        value: relativeFilePath,
      });
    }
  }

  // for PlayMyCollection games
  if(node.internal.type === `PlayMyCollectionCsv`)
  {
    const relativeFilePath = createFilePath({
      node,
      getNode
    });

    const fileNode = getNode(node.parent);

    createNodeField({
      node,
      name: `slug`,
      value: generateGameNodePath(node)
    })
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      template: String
      tags: [String!]
    }

    type Fields {
      slug: String
      contentType: String
    }
  `);
};

// create page functions
const createBlogPostPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          nodes {
            fields {
              contentType
              slug
            }
            frontmatter {
              template
            }
          }
        }
        tagsGroup: allMarkdownRemark(
          limit: 2000
          filter: { fields: { contentType: { eq: "posts" } } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
        categoriesGroup: allMarkdownRemark(
          limit: 2000
          filter: { fields: { contentType: { eq: "posts" } } }
        ) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const tags = result.data.tagsGroup.group;
  const categories = result.data.categoriesGroup.group;
  const allMarkdownNodes = result.data.allMarkdownRemark.nodes;

  const blogMarkdownNodes = allMarkdownNodes.filter(
    (node) => node.fields.contentType === `posts`
  );

  const pageMarkdownNodes = allMarkdownNodes.filter(
    (node) => node.fields.contentType === `pages`
  );

  if (blogMarkdownNodes.length > 0) {
    blogMarkdownNodes.forEach((node, index) => {
      let prevSlug = null;
      let nextSlug = null;

      if (index > 0) {
        prevSlug = blogMarkdownNodes[index - 1].fields.slug;
      }

      if (index < blogMarkdownNodes.length - 1) {
        nextSlug = blogMarkdownNodes[index + 1].fields.slug;
      }

      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`./src/templates/post-template.js`),
        context: {
          slug: `${node.fields.slug}`,
          prevSlug: prevSlug,
          nextSlug: nextSlug,
        },
      });
    });
  }

  if (pageMarkdownNodes.length > 0) {
    pageMarkdownNodes.forEach((node) => {
      if (node.frontmatter.template) {
        const templateFile = `${String(node.frontmatter.template)}.js`;

        createPage({
          path: `${node.fields.slug}`,
          component: path.resolve(`src/templates/${templateFile}`),
          context: {
            slug: `${node.fields.slug}`,
          },
        });
      }
    });
  }

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${toKebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tags-template.js`),
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  categories.forEach((category) => {
    createPage({
      path: `/categories/${toKebabCase(category.fieldValue)}/`,
      component: path.resolve(`./src/templates/categories-template.js`),
      context: {
        category: category.fieldValue,
      },
    });
  });
}

const createGamePages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
    {
      allPlayMyCollectionCsv {
        nodes {
          Co_op_Notes
          Co_op_Preference
          Controls
          Controls_Comment
          Date_Added
          Gameplay
          Gameplay_Comment
          Platform
          Price_Complete
          Price_GameOnly
          Puzzles
          Puzzles_Comment
          Stream_Date
          Stream_URL
          The_Fun
          The_Hook
          The_Less_Fun
          Title
          WTF_URL
          Web_URL
          Worth_It
        }
      }
    }
    `
  );

  if(result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your game list from CSV`,
      result.errors
    );
    return;
  }

  const gameNodes = result.data.allPlayMyCollectionCsv.nodes;
  if(gameNodes.length > 0) {
    gameNodes.forEach((node) => {
      createPage({
        path: generateGameNodePath(node),
        component: path.resolve(`./src/templates/game-template.js`),
        context: {
          Co_op_Notes: node.Co_op_Notes,
          Co_op_Preference: node.Co_op_Preference,
          Controls: node.Controls,
          Controls_Comment: node.Controls_Comment,
          Date_Added: node.Date_Added,
          Gameplay: node.Gameplay, 
          Gameplay_Comment: node.Gameplay_Comment,
          Platform: node.Platform,
          Price_Complete: node.Price_Complete, 
          Price_GameOnly: node.Price_GameOnly, 
          Puzzles: node.Puzzles, 
          Puzzles_Comment: node.Puzzles_Comment,
          Stream_Date: node.Stream_Date, 
          Stream_URL: node.Stream_URL, 
          The_Fun: node.The_Fun, 
          The_Hook: node.The_Hook, 
          The_Less_Fun: node.The_Less_Fun,
          Title: node.Title,
          WTF_URL: node.WTF_URL,
          Web_URL: node.Web_URL, 
          Worth_It: node.Worth_It
        }
      });
    });
  }
  else {
    reporter.panicOnBuild(`There is no game data!`);
  }
}

const toNormalizedSlug = (title) => {
  return title.toLowerCase().replace(/[\:\?\!\@\#\$\%\^\&\*\(\)]/g,"").replace(/\s/g,"-");
}

const generateGameNodePath = (node) => {
  return `/play/${toNormalizedSlug(node.Title)}`;
}
