import React from 'react';
import './style.css';

const ReviewCard = ({review}) => {
    return (
        <div aria-label='review-card-outline' className='review__card'>
            <span aria-label='review-card-info' className='review__user'>{review.username} : {review.rating}/10</span>
            <p>{review.message}</p>
        </div>
    )
}

export default ReviewCard