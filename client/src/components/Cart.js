import React from 'react'


export default function Cart({books, setCartBooks, cartBooks, addToCart, removeFromCart}) {

    


  return (
    <div>
        <div>Cart</div>
        <div>
            {cartBooks.length === 0 && <div> your cart is empty </div>}
            {cartBooks.map((item) => (
                <div key={item.id}> 
                    <div> {item.title} </div>
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
