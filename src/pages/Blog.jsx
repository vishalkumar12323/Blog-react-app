import htmlParser from "html-react-parser";
import { useParams } from "react-router-dom";
import { db } from "../services/db_service";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    db.getBlog(slug)
      .then((blog) => {
        console.log(blog);
        blog ? setBlog(blog) : null;
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div className="card w-full max-w-full mx-auto h-auto bg-white text-black dark:bg-slate-800 dark:text-white m-4">
        <div className="card-body px-4 py-3">
          <h3 className="text-6xl text-start">
            {blog?.title || "Hello world"}
          </h3>
        </div>
        <div className="p-2 w-full">
          <img
            // src={db.filePreviewUrl(blog?.articleimage)}
            src="./Udemy-certificate.jpg"
            alt={blog?.title}
            className="w-full h-auto rounded"
          />
        </div>
        <div className="content py-3 px-4">
          <div className="text-gray-600 dark:text-gray-200">
            {/* {htmlParser(blog?.content) || "Hello world content provider"} */}
          </div>
        </div>
        <div className="px-4 py-2">
          <p className="text-[16px] capitalize">
            publiced by:{" "}
            <span className="capitalize text-[15px] text-green-500">
              adam bob
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
