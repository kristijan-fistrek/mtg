import { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserDashboard from "../pages/UserDashboard";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/dashboard",
        element: <UserDashboard />,
    },
    {
        path: "*",
        element: <h1>404 - Not Found</h1>, // fallback za nepostojeće rute
    },
];