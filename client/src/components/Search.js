import React, {useState} from 'react';

export default function Search({ addToCart, searchQuery, setSearchQuery, filteredBooks}) {

  const [formInfo, setFormInfo] = useState({comment: ""});



  function handleSubmit(e){
    e.preventDefault()
    fetch("/api/books/book_id/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formInfo),
    })
    .then((response) => response.json())
    .then(() => {
        setFormInfo({});
    });
}

const handleChange = (event) => {
  setFormInfo((prev) => {
      return{
          ...prev,
          [event.target.name]: event.target.value
      }
  })
}

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
                  <form style={{color: "#8C2F39"}} onSubmit={handleSubmit}>
                      <h4>Leave a review</h4>
                      <input type="text" name="comment" onChange={handleChange} />
                      <button className='add-to-cart-button'>submit review</button>
                     </form>
                </div>
        
              </div>
        
            </div>
          </div>  



          )
            
      })}
    

  </div>);
}
