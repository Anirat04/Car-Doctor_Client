import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Layout_Ext from "../Layout_Ext/Layout_Ext";
import Login from "../EXT-Pages/Login/Login";
import Register from "../EXT-Pages/Register/Register";
import Error from "../Pages/Shared/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    },
    {
        path: "/ext",
        element: <Layout_Ext></Layout_Ext>,
        children: [
            {
                path: "/ext/login",
                element: <Login></Login>
            },
            {
                path: "/ext/register",
                element: <Register></Register>
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    },
    // {
    //     path: "*",
    //     element: <Error></Error>
    // }
]);

export default router;