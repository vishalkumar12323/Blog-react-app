import { BlogCard } from "../components";
import { useSelector } from "react-redux";
import { getBlogs } from "../store/authSlice";

const AllBlogs = () => {
  const { blogs } = useSelector(getBlogs);
  return (
    <>
      <section className="w-full flex gap-5 flex-wrap py-8 px-2 justify-center lg:justify-start">
        <BlogCard blogs={blogs} />
      </section>
    </>
  );
};

export default AllBlogs;
