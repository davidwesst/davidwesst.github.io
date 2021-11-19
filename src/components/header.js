import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import * as styles from '../styles/header.module.css';

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <header className={`${styles.StyledHeader} ${styles.HeaderWrapper}`}>
        <div className={styles.HeaderTitle}>
          <Link to="/">{site.siteMetadata.title}</Link>
        </div>

        <ul className={styles.StyledNavList}>
          <li className={styles.StyledNavListItem}>
            <Link to="/blog">Blog</Link>
          </li>

          <li className={styles.StyledNavListItem}>
            <Link to="/about">About</Link>
          </li>

          <li className={styles.StyledNavListItem}>
            <Link to="/play-my-collection">Play My Collection</Link>
          </li>

        </ul>
    </header>
  );
};

export default Header;