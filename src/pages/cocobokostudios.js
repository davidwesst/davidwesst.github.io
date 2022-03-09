import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

//import * as style from '../styles/index.module.css';

const CocobokoStudiosPage = ({ data }) => {
    return (
        <Layout title="Cocoboko Studios">
          <h2>Cocoboko Studios is a dream-in-progress</h2>
          <article>
            <p>It's true.</p>
            <p>This is a dream of mine <Link to="about">(David Wesst)</Link> to code cool stuff and share it with the world. I say it's a "dream-in-progress" because, as you can see, I've never managed to get anything released even though I've had the dream for many, many years.</p>
            <p>Named after an inside joke I had with my daughter when she was still a toddler, I will continue to work to release things here when "they are done" as it is said.</p>
          </article>
          <article>
            <h3>Dreams-In-Progress</h3>
            <p>This list will change over time, but these projects are the ones I think I will turn into something.</p>
            <ul>
              <li>Video Game Library (App)</li>
              <li><Link to="https://davidwesst.itch.io/out-the-door">Out the Door (Game)</Link></li>
              <li>Unshared Ink Game</li>
            </ul>
          </article>
        </Layout>
    );
};
export default CocobokoStudiosPage;
