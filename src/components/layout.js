import React, { Fragment } from 'react';
import Seo from './seo';
import Header from './header';
import Footer from './footer';

import '../styles/global.css';

const Layout = ({ children, title, description, socialImage = ''}) => {
  return (
    <section className="display">
      <Seo title={title} description={description} image={socialImage} />
      <Header />
      <main className={`content`}>
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
