import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ReviewModal } from '..'

//if we are on account page, isViewed needs to be what works, if we are on search-results, needs to be savetoDb func - make a func that combines the two

function RestaurantCard({ result }) {
  const enteredUsername = useSelector((state) => state.authReducer.username);
  const [isViewable, setIsViewable] = useState(true);
  const [buttonText, setButtonText] = useState("")
  const [isModalActive, setIsModalActive] = useState(false);
  let username= localStorage.getItem('username');

  const pathname = window.location.pathname

  useEffect(()=>{
    if (pathname.includes('account')){
      setButtonText('UNSAVE')
    } else {
      setButtonText('SAVE')
    }
  }, [])

  async function goToWebsite() {
    const { data } = await axios.get(`https://vibe-drf-api.herokuapp.com/apis/restaurant-search/website/${result.place_id}`);
    console.log(data);
    if (data != 'Not Available') {
      window.open(data, '_blank');
    } else {
      alert('This restaurant has no website, sorry!');
    }
  }

  async function isViewed(){
    try {
      let token = localStorage.getItem('token');
      let obj = {...result, is_viewable: false} //check isviewable same name
      console.log(obj)
      if (token) {
        const { data } = await axios.put(`https://vibe-drf-api.herokuapp.com/places/restaurants/${obj.id}`, obj,  {headers: {"Authorization": `Token ${token}` }},);
        console.log(data)
        setIsViewable(false)
        setButtonText('UNSAVED');
    } }
    catch (error) {
      console.log(error)
    }
  }

  function functionChooser(){
    if (pathname.includes('account')){
      isViewed()
    } else {
      savetoDb()
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
      username: username,
      category: result.category,
    };
    console.log(obj);

    let token = localStorage.getItem('token');
    console.log(token);
    
    if (token) {
      await axios.post(`https://vibe-drf-api.herokuapp.com/places/restaurants/`, obj,  {headers: {"Authorization": `token ${token}` }},);
      setButtonText('SAVED');
    }
  }
  
  function toggleModal(){
    let newState = !isModalActive;
    setIsModalActive(newState)
  }

  let tokenStr = localStorage.getItem('token');
  return (
    <>
    {isViewable ?
    <div className="eventWrapper">
      <h1>{result.name}</h1>
      <div className="image" style={{ backgroundImage: `url(${result.photo_url})` }}></div>
      <div className="details">
        <h3>Google rating: {result.rating}
          <p>Total ratings: {result.total_ratings}</p>
      </h3>
      </div>
      <button onClick={goToWebsite}>WEBSITE</button>
      {tokenStr && <button onClick={functionChooser}>{buttonText}</button>} {/*interim solution - need to toggle and unsave, too*/}
      <button onClick={toggleModal}>ADD REVIEW</button>
    </div>: ''}
    {isModalActive && <ReviewModal result={result} toggleModal={toggleModal}/>}
    </>
  );
}

export default RestaurantCard;
