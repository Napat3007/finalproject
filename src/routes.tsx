import {  createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./views/Home";

import { MainLayout } from "./components/Auth/MainLayout";
import Search from "./views/Search";
import { ShowDetail } from "./views/ShowDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Navigate to="home" /> },
            { path: "home", element: <Home/> },
            { path: "show/:id", element: <ShowDetail/> },
            { path: "search", element: <Search/> },
        ],
    },
]);