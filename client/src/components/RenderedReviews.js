import React from 'react'

export default function RenderedReviews({reviews}) {


    console.log(reviews)
  return (
    <div>
        
        {reviews ? reviews.map((review) => <h5 key={review.id}>{review.comment} </h5> ) : null}

        



    </div>
  )
}
