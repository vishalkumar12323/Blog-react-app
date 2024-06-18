import { db } from "../services/db_service";
const BlogCard = ({ post }) => {
  return (
    <>
      <a href={`/blog/${post?.$id}`}>
        <div className="w-full">
          <img src={db.filePreviewUrl(post?.articleimage)} alt={post?.title} />
          <h2>{post?.title}</h2>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
