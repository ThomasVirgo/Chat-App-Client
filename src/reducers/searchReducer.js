const initState = {
  searchResultsArray: [],
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    // case 'SEARCH':
    //   return { ...state, searchLocation: action.payload.location, searchCategory: action.payload.category, error: false };
    case 'GETRESULTS':
      return { searchResultsArray: action.payload, error: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
