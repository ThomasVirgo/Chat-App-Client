import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


function EventCard({ result }) {
  const enteredUsername = useSelector((state) => state.authReducer.username);
  console.log(enteredUsername);

  // const dummyData = {
  //   eventname: "Untitled - the UK's Largest Artists Fair",
  //   venue: {
  //     id: 8937,
  //     name: 'Chelsea Old Town Hall',
  //     address: 'Chelsea Old Town Hall, King&#39;s Road, Kensington and Chelsea, ',
  //     town: 'London',
  //     postcode_lookup: 'London',
  //     postcode: 'SW3 5EE',
  //     country: 'GB',
  //     phone: '0207 361 2220',
  //     latitude: 51.487417,
  //     longitude: -0.168162,
  //     type: 'Exhibition Centre',
  //     rating: 3,
  //   },
  //   largeimageurl: 'https://d31fr2pwly4c4s.cloudfront.net/c/0/3/1359030_2_untitled-the-uk8217s-largest-artists-fair.jpg',
  //   startdate: '2021-10-23T11:00:00+00:00',
  //   enddate: '2021-10-24T18:00:00+00:00',
  //   description: 'Untitled is artist founded and owned with as many as 170 exhibitors selling direct and commission free.',
  //   openingtimes: {
  //     doorsopen: '11:00',
  //     doorsclose: '18:00',
  //     lastentry: '17:30',
  //   },
  //   entryprice: 'Free - Apply on Website',
  //   artists: [],
  //   genres: [],
  //   link: 'https://www.skiddle.com/whats-on/London/Chelsea-Old-Town-Hall/Untitled---the-UKs-Largest-Artists-Fair/35892416/',
  //   category: 'event',
  // };


  async function savetoDb() {
    let obj = {
      event_name: result.eventname,
      venue_name: result.venue.name,
      venue_address: result.venue.address, //need to concat postcode to this
      venue_type: result.venue.type,
      entry_price: result.entryprice,
      starts_at: result.openingtimes.doorsopen,
      ends_at: result.openingtimes.doorsclose,
      start_date: result.startdate,
      link: result.link,
      end_date: result.enddate,
      photo_url: result.largeimageurl,
      description: result.description,
      username: enteredUsername,
      category: result.category,
    };

    let token = localStorage.getItem('token');
    if (token) {
      const { data } = await axios.post(`http://localhost:8000/places/events/`, obj,  {headers: {"Authorization": `Token ${token}` }},);
      console.log(data)
    }
  }
  console.log(enteredUsername)
  return (
    <div id="eventCard">
      <h1>{result.eventname}</h1>
      <p>{result.description}</p>
      <p>
        {result.venue.address} {result.venue.town} {result.venue.postcode}
      </p>
      <img src={result.largeimageurl} alt="Event Image" />
      <p>
        <span>
          {result.startdate} - {result.enddate}
        </span>
        <span>
          Open from: {result.openingtimes.doorsopen} Last Entry: {result.openingtimes.lastentry}
        </span>
      </p>
      <p>Entry Fee: {result.entryprice}</p>
      <button onClick={() => window.open(result.link, '_blank')}>Buy Tickets</button>
      {enteredUsername && <button onClick={savetoDb}>Save</button>} {/*interim solution - need to toggle and unsave, too: if (enteredUsername !== '' && isSaved) etc*/}    
    </div>
  );
}

export default EventCard;
