import React from 'react';

function EventCard({ result }) {
  
  console.log(result);

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
    </div>
  );
}

export default EventCard;
