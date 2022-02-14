import React from 'react';

export default function Search({books, book, addToCart, searchQuery, setSearchQuery, filteredBooks}) {

 

  return( <div>
      <div className='search-container' >
        <form action="/books" method="get">
            <input type="text" className="search-text" placeholder="search for a book title"  name="s" value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            />
        </form>
      </div>

      {filteredBooks.map((book) =>{
          return(
            <div className='books-container' key={book.id}>
            <div className='books-row'>
              <div className='book-column'>
                <div className='book'>
                  <div className='product' >
                    <img className='book-img' src={book.image} alt="book img"/>
                      <div className='card-content'>
                        <h2>{book.title} </h2>
                          <h3 style={{color: "#8C2F39"}}>by: {book.author}</h3>
                          <h4 className='price'> $ {book.price}.00</h4>
                          <h4 style={{color: "#8C2F39"}}> {book.stock} in stock </h4>
                      </div>
                        <button className='add-to-cart-button' onClick={()=> addToCart(book)}>Add to Cart</button>
                  </div>
        
                </div>
        
              </div>
        
            </div>
          </div>  



          )
            
      })}

  </div>);
}
