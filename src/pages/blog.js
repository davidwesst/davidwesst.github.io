import React from "react"

import BlogPostList from "../components/blog-post-list"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Blog() {
  return (
    <Layout>
      <Header headerText="This is my blog" />
      <p>Such wow. Very React.</p>
      <h2>Blog Posts</h2>
      <BlogPostList />
    </Layout>
  )
}