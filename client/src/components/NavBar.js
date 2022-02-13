import React from 'react';
import {Link} from "react-router-dom";


export default function NavBar() {


  return <div>
      <div className='nav-container'>
        <ul className='nav-links'>
            <li className="nav-link">
                <Link to="/">home</Link>
                <Link to="/books">books</Link>
                <Link to="/Cart">cart</Link>
                <Link to="/Login">login</Link>
                <Link to="/Signup">signup</Link>
            </li>
        </ul>
      </div>
  </div>;
}
