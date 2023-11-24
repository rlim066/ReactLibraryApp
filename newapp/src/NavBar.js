import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
  return(
    <u1>
      <li>
        <Link to="/View Books">View Books</Link>
      </li>

      <li>
        <Link to="/AddBooks">Add Books </Link>
      </li>

    </u1>
  )
}

export default NavBar;