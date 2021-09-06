import axios from "axios";


// load restaurants list by user's input location:
export const loadRestaurants = async (location) => {
    try {
        // const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants,${location},London&key=${process.env.REACT_APP_GOOGLE_API_KEY}`); 
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants,${location},London&key=AIzaSyBPKGIi1k-hDdWitqvRxpYmtSK7Eto2ue4`); 

        const restaurants = response.data;

        console.log(`GET: Here's the list of restaurants in ${location}`, restaurants);
        
        return restaurants;
    } catch (errors) {
        console.log(errors);
    }
}

// need latitude and longitude for events listings:
export const loadGeolocation = async (location) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location},London&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);

        const latitude = results.geometry.location.lat
        const longitude = results.geometry.location.lng
        const geolocationString = `latitude=${latitude}&longitude=${longitude}`

        console.log(`GET: Here's lattitude and longitude of ${location}: ${geolocationString}`);

        return geolocationString;
    } catch (errors) {
        console.log(errors);
    }
}




export const loadGigs = async (location) => {
    const locString = loadGeolocation(location)
    console.log(locString);
    try {
        const response = await axios.get(`https://www.skiddle.com/api/v1/events/search/?&api_key=${process.env.REACT_APP_SKIDDLE_API_KEY}&${locString}&radius=5&eventcode=LIVE&order=distance`); 

        const results = response.data;

        console.log(`GET: Here's a list of gigs in ${location}: ${results}`);

        return results;
    } catch (errors) {
        console.log(errors);
    }
}