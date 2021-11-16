import React from 'react';
import { Link } from 'gatsby';

import * as styles from "../styles/tags.module.css";

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};

const getLabel = () => {
  return (
    <span className={styles.TagsLabel}>Tagged with</span>
  )
}

const Tags = ({ tags, showLabel }) => {
  return (
    <div className={styles.StyledTags} > 
      {showLabel ? getLabel() : ''}
      {tags &&
        tags.map((tag) => {
          return (
            <span className={styles.Tag} key={tag}>
              <Link to={`/tags/${toKebabCase(tag)}`}>{tag}</Link>
            </span>
          );
        })}
    </div>
  );
};

export default Tags;