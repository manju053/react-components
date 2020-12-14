import React, { forwardRef, useImperativeHandle, useState } from 'react';
import styles from './rating.module.scss';

const  Rating = forwardRef((props, ref) => {
    const [rating, setRating] = useState(props.defaultRating);
    const [orange, setOrange] = useState('orange');
    const ratingArr = [
        {
            rating: 1,
            set: false
        },
        {
            rating: 2,
            set: false
        },
        {
            rating: 3,
            set: false
        },
        {
            rating: 4,
            set: false
        },
        {
            rating: 5,
            set: false
        },
    ];
    const [ratingObj, setRatingObj] = useState(ratingArr)

    const changeRating = (i) => {
        setRating(i);
        props.onclick(i);
    }


    return (
        <div>
            {
                ratingObj.map(element => <span key={element.rating} key={element.rating} className={`fa fa-star ${(rating >= element.rating && 'orange') ? styles[orange] : ''}`} onClick={() => changeRating(element.rating)}></span>)
            }

<button onClick={() => changeRating(0)}>reset</button>

        </div>
    )
})
                

export default Rating
