import { useEffect } from "react";
import htmlParser from "html-react-parser";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { db } from "../services/db_service";
import { fetchBlogWithId } from "../store/blogSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button, Spinner } from "../components";

const Blog = () => {
  const { id } = useParams();
  const { isFetching, document } = useSelector((state) => state.blogWithId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchBlogWithId(id));
  }, [id]);

  if (isFetching) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="card w-full max-w-full mx-auto h-auto bg-white text-black dark:bg-slate-800 shadow-md dark:text-white m-4">
        <div className="card-body px-4 py-3">
          <h3 className="text-6xl text-start">{document?.heading}</h3>
        </div>
        <div className="p-2 w-full">
          <img
            src={db.filePreviewUrl(document?.coverImage)}
            alt={document?.heading}
            className="w-full h-auto rounded"
          />
        </div>
        <div className="content py-3 px-4">
          <div className="text-gray-600 dark:text-gray-200">
            {htmlParser(document?.content)}
          </div>
        </div>
        <div className="px-4 py-2 relative">
          <p className="text-[16px] capitalize">
            publiced by:{" "}
            <span className="capitalize text-[15px] text-green-500">
              adam bob
            </span>
          </p>

          <div className="w-[110px] h-[80px] absolute -right-7 bottom-2 rounded shadow-md bg-slate-50/70 dark:bg-slate-800/80 flex flex-col gap-3 mt-2">
            <Button
              onClick={() =>
                navigate(`/edit/${document?.$id}/${document?.slug}`)
              }
              className=""
            >
              <span className="cursor-pointer">edit</span>
            </Button>
            <Button
              className="cursor-pointer"
              onClick={() => {
                db.deleteBlog().then((status) => {
                  if (status) {
                    db.deleteFile(document.coverImage);
                    navigate("/");
                  }
                });
              }}
            >
              delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
