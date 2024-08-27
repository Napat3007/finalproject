import {  createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./views/Home";

import { MainLayout } from "./components/Auth/MainLayout";
import { ShowDetail } from "./views/ShowDetail";
import Search from "./views/Search";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Navigate to="home" /> },
            { path: "home", element: <Home/> },
            { path: "show", element: <ShowDetail/> },
            { path: "search", element: <Search/> },
                  
        ],
    },
]);