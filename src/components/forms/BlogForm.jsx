import { Input, Button, Select, RTEditor, Spinner } from "../index";
import { useForm } from "react-hook-form";
import { db } from "../../services/db_service";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { session } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const BlogForm = ({ post }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, control, setValue, getValues } =
    useForm({
      defaultValues: {
        heading: post?.heading || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const { user } = useSelector(session);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    if (post) {
      const file = data.coverImage[0]
        ? await db.uploadFile(data.coverImage[0])
        : null;
      if (file) {
        await db.deleteFile(post?.coverImage);
      }
      const blogPost = await db.updateBlog(post.$id, {
        ...data,
        coverImage: file ? file.$id : null,
      });

      if (blogPost) {
        // navigate user
        setLoading(false);
        navigate(`/blog/${blogPost?.$id}/${blogPost?.slug}`);
      }
    } else {
      setLoading(true);
      const file = data.coverImage[0]
        ? await db.uploadFile(data.coverImage[0])
        : null;
      if (file) {
        const blogPost = await db.createBlog({
          ...data,
          coverImage: file.$id,
          userId: user.id,
        });
        if (blogPost) {
          // navigate user
          setLoading(false);
          navigate(`/blog/${blogPost.$id}/${blogPost?.slug}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value.trim().toLowerCase().replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "heading") {
        setValue("slug", slugTransform(value.heading), {
          shouldValidate: true,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);
  return (
    <>
      <div className="w-3/4 mx-auto rounded-lg shadow border border-pink-500 to-orange-500 p-4 m-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="heading"
            placeholder="Create blog heading"
            {...register("heading", { required: "heading is required" })}
            className={"bg-transparent text-black"}
          />

          <Input
            label="slug"
            placeholder="Slug"
            {...register("slug", {
              required: "slug is required",
            })}
            onInput={(e) => {
              const { value } = e.currentTarget;
              setValue("slug", slugTransform(value), { shouldValidate: true });
            }}
            className={"bg-transparent text-black"}
          />

          <Input
            label="cover image"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("coverImage", { required: !post })}
            className={"text-black dark:text-white"}
          />
          {post && (
            <div className="w-full mb-3">
              <img
                src={db.filePreviewUrl(post.coverImage)}
                alt={post.title}
                className="rounded-md"
              />
            </div>
          )}

          <Select
            label="Status"
            options={["active", "inactive"]}
            {...register("status", { required: true })}
          />
          <RTEditor
            control={control}
            defaultValue={getValues("content")}
            label="Content"
            name="content"
          />

          <div>
            <Button
              type="submit"
              className={clsx(`px-8 py-2 gap-2 text-[17px]`, {
                "cursor-not-allowed hover:bg-lime-700": loading,
              })}
              disable={loading}
            >
              {" "}
              {loading && <Spinner height="1.2rem" width="1.2rem" />}
              {post ? "Update" : "Submit"}{" "}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogForm;
