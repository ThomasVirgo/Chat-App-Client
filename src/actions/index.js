import axios from 'axios';

// getting unique events
const uniqueEvents = (arr) => arr.filter((el, i) => dummyData.findIndex(obj => obj.eventname === el.eventname) === i)

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
        let resultsArray = uniqueEvents(data);
        console.log(resultsArray);
        dispatch({
          type: 'GETRESULTS',
          payload: resultsArray,
        });
      } else {
        const { data } = await axios.get(`http://localhost:8000/apis/event-search/${location}%20%london/${cat}`);
        let resultsArray = uniqueEvents(data);
        console.log(resultsArray);
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
    .replaceAll("&quot;", "'")
    .replaceAll("&pound;", '£')
    .replaceAll("gbp", '£')
    .replaceAll("GBP", '£')
    .replaceAll("&#8220;", "'")
    .replaceAll("&#8211;", '-')
    .replaceAll("&#8221;", "'")
    .replaceAll("&#8216;", "'")
    .replaceAll("&#8217;", "'")
    .replaceAll("&#039;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&eacute;", "e")
    .replaceAll("&amp;", " & ")
    .replaceAll("&ldquo;", "'")
    .replaceAll("&rsquo;", "'")
    .replaceAll("&rdquo;", "'")
    .replaceAll("&hellip;", " ... ")
    .replaceAll("&#128266", "");
  return cleanStr;
};



// const dummyData = [{
//   "eventname": "South Kensington Comedy Club",
//   "venue": {
//       "id": 71553,
//   },
//   "startdate": "2021-09-17T20:00:00+00:00",
//   "enddate": "2021-09-17T22:00:00+00:00",
// },
// {
//   "eventname": "South Kensington Comedy Club",
//   "venue": {
//       "id": 71553,
//   },
//   "startdate": "2021-09-18T19:00:00+00:00",
//   "enddate": "2021-09-18T21:00:00+00:00",
// },
// {
//   "eventname": "South Kensington Comedy Club",
//   "venue": {
//       "id": 71553,
//   },
//   "startdate": "2021-09-25T19:00:00+00:00",
//   "enddate": "2021-09-25T21:00:00+00:00",
// }
// ]
  

// const filterRepeatingEvents = (arr) => {
//   const arrayWithStartEndDates = arr.map((el, i) => {
//     let last = arr.lastIndexOf(el);
//     i !== last & el.venue.id === el[last].venue.id? { ...el, "enddate": el[last].enddate } : el
//   })
//   return arrayWithStartEndDates;
// }

// const newFilterRepeatingEvents = (arr) => {
//   return arr.filter((el, i) => {
//     let last = arr.lastIndexOf(el);
//     i !== last & el.venue.id === arr[last].venue.id? { ...el, "enddate": arr[last].enddate } : el
//   })
// }






// Create a fetchfunc that takes in the two values in global state (loc and cat)
// inside fetchfunc, have a conditional that will make a fetch based on category being restaurant, specified cat or no cat
// store outcomes in global state as an array of objects
