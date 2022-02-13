
import './App.css';
import Books from './components/Books';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Cart from './components/Cart';
import Signup from './components/Signup';


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


  const addToCart = (book) => {
    const exist = cartBooks.find(item => item.id === book.id);
    if (exist){
      setCartBooks(cartBooks.map((item => item.id === book.id ?{...exist, quantity: exist.quantity +1}: item ))
      );
    } else {
      setCartBooks([...cartBooks, {...book, quantity: 1}]);
    }
  };

  const removeFromCart = (book) => {
    const exist = cartBooks.find(item => item.id === book.id);
    if (exist.quantity === 1){
      setCartBooks(cartBooks.filter((item) => item.id !== book.id ))
    } else {
      setCartBooks(cartBooks.map((item => item.id === book.id ?{...exist, quantity: exist.quantity - 1}: item ))
      );
    }
  };
   
  return (
   <div>
    <Router>

      <NavBar />
     
      <Routes>
        <Route path="/books" element={ <Books books={books} addToCart={addToCart}  /> }/>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="signup" element={<Signup setUser={setUser} />}/>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart books={books} setCartBooks={setCartBooks} addToCart={addToCart} removeFromCart={removeFromCart} cartBooks={cartBooks} />} />
      </Routes>
    </Router>
   </div>
    
   
  );
}

export default App;
