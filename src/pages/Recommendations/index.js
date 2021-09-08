import React, { useState, useEffect } from "react";
import axios from 'axios';
import { RestaurantRecommendationsCard } from '../../components'
import { EventRecommendationsCard } from '../../components'
// import { useSelector } from 'react-redux';


const Recommendations = () => {
    const [restaurantResults, setRestaurantResults] = useState([]);
    const [eventResults, setEventResults] = useState([]);
    // const [combinedResults, setCombinedResults] = useState([]);

    useEffect(() => {
        const fetchRestaurantRecommendations = async () => {
            try {
                let { data } = await axios.get(`http://localhost:8000/places/restaurant-reviews`)
                setRestaurantResults(data.map(el => el = { ...el, category: "restaurant" }))
            } catch (err) {
                console.warn(err)
            }
        }
        fetchRestaurantRecommendations();

    }, [])
        
    useEffect(() => {
        const fetchEventRecommendations = async () => {
            try {
                let { data } = await axios.get(`http://localhost:8000/places/event-reviews`)
                setEventResults(data.map(el => el = { ...el, category: "event" }))
            } catch (err) {
                console.warn(err)
            }
        }
        fetchEventRecommendations();
    }, [])

    const combinedResults = [...restaurantResults, ...eventResults].sort((a, b) => 0.5 - Math.random());;
    console.log(restaurantResults)
    console.log(eventResults)
    console.log(combinedResults);

    // const combinedArray = 
    
    // const resultsArray = useSelector((state) => state.searchReducer.searchResultsArray);
    // const resultsCards = resultsArray.map((result, idx) => result.category === 'restaurant' ? <div key={idx}><RestaurantRecommendationsCard result={result}/></div> : <div key={idx}><EventRecommendationsCard result={result}/></div>)

    const resultsCards = combinedResults.map((result, idx) => result.category === 'restaurant' ? <div key={idx}><RestaurantRecommendationsCard result={result}/></div> : <div key={idx}><EventRecommendationsCard result={result}/></div>)
      return (
        <>
          {/* <h1>Recommendations Page</h1> */}
          {resultsCards}
        </>
      );
}

export default Recommendations;

