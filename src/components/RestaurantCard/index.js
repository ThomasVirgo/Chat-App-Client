import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './style.css';

function RestaurantCard({ result }) {
  //   {
  //     "name": "The Ivy Chelsea Garden",
  //     "address": "195, 197 King's Rd, London SW3 5EQ, United Kingdom",
  //     "rating": 4.3,
  //     "photo_reference": "Aap_uEBKuKs7aK7p-GXorVvGpirWdiilimJL7MLVw0jV1JMbrlsEokbtkzt-tmzyYVPu3QKn6YxXkc6Qfxt8hRgLHITB4b2SGwu0EnmxOmCoBOA7ICQKoEo1Uy4g5_HpWOCgc8vdQl8rFT_Px4cLc6NYIOZ-G-clMvigg74TnZxdqMxmcoyV",
  //     "photo_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1400&maxheight=1400&photo_reference=Aap_uEBKuKs7aK7p-GXorVvGpirWdiilimJL7MLVw0jV1JMbrlsEokbtkzt-tmzyYVPu3QKn6YxXkc6Qfxt8hRgLHITB4b2SGwu0EnmxOmCoBOA7ICQKoEo1Uy4g5_HpWOCgc8vdQl8rFT_Px4cLc6NYIOZ-G-clMvigg74TnZxdqMxmcoyV&key=AIzaSyBb20CVuq9MNn35mjwMImG3ln_1Zk1KO7E",
  //     "place_id": "ChIJJ-MhPWwFdkgRKVwtA039nU0",
  //     "total_ratings": 3038,
  //     "category": "restaurant"
  // }

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

  // const response = await fetch('http://localhost:3000/books', options);
  // const { id, err } = await response.json();

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

    console.log(obj)

    let object = {
      place_id: "laf23",
      name: "thisplace",
      photo_url: "www.urlforthisplace.com",
      address: "Brick Lane",
      rating: 3.4,
      total_ratings: 256,
      username: 'theboss',
    };

    let token = localStorage.getItem('token');
    if (token) {
      const { data } = await axios.post(`http://localhost:8000/places/restaurants/`, object,  {headers: {"Authorization": `Token ${token}` }},);
      console.log(data);
    } else {
      console.log("This is where you'll disable the button");
    }
  }
  // console.log(savetoDb());


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
          <button onClick={savetoDb}>Save</button>
          <button>Add review</button> {/* Here will add an onClick that makes the post and can add redirect*/}
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
