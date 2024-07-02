import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import Blog from "./pages/Blog";
import EditBlog from "./pages/EditBlog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from "./App";
import AllBlogs from "./pages/AllBlogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",

        element: (
          <Layout isAuthenticated={false}>
            <Login />
          </Layout>
        ),
      },
      {
        path: "/signup",
        element: (
          <Layout isAuthenticated={false}>
            <Signup />
          </Layout>
        ),
      },
      {
        path: "/all-blogs",
        element: (
          <Layout isAuthenticated>
            <AllBlogs />
          </Layout>
        ),
      },
      {
        path: "/add-blog",
        element: (
          <Layout isAuthenticated>
            <AddBlog />
          </Layout>
        ),
      },
      {
        path: "/blog/:slug",
        element: (
          <Layout isAuthenticated>
            <Blog />
          </Layout>
        ),
      },
      {
        path: "/edit-blog/:slug",
        element: (
          <Layout isAuthenticated>
            <EditBlog />
          </Layout>
        ),
      },
    ],
  },
]);
