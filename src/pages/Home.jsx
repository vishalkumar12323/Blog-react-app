import { useState, useEffect } from "react";
import { db } from "../services/db_service";
import { getAuthState, addBlog } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, BlogSlider } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { status } = useSelector(getAuthState);
  const dispatch = useDispatch();

  const blogs = [
    {
      heading: "hello world",
      slug: "hello-world",
      content: "hello world how are you",
      coverImage: "./Udemy-certificate.jpg",
      status: "active",
      userId: "hy32432423sbe34ddd2hbg",
      id: 0,
    },
    {
      heading: "hello content",
      slug: "hello-content",
      content: "hello content how are you",
      coverImage: "./Udemy-certificate.jpg",
      status: "inactive",
      userId: "hy32432423sbe34ddd2hbg",
      id: 1,
    },
  ];
  // useEffect(() => {
  //   db.getAllBlog()
  //     .then((blog) => dispatch(addBlog({ ...blog })))
  //     .catch((e) => {
  //       console.log(e);
  //       setError(e.message);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);
  return (
    <>
      <BlogSlider blogs={blogs} />
    </>
  );
};

export default Home;
