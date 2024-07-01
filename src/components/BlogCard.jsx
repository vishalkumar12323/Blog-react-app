const BlogCard = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div
          className="max-w-[24rem] p-4 bg-gray-50 border border-green-500/75 dark:bg-slate-800 rounded-lg shadow-md"
          key={blog?.slug}
        >
          <a href={`/blog/${blog?.slug}`}>
            <div className="w-full">
              <img
                src="/Udemy-certificate.jpg"
                className="rounded-sm w-full h-auto"
                alt="udemy.com"
              />
              <div className="mt-2 mb-1 px-2">
                <h2 className="text-[19px]">{blog?.title}</h2>
                <p className="mb-1 dark:text-gray-200">{blog?.content}</p>
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
