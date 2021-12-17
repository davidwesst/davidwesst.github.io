import React, { Fragment } from 'react';
import Seo from './seo';
import Header from './header';
import Footer from './footer';
import Container from './container';

import '../styles/global.css';

const Layout = ({ children, title, description, socialImage = ''}) => {
  return (
    <>
      <Seo title={title} description={description} image={socialImage} />
      <Header />
      <main className={`content`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
