import React from 'react';
import Map from './Map';
import Search from './Search';

export default function Books({books, addToCart}) {



  return <div>
  

    <Search books={books} addToCart={addToCart} />
    {/* <Map /> */}
 
   </div>     
  };
