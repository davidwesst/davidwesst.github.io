import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header>
            <h1>My Sweet Site</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </header>
        {children}
    </div>
  )
}