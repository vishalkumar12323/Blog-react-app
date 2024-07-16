import { db } from "../../services/db_service";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
const Blogs = ({ blogs, page }) => {
  return (
    <>
      {blogs.slice(page * 5 - 5, page * 5).map((b) => (
        <div className="border border-pink-500/40 to-orange-500/40" key={b.$id}>
          <div className="w-full h-3/4">
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
            </div>
            <div className="link flex justify-start">
              <Link
                to={`/blog/${b?.$id}/${b?.slug}`}
                className="visited:text-pink-500/80 flex gap-1 items-center w-fit"
              >
                <span className="text-xl cursor-pointer">continue reading</span>{" "}
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
