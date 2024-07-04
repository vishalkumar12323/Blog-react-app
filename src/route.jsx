import { createBrowserRouter } from "react-router-dom";
import { Layout, CheckUserOnLineOrOffline } from "./components";
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
        element: (
          <CheckUserOnLineOrOffline>
            <Home />
          </CheckUserOnLineOrOffline>
        ),
      },
      {
        path: "/login",

        element: (
          <CheckUserOnLineOrOffline>
            <Layout isAuthenticated={false}>
              <Login />
            </Layout>
          </CheckUserOnLineOrOffline>
        ),
      },
      {
        path: "/signup",
        element: (
          <CheckUserOnLineOrOffline>
            <Layout isAuthenticated={false}>
              <Signup />
            </Layout>
          </CheckUserOnLineOrOffline>
        ),
      },
      {
        path: "/all-blogs",
        element: (
          <CheckUserOnLineOrOffline>
            <Layout isAuthenticated>
              <AllBlogs />
            </Layout>
          </CheckUserOnLineOrOffline>
        ),
      },
      {
        path: "/add-blog",
        element: (
          <CheckUserOnLineOrOffline>
            <Layout isAuthenticated>
              <AddBlog />
            </Layout>
          </CheckUserOnLineOrOffline>
        ),
      },
      {
        path: "/blog",
        element: (
          // <CheckUserOnLineOrOffline>
          //   <Layout isAuthenticated>
          //   </Layout>
          // </CheckUserOnLineOrOffline>
          <Blog />
        ),
      },
      {
        path: "/edit-blog/:slug",
        element: (
          <CheckUserOnLineOrOffline>
            <Layout isAuthenticated>
              <EditBlog />
            </Layout>
          </CheckUserOnLineOrOffline>
        ),
      },
    ],
  },
]);
