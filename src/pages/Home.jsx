import { useState, useEffect } from "react";
import { db } from "../services/db_service";
import { getAuthState, addBlog } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../components";
import AllBlogs from "./AllBlogs";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { status } = useSelector(getAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    db.getAllBlog()
      .then((blog) => dispatch(addBlog({ ...blog })))
      .catch((e) => {
        console.log(e);
        setError(e.message);
      })
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
              <h2 className="text-green-500 text-2xl text-center">
                {error} Please Login or Create new account.
              </h2>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-screen flex justify-center items-center gap-1 flex-col">
          <Spinner />
          <span className="text-center text-green-500 text-[13px]">
            Loading...
          </span>
        </div>
      )}
    </>
  );
};

export default Home;
