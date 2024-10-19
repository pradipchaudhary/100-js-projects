import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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
