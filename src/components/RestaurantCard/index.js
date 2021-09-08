import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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
    <div className="eventWrapper">
      <h1>{result.name}</h1>
      <div className="image" style={{ backgroundImage: `url(${result.photo_url})` }}></div>
      <div className="details">
        <h3>Google rating: {result.rating}
          <p>Total ratings: {result.total_ratings}</p>
      </h3>
      </div>
      <button onClick={goToWebsite}>WEBSITE</button>
      {enteredUsername && <button onClick={savetoDb}>Save</button>} {/*interim solution - need to toggle and unsave, too*/}
      <button>ADD REVIEW</button>
    </div>
  );
}

export default RestaurantCard;
