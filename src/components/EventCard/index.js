import React from 'react';
import './style.css';
import { scrubStr } from "../../actions";

function EventCard({ result }) {

  return (
    <div id="eventCard">
      <h1>{result.eventname}</h1>
      <p>{scrubStr(result.description)}</p>
      <p>{scrubStr(result.venue.address)} {result.venue.town} {result.venue.postcode}</p>
      <img src={result.largeimageurl} alt="Event Image" />
      <p>Dates: {result.startdate.slice(0, 10)} - {result.enddate.slice(0, 10)}</p>
      <p>Open from: {result.openingtimes.doorsopen}<br />Last Entry: {result.openingtimes.lastentry}</p>
      <p>Entry Fee: {result.entryprice.toLowerCase()}</p>
      <button onClick={() => window.open(result.link, '_blank')}>Buy Tickets</button>
      <button>Save</button>
    </div>
  );
}

export default EventCard;
