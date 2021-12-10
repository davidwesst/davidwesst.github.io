import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';

import * as style from '../styles/index.module.css';

const Index = ({ data }) => {
    const blogPosts = data.allMarkdownRemark.nodes;

    return (
        <Layout title="Home">
            <section className={style.splash}>
                <article>
                  <p>Hey friendo, it's DW.</p>
                  <p>I play and build cool stuff on the internet.</p>
                </article>
                <article>
                  <p>I <a href="https://twitch.tv/davidwesst">livestream at 9pm (UTC-6)</a> on Twitch every Tuesday (Play) and Thursday (Code). See the <a href="https://twitch.tv/davidwesst/schedule"> schedule</a> for details and changes, just in case.</p>
                  <p>I tend to share non-live content about tech stuff I like and do on <a href="https://youtube.com/davidwesst">YouTube</a> and on my <Link to="/blog">Blog</Link>.</p>
                  <p>Oh, and sometimes I like to throw random thoughts, links, and updates on <a href="https://twitter.com/davidwesst">Twitter</a>.</p>
                </article>
                <article>
                  <p>Thanks for playing.</p>
                </article>
            </section>
            <PostList listTitle = "Latest Posts" posts={blogPosts} maxCount={3} />
        </Layout>
    );
};
export default Index;

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: {fields: {contentType: {eq: "posts"}}}
            sort: {order: DESC, fields: frontmatter___date}
          ) {
            nodes {
              frontmatter {
                title
                updated
                date
                tags
                description
                categories
              }
              fields {
                contentType
                slug
              }
              excerpt
              timeToRead
            }
          }
        allPlayMyCollectionCsv {
            nodes {
                Title
                Stream_Date
                Platform
            }
        }
    }
`