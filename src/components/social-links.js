import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialLinks {
            displayName
            url
          }
        }
      }
    }
  `);

  const socialLinks = data.site.siteMetadata.socialLinks.map((link) => {
    return (
      <a href={link.url} key={link.displayName}>{link.displayName}</a>
    );
  });

  return (
    <nav>
      {socialLinks}
    </nav>
  )
};

export default SocialLinks;