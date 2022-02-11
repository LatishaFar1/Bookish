
import './App.css';
import Books from './components/Books';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Cart from './components/Cart';


function App() {
  
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [cartBooks, setCartBooks] = useState([]);

  useEffect(() => {
    fetch("api/books")
    .then(response => response.json())
    .then(booksData => {
      setBooks([...booksData])
    })
  }, [])


  // useEffect(() => {
  //   fetch("api/me")
  //   .then((response) => {
  //     if (response.ok ){
  //       response.json()
  //       .then((user) => setUser(user));
  //     }
  //   })
  // }, []);

   
  return (
   <div>
    <Router>

      <NavBar />
     
      <Routes>
        <Route path="/books" element={ <Books books={books} setCartBooks={setCartBooks} cartBooks={cartBooks}  /> }/>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart books={books} setCartBooks={setCartBooks} cartBooks={cartBooks} />} />
      </Routes>
    </Router>
   </div>
    
   
  );
}

export default App;
