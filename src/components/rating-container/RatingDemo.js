import React, { useRef, useState } from 'react'
import Rating from '../shared/rating/rating'

function RatingDemo() {
    const [rating, setRating] = useState();
    const [defaultRating, setDefaultRating] = useState(0)
    const ratingRef = useRef();
    const ratingChange = (rating) => {
        setRating(rating);
    }
    return (
        <div>
            <Rating ref={ratingRef} onclick={ratingChange} defaultRating={defaultRating} />
            You given rating of - {rating}
        </div>
    )
}

export default RatingDemo
