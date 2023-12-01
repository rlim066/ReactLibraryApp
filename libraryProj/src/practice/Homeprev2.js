import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    setTimeout(() =>{
    fetch('http://localhost:8000/books') //once the promise is resolved aka the data has been pulled
    .then(res => { //we get a response object. to get the data we have to do the smt with the response obj
      if(!res.ok){
        throw Error('Could not fetch the data for that resource')
      }

      return res.json(); //passes the json into a js obj for us
      //the entire fetch fn also returns another promise cus res.json is asnychornous and waits for a response
    })
    .then((data) => {
      setBlogs(data);
      setIsLoading(false)
      setError(null)
    })
    .catch(err => {
      setIsLoading(false)
      setError(err.message);
    })

  },1000)}, []); //thanks to the empty dependency the useEffect only fires once, no infin loop

  //use props to pass data into bloglist component from home
  //allows u to pass data from parent to child component
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