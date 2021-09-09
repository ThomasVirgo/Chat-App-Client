import React, { useState, useEffect } from "react";
import { Slider, SearchForm } from "../../components";
import goodvibes from '../../img/vibee.gif'
import axios from 'axios'
import './style.css'

function LandingPage() {
    const [sliderResults, setSliderResults] = useState([])

    useEffect(async()=> {
        const {data} = await axios.get('https://vibe-drf-api.herokuapp.com/places/reviews/best')
        const {events, restaurants} = data
        let restaurantResults, eventResults
        restaurants.length >= 3 ? restaurantResults = restaurants.slice(0, 3) : restaurantResults = restaurants
        events.length >= 3 ? eventResults = events.slice(0, 3) : eventResults = events
        let output = restaurantResults.concat(eventResults)
        setSliderResults(output)
    }, [])

    return (
        <>
            <SearchForm />
            <div id='landing-content'>
                <img id='brand-logo' src={goodvibes} alt='vibes-logo'/>
                <h3>Find the coolest gigs and coziest restaurants!</h3>
            </div>
        </>
    );
}

export default LandingPage;