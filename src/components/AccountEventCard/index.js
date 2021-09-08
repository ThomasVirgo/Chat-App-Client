import React from 'react';

const AccountEventCard = ({ result }) => {
  
  return (
    <div id="eventCard">
      <h1>{result.event_name}</h1>
      <p>{result.description}</p>
      <p>
        {result.venue_name} at {result.venue_address} 
      </p>
      <img src={result.photo_url} alt="Event Image" />
      <p>
        <span>
          {result.start_date} - {result.end_date}
        </span>
        <span>
          Open from: {result.starts_at} - {result.ends_at}
        </span>
      </p>
      <p>Entry Fee: {result.entry_price}</p>
      <button onClick={() => window.open(result.link, '_blank')}>Buy Tickets</button>
    </div>
  );
}

export default AccountEventCard;
