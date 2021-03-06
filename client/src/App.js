
import './App.css';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Cart from './components/Cart';
import Signup from './components/Signup';
import Search from './components/Search';
import Map from "./components/Map";

function App() {
  
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [cartBooks, setCartBooks] = useState([]);


  //search books 

  const {search} = window.location; 
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');




  const filterBooks = (books, query) => {
    if (!query) {
        return books;
    }

    return books.filter((book) => {
        const bookName = book.title.toLowerCase();
        return bookName.includes(query);
    });
};

const filteredBooks = filterBooks(books, searchQuery);


// fetch books 

  useEffect(() => {
    fetch("api/books")
    .then(response => response.json())
    .then(booksData => {
      setBooks([...booksData])
    })
  }, [])

  
  //login

  useEffect(() => {
    fetch("api/me")
    .then((response) => {
      if (response.ok ){
        response.json()
        .then((user) => setUser(user));
      }
    })
  }, []);


  //cart 

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

      <NavBar setUser={setUser} user={user} />
     
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} user={user}/>} />
        <Route path="signup" element={<Signup setUser={setUser} />}/>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/cart" element={<Cart books={books} setCartBooks={setCartBooks} addToCart={addToCart} removeFromCart={removeFromCart} cartBooks={cartBooks} />} />
        <Route path="/books" element={ <Search setSearchQuery={setSearchQuery} filteredBooks={filteredBooks} books={books} searchQuery={searchQuery} addToCart={addToCart}  /> }
        />
      </Routes>
    </Router>
    <Map />
   
          
   </div>
    
   
  );
}

export default App;
