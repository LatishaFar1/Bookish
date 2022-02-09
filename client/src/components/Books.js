import React from 'react';
import Map from './Map';
import Search from './Search';

export default function Books({books}) {



  return <div>
  

    <Search books={books} />
    {/* <Map /> */}
 
   </div>     
  };
