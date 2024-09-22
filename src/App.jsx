import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Layout from "./components/Layout";
import ScrollComponent from "./components/ScrollComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> }, // Home at root path
            { path: "projects", element: <Projects /> },
            { path: "about", element: <About /> },
        ],
    },
]);

const App = () => {
    return (
        <>
            <ScrollComponent />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
