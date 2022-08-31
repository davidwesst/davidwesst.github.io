import * as React from "react";
import { Link } from "react-router-dom";

export default function SiteNav() {
    return (
        <nav>
            <Link to="/">Home</Link> | { " " }
            <Link to="/blog">Blog</Link>
        </nav>
    );
}