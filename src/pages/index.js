import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SocialLinks from '../components/social-links';
import PostList from '../components/post-list';

const Index = ({ data }) => {
    const blogPosts = data.allMarkdownRemark.nodes;

    return (
        <Layout title="davidwesst.com">
            <section>
                <article>Hey friendo, it's DW.</article>
                <article>I play and build cool stuff. That's it.</article>
                <SocialLinks />
            </section>
            <section>
                <PostList posts={blogPosts} />
            </section>
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