import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AddBlog from "./pages/AddBlog.jsx";
import AllBlog from "./pages/AllBlogs.jsx";
import EditBlog from "./pages/EditBlog.jsx";
import Blog from "./pages/Blog.jsx";

const router = createBrowserRouter([
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
        path: "/add-blog",
        element: (
          <Layout isAuthenticated>
            <AddBlog />
          </Layout>
        ),
      },
      {
        path: "/all-blog",
        element: (
          <Layout isAuthenticated>
            <AllBlog />
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
