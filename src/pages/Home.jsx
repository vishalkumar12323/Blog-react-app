import { useState, useEffect } from "react";
import { db } from "../services/db_service";
import { getAuthState, addBlog } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import AllBlogs from "./AllBlogs";

const Home = () => {
  const authStatus = useSelector(getAuthState);
  const dispatch = useDispatch();

  const blogObj = {
    title: "my title",
    content: "my content",
    userId: "my userId",
    slug: "my-only-content",
  };
  useEffect(() => {
    dispatch(addBlog({ ...blogObj }));
    // db.getAllBlog()
    //   .then((blog) => blog && setBlog(blog.documents))
    //   .catch((e) => setError(e.message))
    //   .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <AllBlogs />
    </>
  );
};

export default Home;
