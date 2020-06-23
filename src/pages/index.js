import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <article style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <Link to="/blog/">Check out my blog</Link>
      <p>What a world this is, eh?</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </article>
  )
}
