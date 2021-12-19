import React from 'react';
import { Link } from 'gatsby';
import Tags from './tags';

import * as styles from '../styles/post-list.module.css';

const PostList = ({ posts, maxCount = 0, listTitle = 'Posts' }) => {
  const allPostListItems = posts.map(({ frontmatter, fields, excerpt, timeToRead }) => {
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
  
  const postListItemsToDisplay = (maxCount > 0) ? allPostListItems.slice(0, maxCount) : allPostListItems;
  return (
    <>
      {postListItemsToDisplay}
      {MoreLink(maxCount)}
    </>
  );
};

const MoreLink = function(maxCount) {
  if(maxCount > 0) {
    return <Link to="/blog">More...</Link>;
  }
  else {
    return;
  }
}

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
      <article className={styles.item}>
        <header>
          <Link to={slug}><h3>{title}</h3></Link>
          <span>{date} // {timeToRead} min read</span> // <Tags tags={tags} />
        </header>
        <p
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
        />
      </article>
  );
};
