import React, { useState } from "react";

function PostForm() {
  const url =""
  const [data,setData] = useState({
    Title: "",
    Year: "",
    Author: "",
    Type: "",
    Genre: ""
  })

  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return(
    <div>
      <form>
        <input onChange={(e) => handle(e)} id='Title' value={data.Title} placeholder="Title" type="text"></input>
        <input onChange={(e) => handle(e)} id='Year' value={data.Year} placeholder="Year" type="number"></input>
        <input onChange={(e) => handle(e)} id='Author' value={data.Author} placeholder="Author" type="text"></input>
        <input onChange={(e) => handle(e)} id='Type' value={data.Type} placeholder="Type" type="text"></input>
        <input onChange={(e) => handle(e)} id='Genre' value={data.Genre} placeholder="Genre" type="text"></input>
        
      </form>
    </div>
  );
}

export default PostForm;