import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import ProjectList from '../components/project-list';

//import * as style from '../styles/index.module.css';

const CocobokoStudiosPage = ({ data }) => {
    return (
        <Layout title="Cocoboko Studios">
          <h2>Cocoboko Studios is a dream-in-progress</h2>
          <article>
            <p>It might sound cheesy, but it's true.</p>
            <p>Named after an inside joke I had with my daughter when she was still a toddler, Cocoboko Studios is a dream of mine to build cool stuff with code and share it with the world. I say it's a "dream-in-progress" because it is. It's something I dream about constantly, and work on it whenever I have the time and the focus.</p>
          </article>
          <article>
            <h3>Dreams-In-Progress</h3>
            <ProjectList />
          </article>
        </Layout>
    );
};
export default CocobokoStudiosPage;

