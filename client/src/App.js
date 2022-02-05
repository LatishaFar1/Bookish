import Map from './components/Map';
import './App.css';
import Books from './components/Books';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

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
      <Routes>
        <Route path="/books" element={ <Books books={books} /> }/>

     
    
     {/* <Map/>
     <Login/> */}
      </Routes>
    </Router>
   </div>
    
   
  );
}

export default App;
