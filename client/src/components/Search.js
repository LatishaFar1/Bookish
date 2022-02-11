import React, {useState} from 'react';

export default function Search({books, book, cartBooks, setCartBooks}) {

    const [filter, setFilter] = useState("");
    
    function bookSearch(event){
        setFilter(event.target.value);
    }

    let booksSe = books.filter(book => {
        return  Object.keys(book).some(key =>
            book[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

    const addToCart = (book) => {
      const exist = cartBooks.find(item => item.id === book.id);
      if (exist){
        setCartBooks(cartBooks.map((item => item.id === book.id ?{...exist, quantity: exist.quantity +1}: item ))
        );
      } else {
        setCartBooks([...cartBooks, {...book, quantity: 1}]);
      }
    };

  return( <div>
      <div className='search-container' >
        <div>
            <input type="text" className="search-text" placeholder="search for a book title" value={filter}
            onChange={bookSearch}
            />
        </div>
      </div>

      {booksSe.map((book, key) =>{
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
                        <button className='add-to-cart-button' onClick={addToCart}>Add to Cart</button>
                  </div>
        
                </div>
        
              </div>
        
            </div>
          </div>  



          )
            
      })}

  </div>);
}
