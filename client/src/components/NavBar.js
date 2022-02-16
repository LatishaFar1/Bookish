import React from 'react';
import {Link} from "react-router-dom";


export default function NavBar({user, setUser}) {



  function handleLogout(){
    fetch("api/logout", {
      method: "DELETE",
    })
    .then((response) => {
      if (response.ok) {
        setUser(null)
      }
    });
  }

  return <div>
      <div className='nav-container'>
        <ul className='nav-links'>
            <li className="nav-link">
                <Link to="/">home</Link>
                <Link to="/books">books</Link>
                <Link to="/Cart">cart</Link>

                <div>
      {user ? (
        <button className="login-button" onClick={handleLogout}>Logout</button>
      ) : (
        <>
        <Link to="/Login">login</Link>
       <Link to="/Signup">signup</Link>
       </>
      )
      }
      </div>
            </li>
        </ul>
      </div>
  </div>;
}
