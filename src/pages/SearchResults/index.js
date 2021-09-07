import React from 'react';
import { RestaurantCard, EventCard } from '../../components';
import { useSelector } from 'react-redux';

function SearchResults() {
  const resultsArray = useSelector((state) => state.searchReducer.searchResultsArray);
  const resultsCards = resultsArray.map((result, idx) => result.category === 'restaurant' ? <div key={idx}><RestaurantCard result={result}/></div> : <div key={idx}><EventCard result={result}/></div>)
  return (
    <>
      <h1>Helloooo</h1>
      {resultsCards}
    </>
  );
}

export default SearchResults;
