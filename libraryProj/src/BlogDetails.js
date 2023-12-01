import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams(); {/* allows us to grab params from the route e.g "id" */}
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/books/' +id);

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by: { blog.author }</p>
          <div> Genre: { blog.genre }</div>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;