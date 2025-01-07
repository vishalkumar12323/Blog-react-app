import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogForm, Spinner } from "../components";
import { fetchBlogWithId } from "../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store.ts";

const EditBlog = () => {
  const { isFetching, document } = useSelector(
    (state: RootState) => state.blogWithId
  );
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBlogWithId(id as string));
  }, [id, dispatch]);

  if (isFetching) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return <BlogForm post={document} />;
};

export default EditBlog;
