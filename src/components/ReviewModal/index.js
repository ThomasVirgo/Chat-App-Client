import React, {useState} from 'react';
import axios from 'axios';
import './style.css';

const ReviewModal = ({result, toggleModal}) => {
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(5)

    function handleMessage(e){
        let newMessage = e.target.value;
        setMessage(newMessage)
    }

    function handleRating(e){
        let newRating = e.target.value;
        setRating(newRating)
    }

    function handleSubmit(e){
        event.preventDefault()
        console.log(message, rating)
        console.log(result)
        submitReview()
        toggleModal()
    }

    async function submitReview(){
        if (result.category == 'restaurant'){
            try {
                let {data} = await axios.get(`http://localhost:8000/places/restaurants/find/${result.name}/`)
                let review = {
                    message,
                    rating,
                    restaurant_id: data.id,
                    username: localStorage.getItem('username')
                }
                let postData = await axios.post(`http://localhost:8000/places/restaurant-reviews/`, review)
                console.log(postData)
            } catch (error) {
                console.log(error)
                try {
                    let obj = {
                        place_id: result.place_id,
                        name: result.name,
                        photo_url: result.photo_url,
                        address: result.address,
                        rating: result.rating,
                        total_ratings: result.total_ratings,
                        username: localStorage.getItem('username'),
                        is_viewable: false,
                        category: result.category,
                      };
                    let saveRestaurant = await axios.post(`http://localhost:8000/places/restaurants/`, obj)
                    console.log(saveRestaurant)
                    let review = {
                        message,
                        rating,
                        restaurant_id: data.id,
                        username: localStorage.getItem('username')
                    }
                    let postData = await axios.post(`http://localhost:8000/places/restaurant-reviews/`, review)
                    console.log(postData)

                } catch (error) {
                    console.log(error)
                }
            }
        }
    }

    return (
        <div className='review__modal'>
            <i className='bx bx-x menu-btn' onClick={toggleModal}></i>
            <h2>Review for {result.name}</h2>
            <form onSubmit={handleSubmit}>
                <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={handleMessage}></textarea>
                <input type="range" min="1" max="10" value={rating} onChange={handleRating} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ReviewModal