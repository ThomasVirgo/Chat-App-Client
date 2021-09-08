import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './style.css';

function RestaurantCard({ result }) {
  const enteredUsername = useSelector((state) => state.authReducer.username);
  console.log(enteredUsername);

  async function goToWebsite() {
    const { data } = await axios.get(`http://localhost:8000/apis/restaurant-search/website/${result.place_id}`);
    console.log(data);
    if (data != 'Not Available') {
      window.open(data, '_blank');
    } else {
      alert('This restaurant has no website, sorry!');
    }
  }


  async function savetoDb() {
    let obj = {
      place_id: result.place_id,
      name: result.name,
      photo_url: result.photo_url,
      address: result.address,
      rating: result.rating,
      total_ratings: result.total_ratings,
      username: enteredUsername,
      category: result.category,
    };

    let token = localStorage.getItem('token');
    if (token) {
      const { data } = await axios.post(`http://localhost:8000/places/restaurants/`, obj,  {headers: {"Authorization": `Token ${token}` }},);
      console.log(data)
    }
  }
  console.log(enteredUsername)


  return (
    <div id="restautantCard">
      <div id="header">
        <h1>{result.name}</h1>
        <p>{result.address}</p>
        <p>Google rating: {result.rating}</p>
        <p>Total ratings: {result.total_ratings}</p>
      </div>
      <div id="imgAndReviews">
        <div id="leftColumn">
          <img src={result.photo_url} alt="image not available" />
          <button onClick={goToWebsite}>Go to website</button>
        </div>
        <div id="rightColumn">
          <div id="reviewsDiv">Reviews</div>
          {enteredUsername && <button onClick={savetoDb}>Save</button>} {/*interim solution - need to toggle and unsave, too*/}
          <button>Add review</button> {/* Here will add an onClick that makes the post and can add redirect*/}
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
