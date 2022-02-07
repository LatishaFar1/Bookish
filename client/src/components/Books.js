import React from 'react';
import BookCard from './BookCard';
import Map from './Map';

export default function Books({books}) {



  return <div>
    {
      books.map(book => 
        <BookCard book={book} key={book.id}/>)
    }
   
    <Map />
 
   </div>     
  };
