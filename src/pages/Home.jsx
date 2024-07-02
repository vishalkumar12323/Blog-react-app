import { useState, useEffect } from "react";
import { db } from "../services/db_service";
import { getAuthState, addBlog } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import AllBlogs from "./AllBlogs";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { status } = useSelector(getAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    db.getAllBlog()
      .then((blog) => dispatch(addBlog({ ...blog })))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {!loading ? (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Home;
