import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

const HomePage = ({ data }) => {
  const intro = data.markdownRemark.html;
  const title = `About David Wesst`;

  return (
    <Layout title={title}>
      <Intro
        dangerouslySetInnerHTML={{
          __html: intro,
        }}
      />
    </Layout>
  );
};

export default HomePage;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60ch;
  align-items: left;
  margin-right: auto;
  margin-left: auto;
  margin-top: var(--size-800);
  margin-bottom: var(--size-900);
  text-align: left;

  & p {
    text-transform: capitalize;
    font-size: var(--size-400);
  }

  & h1, & h2 {
    margin: 0.25em 0;
  }

  @media screen and (max-width: 700px) {
    & h1 {
      font-size: var(--size-700);
    }
  }
`;

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
