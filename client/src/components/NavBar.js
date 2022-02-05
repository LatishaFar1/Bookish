import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {


  return <div>
      <div className='nav-container'>
        <ul className='nav-links'>
            <li className="nav-link">
                <Link to="/books">Books</Link>
            </li>
        </ul>
      </div>
  </div>;
}
