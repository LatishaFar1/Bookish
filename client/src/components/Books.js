import React from 'react';
import BookCard from './BookCard';

export default function Books({books}) {



  return <div>
    {
      books.map(book => 
        <BookCard book={book} key={book.id}/>)
    }
  
            
   </div>     
  };
