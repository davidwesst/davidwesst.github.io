import React from "react";
import { Outlet } from "react-router-dom";
import SiteNav from "../components/SiteNav.jsx";

export default function App() {
    return (
        <>
            <SiteNav />
            <main>
                <Outlet />
            </main>
        </>
    );
}