import { db } from "../services/db_service";
const BlogCard = ({ $id, title, articleimage }) => {
  return (
    <>
      <a href={`/blog/${$id}`}>
        <div className="w-full">
          <img src={db.filePreviewUrl(articleimage)} alt={title} />
          <h2>{title}</h2>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
