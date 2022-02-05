import Map from './components/Map';
import './App.css';
import Books from './components/Books';
import Login from './components/Login';
import { useEffect, useState } from 'react';

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
     <h1>Welcome to Bookish</h1>
     <Books books={books} />
     {/* <Map/>
     <Login/> */}
   </div>
    
   
  );
}

export default App;
