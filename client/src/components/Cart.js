import React from 'react'


export default function Cart({books, setCartBooks, cartBooks, addToCart, removeFromCart}) {

    


  return (
    <div>
        <div className='home-title'>Cart</div>
        <div>
            {cartBooks.length === 0 && <div> your cart is empty </div>}
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
        </div>
    </div>
  )
}
