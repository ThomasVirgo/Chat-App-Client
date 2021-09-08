import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const AccountEventCard = ({ result }) => {
  console.log(result);
  return (
    // <div id="eventCard">
    //   <h1>{result.event_name}</h1>
    //   <p>{result.description}</p>
    //   <p>
    //     {result.venue_name} at {result.venue_address} 
    //   </p>
    //   <img src={result.photo_url} alt="Event Image" />
    //   <p>
    //     <span>
    //       {result.start_date} - {result.end_date}
    //     </span>
    //     <span>
    //       Open from: {result.starts_at} - {result.ends_at}
    //     </span>
    //   </p>
    //   <p>Entry Fee: {result.entry_price}</p>
    //   <button onClick={() => window.open(result.link, '_blank')}>Buy Tickets</button>
    // </div>
    <div className="eventWrapper">
      <h6>NEW TING</h6>
        <h6>{result.event_name}</h6>
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
          {/* // {tokenStr && <button onClick={savetoDb}>Save</button>} interim solution - need to toggle and unsave, too: if (enteredUsername !== '' && isSaved) etc */}
    </div>
  );
}

export default AccountEventCard;
