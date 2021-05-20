import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};

const Tags = ({ tags }) => {
  return (
    <StyledTags>
      {tags &&
        tags.map((tag) => {
          return (
            <Tag key={tag}>
              <Link to={`/tags/${toKebabCase(tag)}`}>{tag}</Link>
            </Tag>
          );
        })}
    </StyledTags>
  );
};

export default Tags;

const Tag = styled.span`
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  font-size: var(--size-300);

  & a {
    position: relative;
    z-index: 2;
    background-color: rgba(68, 100, 173, 0.4);
    text-decoration: none;
    padding: 0.2rem 0.2rem;
    color: inherit;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
  }

  & a:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom; 2rem;
`