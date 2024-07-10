import { useEffect } from "react";
import { db } from "../services/db_service";
import { getAuthState, addBlog } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button, Spinner } from "../components";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight, MdArrowRightAlt } from "react-icons/md";

const gradientText = `bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 text-transparent bg-clip-text`;
const Home = () => {
  const { status } = useSelector(getAuthState);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   db.getAllBlog()
  //     .then((blog) => dispatch(addBlog({ ...blog })))
  //     .catch((e) => {
  //       console.log(e);
  //       setError(e.message);
  //     });
  // }, []);
  return (
    <>
      <main className="w-full h-[80vh] bg-slate-200/50 dark:bg-slate-800/50 my-4 rounded-sm flex justify-center items-center">
        <div className="w-full">
          <h1
            className={`font text-7xl font-semibold text-center ${gradientText}`}
          >
            <span className="capitalize ">start</span> your journy with blogify{" "}
            <br /> get started now
          </h1>

          <div className="w-full flex gap-4 justify-center mt-8">
            <Button>get started</Button>
            <Button>signup</Button>
          </div>
        </div>
      </main>

      <section className="max-w-full w-fit mx-auto h-auto  mt-4 rounded-sm shadow">
        <div className="w-full h-full flex justify-center flex-col gap-6 bg-slate-200/50 dark:bg-slate-800/50">
          <div className="border border-lime-500/20">
            <div>
              <img
                src="./static_web.webp"
                alt="webp"
                className="w-full h-auto object-fill"
              />
            </div>
            <div className="w-full px-6 py-4">
              <div className="created-by flex gap-[3px] items-center">
                <img src="" alt="img" />
                <div className="flex flex-col gap-[1px]">
                  <span>Adam Bob</span>
                  <span>June 25, 2024</span>
                </div>
              </div>
              <div className="hover:text-lime-500 transition-colors mt-2">
                <h3 className="text-xl w-fit">The Girl From Ithopia</h3>
                <p className="text-start text-[1.05rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  voluptate maxime odit debitis pariatur nulla maiores ratione
                  vitae minima excepturi cum.
                </p>
                <Link to="#" className="visited:text-indigo-700">
                  continue reading...
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-lime-500/20">
            <div>
              <img
                src="./static_web.webp"
                alt="webp"
                className="w-full h-auto object-fill"
              />
            </div>
            <div className="w-full px-6 py-4">
              <div className="created-by flex gap-[3px] items-center">
                <img src="" alt="img" />
                <div className="flex flex-col gap-[1px]">
                  <span>Adam Bob</span>
                  <span>June 25, 2024</span>
                </div>
              </div>
              <div className="hover:text-lime-500 transition-colors mt-2">
                <h3 className="text-xl w-fit">The Girl From Ithopia</h3>
                <p className="text-start text-[1.05rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  voluptate maxime odit debitis pariatur nulla maiores ratione
                  vitae minima excepturi cum.
                </p>
                <Link to="#">continue reading...</Link>
              </div>
            </div>
          </div>
          <div className="border border-lime-500/20">
            <div>
              <img
                src="./static_web.webp"
                alt="webp"
                className="w-full h-auto object-fill"
              />
            </div>
            <div className="w-full px-6 py-4">
              <div className="created-by flex gap-[3px] items-center">
                <img src="" alt="img" />
                <div className="flex flex-col gap-[1px]">
                  <span>Adam Bob</span>
                  <span>June 25, 2024</span>
                </div>
              </div>
              <div className="hover:text-lime-500 transition-colors mt-2">
                <h3 className="text-xl w-fit">The Girl From Ithopia</h3>
                <p className="text-start text-[1.05rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  voluptate maxime odit debitis pariatur nulla maiores ratione
                  vitae minima excepturi cum.
                </p>
                <Link
                  to="#"
                  className="visited:text-indigo-700 flex gap-1 items-center"
                >
                  continue reading{" "}
                  <MdArrowRightAlt style={{ marginTop: "7px" }} />
                </Link>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Home;
