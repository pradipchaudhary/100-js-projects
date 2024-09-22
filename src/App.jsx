import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "projects", element: <Projects /> },
            { path: "about", element: <About /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
