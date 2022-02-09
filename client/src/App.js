
import './App.css';
import Books from './components/Books';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NavBar from "./components/NavBar";


function App() {
  
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("api/books")
    .then(response => response.json())
    .then(booksData => {
      setBooks([...booksData])
    })
  }, [])



  return (
   <div>
    <Router>

      <NavBar />
     
      <Routes>
        <Route path="/books" element={ <Books books={books} /> }/>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
   </div>
    
   
  );
}

export default App;
