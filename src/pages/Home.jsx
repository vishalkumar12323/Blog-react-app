import { useState, useEffect } from "react";
import { db } from "../services/db_service";
import { getAuthState, addBlog } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { status } = useSelector(getAuthState);
  const dispatch = useDispatch();

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
      <h1>blog page</h1>
    </>
  );
};

export default Home;
