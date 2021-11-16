import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import * as styles from '../styles/social-links.module.css';

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialLinks {
            name
            url
          }
        }
      }
    }
  `);

  const socialLinks = data.site.siteMetadata.socialLinks.map((link) => {
    return (
      <li className={styles.SocialLinkItem} key={link.name}>
        <a href={link.url}>{link.name}</a>
      </li>
    );
  });

  return <ul className={styles.SocialLinkList}>{socialLinks}</ul>;
};

export default SocialLinks;