import React, { useState, useEffect } from "react";

import SearchIcon from "./search.svg";
import "./App.css";

import BookCard from "./BookCard";


const book1 = {
  "Title": "Lord of The Flies",
  "Year": "1954",
  "Author": "William Golding",
  "Cover": "N/A",
  "Type": "Novel",
  "Genre": "Fiction"
};



const App = () => {

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  const searchBooks = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setBooks(data.Search);
  }
  
  
  return (
    <div className="app">
      <h1> LibraryApp </h1>

      <div className="search"> 

        <input 
          placeholder="Search for books"
          value="searchTerm"
          onChange={(e) => setSearchTerm(e.target.value)}
        /> 

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchBooks(searchTerm)}       
        />
      </div>

      {
        books?.length > 0
        ? (<div className="container">
            {books.map( (books) => (
              <BookCard book={book}/>
            ))}
          
          </div>          
        ) : (
          <div className="empty">
            <h2> No Books Found </h2>
          </div>
        )

      }
            
      
    </div>

  )
};

export default App;