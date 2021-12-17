import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
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

  function Logo() {
    return <StaticImage 
              src="../images/logo-ROUND.png" 
              alt="DW Logo" 
              width={100}
              height={100}
              layout="fixed"
              />;
  }

  return (
    <header className={`${style.siteHeader}`}>
      <section className={`content ${style.top}`}>
        <h1><Link to="/">{siteTitle}</Link></h1>
        {Logo()}
      </section>
      <nav className={`content`}>
          <Link to="/about">[A]bout</Link>
          <Link to="/blog">[B]log</Link>
          <Link to="/play">[G]amelog</Link>
      </nav>
    </header>
  );
};

export default Header;