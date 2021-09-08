import React, {useState, useEffect} from "react";
import axios from 'axios';
import { RestaurantCard } from '../../components'
import { AccountEventCard } from '../../components'

function Account() {
    const [userRestaurants, setUserRestaurants] = useState([])
    const [userEvents, setUserEvents] = useState([])

    // need to get the username from redux store, not hard code..

    useEffect(async ()=>{
        let username = 'Tom'
        let restaurants = await axios.get(`http://localhost:8000/places/user/restaurants/${username}`)
        let events = await axios.get(`http://localhost:8000/places/user/events/${username}`)
        console.log(restaurants)
        console.log(events)
        setUserRestaurants(restaurants.data)
        setUserEvents(events.data)
    }, [])

    const restaurantElements = userRestaurants.map((result, idx) => <div key={idx}><RestaurantCard result={result}/></div>)
    const eventElements = userEvents.map((result, idx) => <div key={idx}><AccountEventCard result={result}/></div>)

    return (
        <>
        <h2>Your saved restaurants</h2>
        {restaurantElements}
        <h2>Your saved events</h2>
        {eventElements}
        </>
    );
}

export default Account;