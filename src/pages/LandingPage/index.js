import React, { useState, useEffect } from "react";
import { Slider, SearchForm } from "../../components";
import goodvibes from '../../img/vibee.gif'
import axios from 'axios'
import './style.css'

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
            <SearchForm />
            <div id='landing-content'>
                <img id='brand-logo' src={goodvibes} alt='vibes-logo'/>
                <h3>You catching our vibe? When two good people vibe together but can't find a place with the same good vibes, well, what good does that do anyone? So, we decided to have your back. Find the coolest gigs and coziest restaurants here, save them to your account and tick them off once you've visited them. Don't forget to let us know the answer to our only question: what were the vibes there like?</h3>
                {/* <Slider data={sliderResults} /> */}
            </div>
        </>
    );
}

export default LandingPage;