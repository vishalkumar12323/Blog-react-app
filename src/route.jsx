import { createBrowserRouter } from "react-router-dom";
import { Layout, CheckUserOnLineOrOffline } from "./components";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import Blog from "./pages/Blog";
import EditBlog from "./pages/EditBlog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from "./App";

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
        path: "/new-blog",
        element: (
          <CheckUserOnLineOrOffline>
            <Layout isAuthenticated>
              <AddBlog />
            </Layout>
          </CheckUserOnLineOrOffline>
        ),
      },
      {
        path: "/blog/:id/:slug",
        element: (
          <CheckUserOnLineOrOffline>
            <Layout isAuthenticated>
              <Blog />
            </Layout>
          </CheckUserOnLineOrOffline>
        ),
      },
      {
        path: "/edit-blog/:id",
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
