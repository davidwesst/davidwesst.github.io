import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import styled from 'styled-components';

const Videos = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout title="Videos">
      <HeaderWrapper>
        <h1>Videos</h1>

        <StyledMetaLinks>
          <Link
            css={`
              margin-top: var(--size-400);
              margin-right: 1rem;
              color: inherit;
              text-transform: uppercase;
            `}
            to="/tags"
          >
            view all tags
          </Link>
          <Link
            css={`
              margin-top: var(--size-400);
              color: inherit;
              text-transform: uppercase;
            `}
            to="/categories"
          >
            view all categories
          </Link>
        </StyledMetaLinks>
      </HeaderWrapper>

      <PostList posts={posts} />
    </Layout>
  );
};

export default Videos;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--size-900);
  margin-bottom: var(--size-700);

  h1 {
    max-width: none;
  }
`;

const StyledMetaLinks = styled.div`
  display: flex;
  flex-direction: row;
`

export const homePageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {fields: {contentType: {eq: "posts"}}, frontmatter: {categories: {in: "video"}}}
      sort: { order: DESC, fields: frontmatter___date }
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
          title
          tags
          categories
        }
      }
    }
  }
`;
