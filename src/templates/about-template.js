import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const HomePage = ({ data }) => {
  const intro = data.markdownRemark.html;
  const title = `About`;

  return (
    <Layout title={title}>
      <article
        dangerouslySetInnerHTML={{
          __html: intro,
        }}
      />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          excerpt
          title
          tags
          categories
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
