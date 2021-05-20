import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import StyledLink from '../components/styled-link';
import styled from 'styled-components';

const CategoriesTemplate = ({ pageContext, data }) => {
  const { category } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.nodes;
  const title = `Posts tagged ${category}`;

  return (
    <Layout title={title}>
      <CategoryTemplateWrapper>
        <Title>
          {totalCount} posts in category "{category}"
        </Title>
        <Link
          css={`
            margin-top: var(--size-400);
            display: inline-block;
            color: inherit;
            text-transform: uppercase;
          `}
          to="/categories"
        >
          view all tags
        </Link>
        <PostList posts={posts} />

        <StyledLink
          css={`
            margin-top: var(--size-400);
            display: inline-block;
          `}
          to="/categories"
        >
          View All Categories
        </StyledLink>
      </CategoryTemplateWrapper>
    </Layout>
  );
};

export default CategoriesTemplate;

const CategoryTemplateWrapper = styled.div`
  padding-top: var(--size-900);
`;

const Title = styled.h1`
  font-size: var(--size-700);
`;

