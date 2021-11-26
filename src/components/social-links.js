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
      <a href={link.url} key={link.name}>{link.name}</a>
    );
  });

  return (
    <nav>
      {socialLinks}
    </nav>
  )
};

export default SocialLinks;