import React from 'react';
import axios from'axios';

function RestaurantCard({result}) {

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
    <>
      <h1>{result.name}</h1>
      <p>{result.address}</p>
      <span>Google rating: {result.rating}</span>
      <span>Total ratings: {result.total_ratings}</span>
      <img src={result.photo_url} alt="image not available" />
      <button onClick={goToWebsite}>Go to website</button>
      <button>Save</button>
      <button>Add review</button>
    </>
  );
}

export default RestaurantCard;
