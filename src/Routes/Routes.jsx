import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Layout_Ext from "../Layout_Ext/Layout_Ext";
import Login from "../EXT-Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
            }
        ]
    }
]);

export default router;