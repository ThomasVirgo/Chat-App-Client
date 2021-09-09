import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
// import './style.css'

const AccountEventCard = ({ result }) => {
  const [isViewable, setIsViewable] = useState(result.is_viewable);
  console.log(result);

  async function isViewed(){
    try {
      let token = localStorage.getItem('token');
      let obj = {...result, is_viewable: false}
      console.log(obj)
      if (token) {
        const { data } = await axios.put(`http://localhost:8000/places/events/${obj.id}`, obj,  {headers: {"Authorization": `Token ${token}` }},);
        console.log(data)
        setIsViewable(false)
    } }
    catch (error) {
      console.log(error)
    }
  }

    return (
      <>
      {isViewable ? 
        <div className="eventWrapper">
            <h1>{result.event_name}</h1>
          <div className="image" style={{ backgroundImage: `url(${result.photo_url})` }}></div>
          <div className="details"><h3>{result.description}</h3>
            <div className="card-dates"><FontAwesomeIcon icon={faCalendarAlt}/>  {result.start_date.slice(0, 10)} - {result.end_date.slice(0, 10)}</div>
            <p>Address:<br/>{result.venue_address}</p>
            {/* <p>{result.venue_town} {result.venue_postcode}</p> */}
            <p>Open from: {result.starts_at}{result.ends_at}</p>
            {/* <p>Open from: {result.starts_at}{result.ends_at ? ` Last Entry: ${result.openingtimes.lastentry}` : ''}</p> */}
            <p>Entry Fee: {result.entry_price}</p>
          </div>
              <button onClick={() => window.open(result.link, '_blank')}>Buy Tickets</button>
              <button onClick={()=>isViewed()}>Unsave</button> {/*--how to make this only happen in the account page - not for landing*/}
              {/* // {tokenStr && <button onClick={savetoDb}>Save</button>} interim solution - need to toggle and unsave, too: if (enteredUsername !== '' && isSaved) etc */}
        </div>: ''}
        </>
  
    )
  // }
}

export default AccountEventCard;
