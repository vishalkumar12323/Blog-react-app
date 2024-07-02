import { BlogCard } from "../components";
import { useSelector } from "react-redux";
import { getBlogs } from "../store/authSlice";

const AllBlogs = () => {
  const { blogs } = useSelector(getBlogs);
  return (
    <>
      <section className="w-full flex gap-5 flex-wrap py-8 px-2 justify-center lg:justify-start">
        {blogs[0]?.documents ? (
          <BlogCard blogs={blogs[0].documents} />
        ) : (
          <h2>No Any Blog Here</h2>
        )}
      </section>
    </>
  );
};

export default AllBlogs;
