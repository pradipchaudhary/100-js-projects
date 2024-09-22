import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div id="page-content" className="">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
