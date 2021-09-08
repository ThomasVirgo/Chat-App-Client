import React from 'react';
import { scrubStr } from "../../actions";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

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
  let tokenStr = localStorage.getItem('token');
  
  console.log(enteredUsername)

  const background = result.largeimageurl;

  

  return (
    <div className="eventWrapper">
        <h1>{scrubStr(result.eventname)}</h1>
      <div className="image" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="details"><h3>{scrubStr(result.description)}</h3>

            {/* <div className="card-dates"><FontAwesomeIcon icon={faCalendarAlt}/>{result.startdate.slice(0, 10)} - {result.enddate.slice(0, 10)}</div> */}
        <p>Address:<br/>{scrubStr(result.venue.address)} {result.venue.town} {result.venue.postcode}</p>
        <p>Open from: {result.openingtimes.doorsopen}{result.openingtimes.lastentry ? ` Last Entry: ${result.openingtimes.lastentry}` : ''}</p>
          <p>Entry Fee: {scrubStr(result.entryprice)}</p>
      </div>
          <button onClick={() => window.open(result.link, '_blank')}>Buy Tickets</button>
          {tokenStr && <button onClick={savetoDb}>Save</button>} {/*interim solution - need to toggle and unsave, too: if (enteredUsername !== '' && isSaved) etc*/}
      </div>
  );
}

export default EventCard;