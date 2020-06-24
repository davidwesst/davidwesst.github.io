import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h2>Welcome to my website.</h2>
      <section>
        <article>
          <h3>A brief introduction</h3>
          <p>My name is David Wesst, also known as Wessty, also known as DW.</p>
          <p>I am an amateur game developer with a day job and a family life. My current goal is to be a "solo indie" where I make my own games and people play them. In a previous life, I was a Microsoft MVP (Most Valuable Professional) that focused on front-end web dev technology.</p> 
        </article>
        <article>
          <h3>About this place</h3>
          <p>This website is a perpetual work-in-progress side project with the goal of collecting all things that I create: blog posts, talks, game projects, and whatever else I can think of.</p>
          <p>You'll see it evolve over time, but in the meatime you should checkout my <Link to="/blog">blog</Link> as I've finally managed to get it back online with all the content back to 2015.</p>
          <p>You can also find me around these parts: </p>
          <ul>
            <li><a href={data.site.siteMetadata.social.youtube}>YouTube</a> - Where I post videos every couple of weeks (or so) about game development progress and learnings.</li>
            <li><a href={data.site.siteMetadata.social.twitter}>Twitter</a> - Where I share random thoughts about stuff, primarily gamedev and the games industry.</li>
            <li><a href={data.site.siteMetadata.social.github}>GitHub</a> - Where I share some projects, like this website, and gamedev tools.</li>
          </ul>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        social {
          github
          twitter
          youtube
        }
        title
      }
    }
  }
`