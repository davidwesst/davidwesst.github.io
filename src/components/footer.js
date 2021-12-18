import React from 'react';
import Container from './container';
import SocialLinks from './social-links';

import * as style from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={style.siteFooter}>
      <SocialLinks />
    </footer>

  );
};

export default Footer;