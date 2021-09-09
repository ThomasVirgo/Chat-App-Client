import React, {useState} from 'react';
import axios from 'axios';
import './style.css';

const ReviewModal = ({result, toggleModal}) => {
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(5)
    let username= localStorage.getItem('username');

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
                let {data} = await axios.get(`http://localhost:8000/places/restaurants/find/${result.name}/${username}`)
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
                        username: username,
                        is_viewable: false,
                        category: result.category,
                      };
                    let saveRestaurant = await axios.post(`http://localhost:8000/places/restaurants/`, obj)
                    console.log(saveRestaurant)
                    let review = {
                        message,
                        rating,
                        restaurant_id: saveRestaurant.data.id,
                        username: localStorage.getItem('username')
                    }
                    let postData = await axios.post(`http://localhost:8000/places/restaurant-reviews/`, review)
                    console.log(postData)

                } catch (error) {
                    console.log(error)
                }
            }
        } 

        if (result.category == 'event'){
            try {
                let {data} = await axios.get(`http://localhost:8000/places/events/find/${result.name}/${username}`)
                let review = {
                    message,
                    rating,
                    event_id: data.id,
                    username: localStorage.getItem('username')
                }
                let postData = await axios.post(`http://localhost:8000/places/event-reviews/`, review)
                console.log(postData)
            } catch (error) {
                console.log(error)
                try {
                    let obj = {
                        event_name: result.eventname,
                        venue_name: result.venue.name,
                        venue_address: result.venue.address, 
                        venue_type: result.venue.type,
                        entry_price: result.entryprice,
                        starts_at: result.openingtimes.doorsopen,
                        ends_at: result.openingtimes.doorsclose,
                        start_date: result.startdate,
                        link: result.link,
                        end_date: result.enddate,
                        photo_url: result.largeimageurl,
                        description: result.description,
                        username: username,
                        category: result.category,
                      };
                    let saveEvent = await axios.post(`http://localhost:8000/places/events/`, obj)
                    console.log(saveEvent)
                    let review = {
                        message,
                        rating,
                        event_id: saveEvent.data.id,
                        username: localStorage.getItem('username')
                    }
                    let postData = await axios.post(`http://localhost:8000/places/event-reviews/`, review)
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
                <textarea placeholder='add message here...' name="message" id="message" cols="30" rows="10" value={message} onChange={handleMessage}></textarea>
                <div className='slider__container'> 
                    <p>Rating: </p> 
                    <input type="range" min="1" max="10" value={rating} onChange={handleRating} />
                    <p>{rating}/10</p>
                </div>
                <input type="submit" value="Submit" className='modal__submit'/>
            </form>
        </div>
    )
}

export default ReviewModal