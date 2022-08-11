import * as React from "react";
import { Outlet } from "react-router-dom";
import SiteNav from "./SiteNav";

const App = () => {
    return (
        <>
            <SiteNav />
            <main>
                <Outlet />
            </main>
        </>
    );
};
export default App;