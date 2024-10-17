import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Page Import
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomePage /> }, // Home at root path
            // { path: "about", element: <AboutPage /> },
            // { path: "projects", element: <ProjectsPage /> },
            // { path: "projects/:id", element: <ProjectDetailPage /> },
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
