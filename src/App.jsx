import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Layout from "./components/Layout";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> }, // Home at root path
            { path: "projects", element: <Projects /> },
            { path: "projects/:id", element: <ProjectDetail /> },
            { path: "about", element: <About /> },
        ],
    },
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
