import { db } from "../../services/db_service";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
const Blogs = ({ blogs }) => {
  return (
    <>
      {blogs.map((b, i) => (
        <div className="border border-lime-500/20" key={b.slug}>
          <div>
            <img
              src={db.filePreviewUrl(b.coverImage)}
              alt={b.heading}
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
            <div className="mt-2">
              <h3 className="text-xl w-fit"> {b.heading?.slice(0, 50)} </h3>
              <p className="text-start text-[1.05rem]">
                {b.content?.slice(0, 100)}
              </p>
              <Link
                to={`/blog/${b?.$id}/${b?.slug}`}
                className="visited:text-lime-600 flex gap-1 items-center"
              >
                continue reading{" "}
                <MdArrowRightAlt style={{ marginTop: "7px" }} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;