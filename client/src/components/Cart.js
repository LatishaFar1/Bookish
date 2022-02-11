import React from 'react'


export default function Cart({books, cartBooks}) {

    


  return (
    <div>
        <div>Cart</div>
        <div>
            {cartBooks.length === 0 && <div> your cart is empty </div>}
        </div>
    </div>
  )
}
