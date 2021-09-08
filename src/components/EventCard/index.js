import React from 'react';
import './style.css';
import { scrubStr } from "../../actions";
import { useSelector } from 'react-redux';
import axios from 'axios';

function EventCard({ result }) {
  const enteredUsername = useSelector((state) => state.authReducer.username);
  console.log(enteredUsername);

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
    <div className="cards_item">
      <div className="card">
        <div className="card_image"><img src={result.largeimageurl} alt="Event Image" /></div>
        <div className="card_content">
          <h2 className="card_title">{scrubStr(result.eventname)}</h2>
          <div className="card_text">
            <p className="card-dates">Dates: {result.startdate.slice(0, 10)} - {result.enddate.slice(0, 10)}</p>
            <p>{scrubStr(result.description)}</p>
            <p>Address: {scrubStr(result.venue.address)} {result.venue.town} {result.venue.postcode}</p>
            <p>Open from: {result.openingtimes.doorsopen}<br />Last Entry: {result.openingtimes.lastentry}</p>
            <p>Entry Fee: £{scrubStr(result.entryprice)}</p>
          </div>
          <button onClick={() => window.open(result.link, '_blank')}>Buy Tickets</button>
          {enteredUsername && <button onClick={savetoDb}>Save</button>} {/*interim solution - need to toggle and unsave, too: if (enteredUsername !== '' && isSaved) etc*/}
        </div>
      </div>
    </div>
  );
}

export default EventCard;