import React, { useState, useEffect } from "react";

import SearchIcon from "./search.svg";
import "./App.css";
import data from './data.json';

import BookCard from "./BookCard";
import jsonData from './data.json';


const App = () => {

  const [searchTerm, setSearchTerm] = useState("gay");
  const [books, setBooks] = useState([]);

  
  
  return (
    <div className="app">
      <h1> LibraryApp </h1>

      <div className="search"> 

        <input 
          placeholder="Search for books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> 

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchBooks(searchTerm)}       
        />
      </div>

      `{
        books?.length > 0
        ? (<div className="container">
            {books.map( (book) => (
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