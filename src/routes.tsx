import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./views/home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Navbar";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        // children: [
        //     { path: "/", element: <Navigate to="home" /> },
        //     // { path: "home", element: <HomeBanner/> },
        // ],
    },
]);