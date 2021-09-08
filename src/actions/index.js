import axios from 'axios';

export const loginUser = (enteredUsername) => {
  // console.log(enteredUsername) fine here too - accessed username
  return {
      type: 'LOGIN',
      payload: { isLoggedIn: true, username: enteredUsername },
    };
  };

export const logoutUser = () => {
  return {
      type: 'LOGOUT',
      payload: { isLoggedIn: false, username: '' },
    };
  };

// export const searchParams = (loc, cat) => {
//   return async (dispatch) => {
//     dispatch({
//       type: 'SEARCH',
//       payload: { location: loc, category: cat },
//     });
//   };
// };

export const fetchSearchResults = (location, cat) => {
  return async (dispatch) => {
    try {
      if (cat === 'Dining') {
        const { data } = await axios.get(`http://localhost:8000/apis/restaurant-search/${location}/`);
        // if (data) => raise error if not
        let resultsArray = data;
        // console.log(data);
        dispatch({
          type: 'GETRESULTS',
          payload: resultsArray,
        });
      } else if (cat === 'ALL') {
        const { data } = await axios.get(`http://localhost:8000/apis/event-search/${location}%20%london`);
        let resultsArray = data;
        // console.log(data);
        dispatch({
          type: 'GETRESULTS',
          payload: resultsArray,
        });
      } else {
        const { data } = await axios.get(`http://localhost:8000/apis/event-search/${location}%20%london/${cat}`);
        let resultsArray = data;
        // console.log(data);
        dispatch({
          type: 'GETRESULTS',
          payload: resultsArray,
        });
      }
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err,
      });
    }
  };
};


// Helper scrubber function
export const scrubStr = (str) => {
  const cleanStr = str
    .replaceAll("&quot;", '"')
    .replaceAll("&pound;", '£')
    .replaceAll("gbp", '£')
    .replaceAll("GBP", '£')
    .replaceAll("&#8220;", '"')
    .replaceAll("&#8211;", '-')
    .replaceAll("&#8221;", '"')
    .replaceAll("&#8217;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&eacute;", "e")
    .replaceAll("&amp;", " & ")
    .replaceAll("&ldquo;", '"')
    .replaceAll("&rsquo;", "'")
    .replaceAll("&rdquo;", '"')
    .replaceAll("&hellip;", " ... ");
  return cleanStr;
};

// Create a fetchfunc that takes in the two values in global state (loc and cat)
// inside fetchfunc, have a conditional that will make a fetch based on category being restaurant, specified cat or no cat
// store outcomes in global state as an array of objects
