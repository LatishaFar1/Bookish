import React from 'react';
import Map from './Map';
import Search from './Search';

export default function Books({books, addToCart, removeFromCart, setSearchQuery, searchQuery}) {



  return <div>
  

    <Search books={books} addToCart={addToCart} removeFromCart={removeFromCart} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
    {/* <Map /> */}
 
   </div>     
  };
