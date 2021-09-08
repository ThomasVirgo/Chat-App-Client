import React from 'react';
import './style.css';
import { scrubStr } from "../../actions";

function EventCard({ result }) {

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
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
