import React from "react";
import {Link} from 'react-router-dom'


//props here RECEIVES the blogs from the Home component
//any props sent through, we automatically get a props OBJECT as an argument 

//DESTRUCTURING WITHIN {} TO SAY WE WANT BLOGS AND TITLE FROM THE INCOMING PROPS
//NOW CAN USE BLOGS AND TITLE DIRECTLY

const BlogList = ({blogs, title}) => {

  // const blogs = props.blogs;
  // console.log(props, blogs);
  // const title = props.title;

/* const handleDelete () => {

} WE SHOULD NOT DO THE DELETE FUNCTION HERE CUS U WOULD ONLY DELETE THE PROP DATA NOT THE REAL
NEED TO USE THE setBlogs within the state to update
*/

  return (
    <div className="blog-list">
      <h2>{title}</h2>
       {/* in most websites u will need the list of blogs in many spots
          use the same logic. MAKE A COMPONENT */}
        {/* use props to load in diff data into the component e.g Home page shows all blogs
        search bar should show only filtered blogs */}

        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}> 
            <h2>{blog.title}</h2>
            <Link to={`/books/${blog.id}`}>
            <p>Book Author: {blog.author}</p>
            {/*Wrap it in an annon fn so that we can pass an arg in */}
            </Link>

          
          </div>
        ) )}       
    </div>
    );
}
 
export default BlogList;