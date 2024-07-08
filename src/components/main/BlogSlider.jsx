import clsx from "clsx";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const BlogSlider = ({ blogs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = blogs.length;
  const currentSlideRef = useRef(null);
  const nextSlide = (id) => {
    console.log(currentSlideRef.current.attributes.id);
    // setCurrentIndex((previousIndex) => {
    //   if (previousIndex === length - 1) {
    //     return 0;
    //   } else {
    //     currentSlideRef.current.style.transform = "translateX(-100%)";
    //     return previousIndex + 1;
    //   }
    // });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("run");
  //     nextSlide();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [nextSlide]);
  return (
    <section className="w-full h-screen flex items-start">
      <div className="w-full h-full my-1">
        <div className="w-full h-full relative overflow-hidden">
          {blogs.map((blog) => (
            <div
              className={clsx(
                `w-full h-full absolute top-0 left-0 translate-x-full transition-transform`,
                {
                  "translate-x-0": currentIndex === blog.id,
                }
              )}
              key={blog.id}
              ref={currentSlideRef}
              id={blog.id}
            >
              <img
                src={blog.coverImage}
                alt="bla"
                className="w-full h-auto select-none opacity-60"
              />
              <div className="content text-white absolute top-[60%] left-10 flex flex-col gap-4">
                <h3 className="text-6xl text-start">{blog.heading}</h3>
                <div className="mt-3">
                  <Link
                    to="#"
                    className="px-6 py-2 bg-green-600 capitalize w-fit rounded-sm hover:bg-green-500 transition-colors"
                  >
                    read more {blog.id}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-5 left-1/2 flex gap-3">
            <button
              className="w-4 h-4 bg-green-600 border rounded-full"
              onClick={nextSlide}
            ></button>
            <button className="w-4 h-4 bg-green-600 border rounded-full"></button>
            <button className="w-4 h-4 bg-green-600 border rounded-full"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
