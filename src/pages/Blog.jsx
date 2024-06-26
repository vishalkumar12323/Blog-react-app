import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);
  return <h1>Blog Page</h1>;
};

export default Blog;
