import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/db_service";
import { BlogForm } from "../components";

const EditBlog = () => {
  const [blog, setBlog] = useState();
  const { id } = useParams();

  useEffect(() => {
    db.getBlog(id)
      .then((blog) => setBlog(blog))
      .catch((e) => console.log(e));
  }, []);
  return <BlogForm post={blog} />;
};

export default EditBlog;
