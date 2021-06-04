import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};

const getLabel = () => {
  return (
    <CategoriesLabel>Categorized under </CategoriesLabel>
  )
}

const Categories = ({ categories, showLabel }) => {
  return (
    <div>
      {showLabel ? getLabel() : '' }
      {categories &&
        categories.map((category) => {
          return (
            <Category key={category}>
              <Link to={`/categories/${toKebabCase(category)}`}>{category}</Link>
            </Category>
          );
        })}
    </div>
  );
};

export default Categories;

const Category = styled.span`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-300);

  & a {
    position: relative;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    color: inherit;
    padding: 0.2rem 0.6rem;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
  }

  & a:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const CategoriesLabel = styled.span`
  margin-right: 0.25rem;
  vertical-align: middle;
`
