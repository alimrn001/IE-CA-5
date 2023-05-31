import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Rate = () => {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  
  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        // onPointerEnter={onPointerEnter}
        // onPointerLeave={onPointerLeave}
        // onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div>
  )
}

export default Rate;