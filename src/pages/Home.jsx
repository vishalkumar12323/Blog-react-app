import { useEffect } from "react";
import { db } from "../services/db_service";
import { Button, Spinner, Blogs } from "../components";
import { usePagination } from "../hooks";
import { useSelector, useDispatch } from "react-redux";
import { addBlog, getBlogs, fetchBlogs } from "../store/blogSlice";
import { getAuthState } from "../store/authSlice";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const gradientText = `bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 text-transparent bg-clip-text`;
const Home = () => {
  const { isFetching, documents } = useSelector((state) => state.blogs);
  const { status } = useSelector(getAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  if (isFetching) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      {!status && (
        <main className="w-full h-[80vh] bg-slate-200/50 dark:bg-slate-800/50 my-5 rounded-sm flex justify-center items-center">
          <div className="w-full">
            <h1
              className={`font text-7xl font-semibold text-center ${gradientText}`}
            >
              <span className="capitalize ">start</span> your journy with
              blogify <br /> get started now
            </h1>

            <div className="w-full flex gap-4 justify-center mt-8">
              <Button>get started</Button>
              <Button>signup</Button>
            </div>
          </div>
        </main>
      )}

      {documents.length > 0 && (
        <section className="max-w-full w-4/5 mx-auto h-auto  mt-4 rounded-sm shadow">
          <div className="w-full h-full flex justify-center flex-col gap-6 bg-slate-200/50 dark:bg-slate-800/50">
            <Blogs blogs={documents} />
            <div className="w-full mb-4 flex justify-center items-center gap-3">
              <Button className="px-[15px!important] text-xl">
                {" "}
                <MdChevronLeft />{" "}
              </Button>
              <Button className="px-[15px!important] text-xl">
                {" "}
                <MdChevronRight />{" "}
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
