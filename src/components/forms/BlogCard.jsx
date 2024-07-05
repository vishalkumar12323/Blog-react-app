import htmlParser from "html-react-parser";
import { db } from "../../services/db_service";
const BlogCard = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div
          className="max-w-[24rem] p-4 bg-gray-50 border border-green-500/75 dark:bg-slate-800 rounded-lg shadow-md"
          key={blog?.slug}
        >
          <a href={`/blog/${blog?.$id}`}>
            <div className="w-full">
              <img
                src={db.filePreviewUrl(blog.articleimage)}
                className="rounded-sm w-full h-auto"
                alt={blog.title}
              />
              <div className="mt-2 mb-1 px-2">
                <h2 className="text-[19px]">{blog?.title}</h2>
                <div className="mb-1 dark:text-gray-200">
                  {htmlParser(blog?.content.slice(0, 100))}{" "}
                </div>
              </div>
              <div className="pt-2 px-2">
                <li className="text-green-500 hover:underline list-none text-[18px]">
                  continue reading...
                </li>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
