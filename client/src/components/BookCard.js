import React from 'react';

export default function BookCard({book}) {




  return <div style={{backgroundColor: "#10181a"}}>
    <h1 className='book-header'></h1>
{/* <section className='books-section'> */}
  <div className='books-container'>
    <div className='books-row'>
      <div className='book-column'>
        <div className='book'>
          <div className='product'>
            <img className='book-img' src={book.image} alt="book img" />
              <div className='card-content'>
                <h2>{book.title}</h2>
                  <h3>by: {book.author}</h3>
                  <h4 className='price'> $ {book.price}</h4>
                  <h4> Available: {book.stock}</h4>
              </div>

          </div>

        </div>

      </div>

    </div>


  </div>

{/* </section> */}
  



  </div>;
}
