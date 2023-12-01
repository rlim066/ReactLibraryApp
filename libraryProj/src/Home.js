import useFetch from "./useFetch";
import BlogList from  "./BlogList";

const Home = () => {
  const url = 'http://localhost:8000/books'
  const { data: blogs, isLoading, error } = useFetch(url);

  return (
    <div className="home">

      {/* Create a new prop that passes in handleDelete fn from the PARENT Home Component
        There's a rendering error as the data fetch takes time cus async 
        but the initial render takes place faster when the blogs state hasnt been fetched and is still null (as delcared abv) */}

      {error && <div>{error}</div>} {/* Will only output this div when error !null */}

      {isLoading && <div> LOADING... </div>}

      {blogs && <BlogList blogs={blogs} title="Books"/>} {/* if blogs is null then it wont run bloglist */}
      
      
    </div>
    );
}
 
export default Home;