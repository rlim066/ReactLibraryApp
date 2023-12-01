import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const [genre, setGenre] = useState('');

  const url = 'http://localhost:8000/books';

  const handleSubmit = (e) => {
    e.preventDefault(); {/* prevents the page from refreshing */}
    const blog = {title, year, author, type, genre}
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }

  return (
    
    <div className="create">
      <h2>Add a New Book</h2>
      <form 
        onSubmit={handleSubmit}
      >
        <label>Book Title:</label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Year:</label>
        <input 
        type="text"
        required
        value={year}
        onChange={(e) => setYear(e.target.value)}
        />

        <label>Book Author:</label>
        <input 
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />        
        
        <label>Book Type:</label>
        <input 
        type="text"
        required
        value={type}
        onChange={(e) => setType(e.target.value)}
        />   

        <label>Book Genre:</label>
        <input 
        type="text"
        required
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        />  
        

        {/*
        <label>Book Author:</label>
          <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="John Green">John Green</option>
            <option value="William Golding">William Golding</option>
          </select>
  */}

        <button>Add Book</button>
      </form>
    </div>
    );
}
 
export default Create;