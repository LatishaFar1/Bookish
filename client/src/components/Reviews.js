import React, {useState, useEffect} from 'react'
import RenderedReviews from './RenderedReviews';
export default function Reviews({book, handleSubmit}) {

  const [comment, setComment] = useState("");


  const handleChange = (event) => {
    // setFormInfo((prev) => {
    //     return{
    //         ...prev,
    //         [event.target.name]: event.target.value
    //     }
    // })
    setComment(event.target.value)
  }

  console.log(book)


 

  return (
    <div>


  <form style={{color: "#8C2F39"}} onSubmit={(e) => handleSubmit(e, book.id, comment, setComment)} >
                      <h4>Leave a review</h4>
                      <input type="text" name="comment" onChange={handleChange} value={comment} />
                      {/* <input type="hidden" name="book_id" value={book.id} onChange={handleChange}/> */}
                      <button className='add-to-cart-button'>submit review</button>
                     </form>

<RenderedReviews reviews={book.reviews}/>



    </div>



    
  )
}
