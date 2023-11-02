import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/ExtNav/NavBar";

const Layout_Ext = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <p>This is EXT layout</p>
        </div>
    );
};

export default Layout_Ext;