import React, {useState} from 'react';

export default function Search({books}) {

    const [filter, setFilter] = useState("");
    
    function bookSearch(event){
        setFilter(event.target.value);
    }

    let booksSe = books.filter(book => {
        return  Object.keys(book).some(key =>
            book[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

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
            <div className='books-container'>
            <div className='books-row'>
              <div className='book-column'>
                <div className='book'>
                  <div className='product'>
                    <img className='book-img' src={book.image} alt="book img" />
                      <div className='card-content'>
                        <h2>{book.title}</h2>
                          <h3 style={{color: "#8C2F39"}}>by: {book.author}</h3>
                          <h4 className='price'> $ {book.price}.00</h4>
                          <h4  style={{color: "#8C2F39"}}> {book.stock} in stock </h4>
                      </div>
        
                  </div>
        
                </div>
        
              </div>
        
            </div>
          </div>  



          )
            
      })}

  </div>);
}
