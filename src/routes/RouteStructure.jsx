import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { ErrorRoute } from "./ErrorRoute";
import { Routes } from "../constants/Routes";
import { Layout } from "../components/Layout";

const Add = lazy(() => import("../pages/public/Add"));
const Edit = lazy(() => import("../pages/public/Edit"));
const Home = lazy(() => import("../pages/public/Home"));

export const RouteStructure = createBrowserRouter([{
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
        { path: Routes.HOME.path, element: <Home /> },
        { path: Routes.ADD.path, element: <Add /> },
        { path: Routes.EDIT.path, element: <Edit /> },
    ]
}]);