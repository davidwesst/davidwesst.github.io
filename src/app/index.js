import "./index.css";

import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./components/App.tsx";
import Blog from "./pages/Blog.tsx";
import Home from "./pages/Home.tsx";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<h1>Article here!</h1>} />
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