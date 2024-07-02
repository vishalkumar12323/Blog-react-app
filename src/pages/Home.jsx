import { useState, useEffect } from "react";
import { db } from "../services/db_service";
import { getAuthState, addBlog } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import AllBlogs from "./AllBlogs";

const Home = () => {
  const { status, user } = useSelector(getAuthState);
  const dispatch = useDispatch();

  const blogObj = {
    title: "my title",
    content: "my content",
    userId: "my userId",
    slug: "my-only-content",
  };
  useEffect(() => {
    // console.log({ status, user });
    dispatch(addBlog({ ...blogObj }));
    // db.getAllBlog()
    //   .then((blog) => blog && setBlog(blog.documents))
    //   .catch((e) => setError(e.message))
    //   .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {status ? (
        <AllBlogs />
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <h2 className="text-green-500 text-2xl">
            Please Login or Create new account
          </h2>
        </div>
      )}
    </>
  );
};

export default Home;
