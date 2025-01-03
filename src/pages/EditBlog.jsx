import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogForm, Spinner } from "../components";
import { fetchBlogWithId } from "../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";

const EditBlog = () => {
  const { isFetching, document } = useSelector((state) => state.blogWithId);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBlogWithId(id));
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
