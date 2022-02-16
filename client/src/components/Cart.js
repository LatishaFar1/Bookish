import React from 'react'


export default function Cart({books, setCartBooks, cartBooks, addToCart, removeFromCart}) {

    const booksTotal = cartBooks.reduce((a, c ) => a + c.price * c.quantity, 0);
    


  return (
    <div>
        <div className='home-title'>Cart</div>
        <div>
            {cartBooks.length === 0 && <div className='cart-subtitle'> your cart is empty </div>}
            {cartBooks.map((item) => (
                <div key={item.id}> 
                    <div> {item.title} <br/>
                       by: {item.author}
                         <img className='book-img' src={item.image} alt="book img" />
                    
                    </div>
                    <div>
                        {item.quantity} x ${item.price.toFixed(2)}
                    </div>
                    <div>
                        <button onClick={()=> addToCart(item)}>+</button>
                        <button onClick={()=> removeFromCart(item)}>-</button>
                    </div>
                 </div>
            ))}
            {booksTotal.length !== 0 && (
              <div className="cart-total">
                  <h1>Total:</h1>
                  ${booksTotal.toFixed(2)}
                </div>
            )}
        </div>
    </div>
  )
}
