import React from 'react';
import Map from './Map';
import Search from './Search';

export default function Books({books, cartBooks, setCartBooks}) {



  return <div>
  

    <Search books={books} setCartBooks={setCartBooks} cartBooks={cartBooks} />
    {/* <Map /> */}
 
   </div>     
  };
