import React, {useEffect, useState} from 'react';
import Reviews from './Reviews';
import RenderedReviews from './RenderedReviews';

export default function Search({ addToCart, searchQuery, setSearchQuery, filteredBooks}) {


  const [reviews, setReviews] = useState([]);


  function handleSubmit(e, id, comment, setComment){
    e.preventDefault()
    fetch(`/api/books/${id}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({book_id: id, comment: comment}),
    })
    .then((response) => response.json())
    .then(() => {
        setComment("");
    });
}


 

// useEffect(() => {
//   fetch("/api/books/:book_id/reviews")
//   .then(response => response.json())
//   .then(reviewsData => {
//     setReviews([...reviewsData])
//     // console.log(reviewsData)
//   })
// }, [])


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
                   
                    <Reviews handleSubmit={handleSubmit} book={book}/>
                   
                </div>
        
              </div>
        
            </div>
          </div>  



)

})}
    <br/>
    <div>
    </div>

  </div>);
}
