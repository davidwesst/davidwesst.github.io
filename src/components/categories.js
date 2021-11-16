import React from 'react';
import { Link } from 'gatsby';

import * as styles from "../styles/categories.module.css";

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};

const getLabel = () => {
  return (
    <span className={styles.CategoriesLabel}>Categorized under </span>
  )
}

const Categories = ({ categories, showLabel }) => {
  return (
    <div>
      {showLabel ? getLabel() : '' }
      {categories &&
        categories.map((category) => {
          return (
            <span key={category} className={styles.Category} >
              <Link to={`/categories/${toKebabCase(category)}`}>{category}</Link>
            </span>
          );
        })}
    </div>
  );
};

export default Categories;
