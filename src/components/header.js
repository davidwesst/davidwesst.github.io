import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import * as style from '../styles/header.module.css';
import SocialLinks from './social-links';

const Header = () => {
  const data = useStaticQuery(graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
  const siteTitle = data.site.siteMetadata.title;

  return (
    <header className={style.siteHeader}>
      <h1><Link to="/">{siteTitle}</Link></h1>
      <img className={style.logo} src="https://plchldr.co/i/100x100?&bg=ff0000&fc=fff&text=logo" />
      <nav>
          <Link to="/about">[A]bout</Link>
          <Link to="/blog">[B]log</Link>
          <Link to="/play">[G]amelog</Link>
      </nav>
    </header>
  );
};

export default Header;