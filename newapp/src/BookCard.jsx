import React from "react";

const BookCard = ( {book} ) => {
  return(
    <div className="book"> 
      <div>
        <p>{book.Title}</p>
      </div>
      
      <div> 
        <img src= {book.Cover !== 'N/A' ? book.Cover :'https://via.placeholder.com/400'} alt={book.title}/>
      </div>

      <div>
        <span>{book.Type}</span>
        <h3>{book.Title}</h3>
      </div>
    </div>
  )
}

export default BookCard;