import React from "react";

function AddBooks() {
  return(
    <div>
      <h1>Add Book</h1>
      <div className="search"> 

        <input 
          placeholder="Add "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> 

        <button 
        onClick={ }> Add Book</button>
      </div>
    </div>
  );
}

export default AddBooks;