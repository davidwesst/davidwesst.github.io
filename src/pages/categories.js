import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};

const Categories = ({ data }) => {
  const categories = data.allMarkdownRemark.group;

  return (
    <Layout title="All Categories">
      <h1>All Tags</h1>

      <ul>
        {categories.map((category) => (
          <li key={category.fieldValue}>
            <Link to={`/categories/${toKebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Categories;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
