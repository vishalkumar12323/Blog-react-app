import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout, CheckUserOnLineOrOffline, ErrorPage } from "./components";
import Home from "./pages/Home.tsx";
import AddBlog from "./pages/AddBlog.tsx";
import Blog from "./pages/Blog.tsx";
import EditBlog from "./pages/EditBlog.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import App from "./App.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: "/edit/:id/:slug",
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
