import { Input, Button, Select, RTEditor } from "./index";
import { useForm } from "react-hook-form";
import { db } from "../services/db_service";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

const BlogForm = ({ post }) => {
  const { register, handleSubmit, watch, control, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const user = useSelector((state) => state.user);
  // console.log(user);
  const onSubmit = async (data) => {
    if (post) {
      const file = data.image[0] ? await db.uploadFile(data.image[0]) : null;
      if (file) {
        await db.deleteFile(post?.articleimage);
      }
      const blogPost = await db.updateBlog(post.$id, {
        ...data,
        articleimage: file ? file.$id : null,
      });

      if (blogPost) {
        // navigate user
        // navigate(`/blog/${blogPost.$id}`)
      }
    } else {
      const file = data.image[0] ? await db.uploadFile(data.image[0]) : null;
      if (file) {
        const blogPost = await db.createBlog({
          ...data,
          articleimage: file.$id,
          userid: user?.$id,
        });
        if (blogPost) {
          // navigate user
          // navigate(`/blog/${blogPost.$id}`)
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value.toLowerCase().replace(/ /g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);
  return (
    <>
      <div className="w-3/4 mx-auto rounded-lg shadow border p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="title"
            placeholder="Create blog title"
            {...register("title", { required: "title is required" })}
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
          />

          <Input
            label="Article Image"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("articleimage", { required: "image is required" })}
          />

          {/* <RTEditor control={control} /> */}

          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogForm;
