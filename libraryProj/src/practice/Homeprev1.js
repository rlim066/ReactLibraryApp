import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    {id: 1,Title: "Lord of The Flies",Year: "1954",Author: "William Golding",Type: "Novel",Genre: "Fiction"},
    {id: 2,Title: "Charlie & The Chocolate Factory",Year: "1964",Author: "Roald Dahl",Type: "Novel",Genre: "Fiction"},
    {id: 3,Title: "The Lorax",Year: "1971",Author: "Dr Seuss",Type: "Novel",Genre: "Fiction"}
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
    }
  
  //careful not to trigger an inifinite loop 
  //dependency array as a 2nd arg for useEffect
  //empty array makes it so that it only runs it once
  //dependencies are state values that should trigger the useEffect value to run when they change
  useEffect(() => {
    console.log('use effect');
    console.log(name);

  }, [name]); //use effect runs whenever the state 'name' changes

  //use props to pass data into bloglist component from home
  //allows u to pass data from parent to child component
  return (
    <div className="home">
      {/* Create a property name and pass it in 
        multiple props can be done e.g blogs and titles*/}
      <button onClick={() => setName('luigi')}>Click Me</button>
      <p>{name}</p>
      <BlogList blogs={blogs} title="All Blogs"/>  
      {/* filter function fires a callback fn for each item in the array 
        IF RETURN TRUE FOR THAT ITEM
        ITEM IS KEPT. IF FALSE ITEM IS FILTERED 
        THEN IT RETURNS NEW ARRAY WITH ITEMS KEPT ONLY
      THEN WE PASS IN THAT NEW ARRAY AS OUR PROP WOW */}

      {/*checks every item in blogs is saved as blog then one by one blog.author is check*/}
      <BlogList blogs={blogs.filter((blog) => {
        if(blog.Author === "Roald Dahl"){
          return false;}
        else return true;
      //<BlogList blogs={blogs.filter((blog) => blog.author === 'Roald Dahl"} title='Mario's Blogs'/>
      })} title="Mario's Blogs"/>     

      {/* Create a new prop that passes in handleDelete fn from the PARENT Home Component */}
      <BlogList blogs={blogs} title="Deletable Blogs" handleDelete={handleDelete}/>  
    </div>
    );
}
 
export default Home;