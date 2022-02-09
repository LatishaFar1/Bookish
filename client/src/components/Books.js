import React from 'react';
import BookCard from './BookCard';
import Map from './Map';
import Search from './Search';

export default function Books({books}) {



  return <div>
    {
      books.map(book => 
        <BookCard book={book} key={book.id}/>)

    }

    <Search books={books} />
    {/* <Map />
  */}
   </div>     
  };
