import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/books/' +id);

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.Title }</h2>
          <p>Written by: { blog.Author }</p>
          <div> Genre: { blog.Genre }</div>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;