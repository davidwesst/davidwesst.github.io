import "./index.css";

import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./app/App.jsx";
import Blog from "./blog/Blog.tsx";
import Home from "./home/Home.jsx";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} >
                    <Route path=":id" element={<h1>Article here!</h1>} />
                </Route>
                <Route
                    path="*"
                    element={
                        <h1>Nothing here!</h1>      
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
);