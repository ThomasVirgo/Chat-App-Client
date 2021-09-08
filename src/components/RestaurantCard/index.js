import React from 'react';
import axios from 'axios';
import './style.css'


function RestaurantCard({ result }) {

  async function goToWebsite(){
    const {data} = await axios.get(`http://localhost:8000/apis/restaurant-search/website/${result.place_id}`)
    console.log(data)
    if (data != 'Not Available'){
      window.open(data, '_blank');
    } else {
      alert('This restaurant has no website, sorry!')
    }
  }

  return (
    <div id="restautantCard">
      <div id="header">
        <h1>{result.name}</h1>
        <p>{result.address}</p>
        <p>Google rating: {result.rating}</p>
        <p>Total ratings: {result.total_ratings}</p>
      </div>
      <img src={result.photo_url} alt="image not available" />
      <button onClick={goToWebsite}>WEBSITE</button>
      <button>SAVE</button>
      <button>ADD REVIEW</button>
    </div>
  );
}

export default RestaurantCard;
