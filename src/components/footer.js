import React from 'react';
import Container from './container';
import SocialLinks from './social-links';

import * as styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.StyledFooter}>
      <div className={styles.FooterWrapper}>
        <SocialLinks />

        <Container className={styles.FooterAttribution}>
          Hand-crafted with love by{' '}
          <a href="https://twitter.com/yinkakun">Yinka Adedire</a>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;