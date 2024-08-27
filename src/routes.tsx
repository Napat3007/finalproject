import {  createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./views/Home";

import { MainLayout } from "./components/Auth/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Navigate to="home" /> },
            { path: "home", element: <Home/> },
        ],
    },
]);