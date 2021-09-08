import React, { useState, useEffect } from "react";
import { Slider } from "../../components";
import axios from 'axios'

function LandingPage() {
    const [sliderResults, setSliderResults] = useState([])

    useEffect(async()=> {
        const {data} = await axios.get('http://localhost:8000/places/reviews/best')
        const {events, restaurants} = data
        let restaurantResults, eventResults
        restaurants.length >= 3 ? restaurantResults = restaurants.slice(0, 3) : restaurantResults = restaurants
        events.length >= 3 ? eventResults = events.slice(0, 3) : eventResults = events
        let output = restaurantResults.concat(eventResults)
        setSliderResults(output)
    }, [])

    return (
        <>
         <Slider data={sliderResults} />
        </>
    );
}

export default LandingPage;