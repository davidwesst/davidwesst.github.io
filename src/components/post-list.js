import React from 'react';
import { Link } from 'gatsby';
import Tags from './tags';
import Categories from './categories';

import * as postListStyles from '../styles/post-list.module.css';

const PostList = ({ posts, max }) => {
  const PostList = posts.map(({ frontmatter, fields, excerpt, timeToRead }) => {
    const { title, tags, categories, date, description } = frontmatter;
    const { slug } = fields;

    return (
      <PostListItem
        key={slug}
        tags={tags}
        categories={categories}
        title={title}
        date={date}
        slug={slug}
        timeToRead={timeToRead}
        description={description}
        excerpt={excerpt}
      />
    );
  });

  return <ul className={postListStyles.StyledPostList}>{PostList}</ul>;
};

export default PostList;

const PostListItem = ({
  title,
  date,
  timeToRead,
  tags,
  categories,
  excerpt,
  description,
  slug,
}) => {
  return (
    <li className={postListStyles.StyledPostListItem}>
      <Categories categories={categories} />

      <h2 className={postListStyles.PostListTitle}>
        <Link to={slug}>{title}</Link>
      </h2>
      <p className={postListStyles.PostListExcerpt}
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />

      <Tags tags={tags} />
      <div className={postListStyles.PostListMeta}>
        <span>{date}</span>
        <span>{timeToRead} mins</span>
      </div>
    </li>
  );
};
