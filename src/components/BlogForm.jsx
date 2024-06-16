import { Input, Button, Select } from "./index";
import { useForm } from "react-hook-form";

const BlogForm = ({ post }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { title: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-3/4 mx-auto rounded-lg shadow border p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="">
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
              console.log(e);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default BlogForm;
