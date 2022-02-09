import React, {useState} from 'react';

export default function Search({books}) {

   

  return <div>
      <div className='search-container'>
        <div>
            <input type="text" placeholder="search for a book title"/>
        </div>
      </div>

  </div>;
}
