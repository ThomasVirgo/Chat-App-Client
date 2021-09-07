import React from 'react';
import { RestaurantCard, EventCard } from '../../components';
import { useSelector } from 'react-redux';

function SearchResults() {
  const arrayito = useSelector((state) => state.searchResultsArray);
  console.log(arrayito);
  return (
    <>
      <h1>Helloooo</h1>
      {/* {category === 'restaurant' ? <RestaurantCard /> : <EventCard />} */}
    </>
  );
}

export default SearchResults;
