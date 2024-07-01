import { BlogForm as AddNewBlogForm } from "../components";
import { useEffect } from "react";

const AddBlog = () => {
  useEffect(() => {
    console.log("runn...");
  }, []);
  return <AddNewBlogForm />;
};

export default AddBlog;
