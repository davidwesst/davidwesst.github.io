import React from "react";
import { Outlet } from "react-router-dom";
import SiteNav from "../components/SiteNav.jsx";

export default function App() {
    return (
        <section>
            <h1>This is the App!</h1>
            <SiteNav />
            <Outlet />
        </section>
    );
}