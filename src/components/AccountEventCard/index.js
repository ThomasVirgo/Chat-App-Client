import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { scrubStr } from "../../actions";
// import './style.css'

const AccountEventCard = ({ result }) => {
  const [isViewable, setIsViewable] = useState(true); //temporary - kinda works but not really
  console.log(result);

  const isViewed = () => {
    setIsViewable(false)
  }
  // if (isViewable){
    return (
      <>
      {isViewable ? 
        <div className="eventWrapper">
            <h1>{result.event_name}</h1>
          <div className="image" style={{ backgroundImage: `url(${result.photo_url})` }}></div>
          <div className="details"><h3>{scrubStr(result.description)}</h3>
            <div className="card-dates"><FontAwesomeIcon icon={faCalendarAlt}/>  {result.start_date.slice(0, 10)} - {result.end_date.slice(0, 10)}</div>
            <p>Address:<br/>{result.venue_address}</p>
            {/* <p>{result.venue_town} {result.venue_postcode}</p> */}
            <p>Open from: {result.openingtimes.doorsopen}{result.openingtimes.lastentry ? ` Last Entry: ${result.openingtimes.lastentry}` : ''}</p>
            <p>Entry Fee: {scrubStr(result.entry_price)}</p>
          </div>
              <button onClick={() => window.open(result.link, '_blank')}>BUY TICKETS</button>
              <button onClick={()=>isViewed()}>UNSAVE</button> {/*--how to make this only happen in the account page - not for landing*/}
              {/* // {tokenStr && <button onClick={savetoDb}>Save</button>} interim solution - need to toggle and unsave, too: if (enteredUsername !== '' && isSaved) etc */}
        </div>: ''}
        </>
  
    )
  // }
}

export default AccountEventCard;
