import { useState } from "react";
const Prac3 = () => {

  /*need to output a set of blogs in a list that can edit
    e.g if we delete 1 blog react needs to change*/

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      Title: "Lord of The Flies",
      Year: "1954",
      Author: "William Golding",
      Type: "Novel",
      Genre: "Fiction"
    },
  
    {
      id: 2,
      Title: "Charlie & The Chocolate Factory",
      Year: "1964",
      Author: "Roald Dahl",
      Type: "Novel",
      Genre: "Fiction"
    },
  
    {
      id: 3,
      Title: "The Lorax",
      Year: "1971",
      Author: "Dr Seuss",
      Type: "Novel",
      Genre: "Fiction"
    }
  ]);

  return (
    <div className="home">
      {/* Find a way to cycle throough the template using js code
        it updates automatically using every piece of info
        instead of hardcoding a few books 
        it alw cycle through the whole array and show whether theres 3 or 100 items */}

        {/* Use map method. Cycle through an array and do smt with each item in the array
          E.g return a  jsx template for each item */}

        {/* cycles through blogs 
          takes param blog (name of one index in blogs[]
          returns the html 
          
          WHEN OUTPUT A LIST USING .MAP 
          EACH ROOT ELEMENT IN THE TEMPLATE MUST HAVE A KEY PROPERTY
          KEY PROPERTY IS USED BY REACT TO KEEP TRACK OF EACH ITEM IN DOM AS IT OUTPUTS IT
          REACT NEEDS THE KEY TO KEEP TRACK OF NEW ITEMS IN THE ARRAY*/}  
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}> 
            <h2>{blog.Title}</h2>
            <p>Book Author: {blog.Author}</p>
          </div>
        ) )}
        
        {/* in most websites u will need the list of blogs in many spots
          use the same logic. MAKE A COMPONENT */}
        {/* use props to load in diff data into the component e.g Home page shows all blogs
        search bar should show only filtered blogs */}
          
    </div>
    );
}
 
export default Prac3;