import React from 'react';
import './style.css';

const ReviewCard = ({review}) => {
    return (
        <div className='review__card'>
            <span className='review__user'>{review.username} : {review.rating}/10</span>
            <p>{review.message}</p>
        </div>
    )
}

export default ReviewCard