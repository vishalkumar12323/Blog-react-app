import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);
  return (
    <>
      <h1>Dynamic blogs comes here</h1>
    </>
  );
};

export default Blog;
