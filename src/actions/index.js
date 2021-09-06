import axios from "axios";

googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY // use for geocoding and restaurants

skiddleAPIKey = process.env.REACT_APP_SKIDDLE_API_KEY // use for events (festivals, gigs, musicals, comedy shows etc)


restaurantsURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&key=${googleAPIKey}`


// load restaurants list by user's input location:
export const loadRestaurants = async (location) => {
    try {
        const response = await axios.get(restaurantsURL);

        const restaurants = response.data;

        console.log(`GET: Here's the list of restaurants in ${location}`, restaurants);
        
        return restaurants;
    } catch (errors) {
        console.log(errors);
    }
}

// need latitude and longitude for events listings:
export const loadGeolocation = () => {
    return
}




export const loadEvents = () => {
    return
}