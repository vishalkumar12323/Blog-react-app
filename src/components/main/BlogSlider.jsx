import clsx from "clsx";
import { useEffect, useState } from "react";

const BlogSlider = ({ blogs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = blogs.length;
  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("run");
  //     nextSlide();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [nextSlide]);
  return (
    <>
      <section className="py-4">
        <div className="slider w-full relative">
          {blogs.map((blog) => (
            <div
              className={clsx(
                `w-full h-screen absolute top-0 left-0 transition-opacity duration-500`
              )}
              key={blog.id}
              style={{
                backgroundImage: `url(${blog.coverImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                opacity: currentIndex === blog.id ? "1" : "0",
              }}
            >
              <div className="">
                <div className="flex">
                  <div className="">
                    <div className="blog-content text-black">
                      <h2>{blog.heading}</h2>
                      <p>{blog.content}</p>
                      <a href={blog.link} className="">
                        Read More {blog.id}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={nextSlide} className="absolute left-1/2 bottom-0">
            next
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogSlider;
