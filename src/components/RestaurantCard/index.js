import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ReviewModal } from '..'

function RestaurantCard({ result }) {
  const enteredUsername = useSelector((state) => state.authReducer.username);
  const [buttonText, setButtonText] = useState("Save")
  const [isModalActive, setIsModalActive] = useState(false);

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
    console.log(obj);

    let token = localStorage.getItem('token');
    console.log(token);
    
    if (token) {
      await axios.post(`http://localhost:8000/places/restaurants/`, obj,  {headers: {"Authorization": `token ${token}` }},);
      // console.log(data)
      setButtonText('Saved');
      console.log(buttonText);
      setTimeout(() => {
        setButtonText('Save');
        console.log(buttonText);
      }, 2000)

    }
  }
  
  function toggleModal(){
    let newState = !isModalActive;
    setIsModalActive(newState)
  }

  let tokenStr = localStorage.getItem('token');
  return (
    <>
    <div className="eventWrapper">
      <h1>{result.name}</h1>
      <div className="image" style={{ backgroundImage: `url(${result.photo_url})` }}></div>
      <div className="details">
        <h3>Google rating: {result.rating}
          <p>Total ratings: {result.total_ratings}</p>
      </h3>
      </div>
      <button onClick={goToWebsite}>WEBSITE</button>
      {tokenStr && <button onClick={savetoDb}>{buttonText}</button>} {/*interim solution - need to toggle and unsave, too*/}
      <button onClick={toggleModal}>ADD REVIEW</button>
    </div>
    {isModalActive && <ReviewModal result={result} toggleModal={toggleModal}/>}
    </>
  );
}

export default RestaurantCard;
