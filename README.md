# Vibe-Client

Vibe is a dating suggestions app (full-stack). Its frontend is built with React and Redux. 

**API details we need.**

# GOOGLE PLACES API

Example URL for restaurant search by area: 

```https://maps.googleapis.com/maps/api/place/textsearch/json?query=<STRING(e.g."southwark,restaurants")>&key=<API_KEY>```


RESTAURANTS fields we need (from data.results):

"name"

"formatted_address"

"photos"[0]["photo_reference"]

"rating" (0 to 5)

"user_ratings_total" (e.g. 4021)

"place_id"



# Google Places Photo URL:

```://maps.googleapis.com/maps/api/place/photo?photo_reference=<PHOTO_REF>&maxwidth=400&key=<API_KEY>```


Google Places ID URL, to get the place website via "data.result.website":

```https://maps.googleapis.com/maps/api/place/details/json?place_id=<PLACE_ID>&key=<API_KEY>```


***********************************


# GOOGLE Geocoding API:

```https://maps.googleapis.com/maps/api/geocode/json?address=<AREA>&key=<API_KEY>```

We'll need to get LATITUDE & LONGITUDE via
  
  data.results => geometry.location.lat and geometry.location.lng

**************************************


# Skiddle GIGS API:

URL with Chelsea latitude and longitude and radius of 5 miles (minimum), gives 14 results:
  
```https://www.skiddle.com/api/v1/events/search/?api_key=<API_KEY>&latitude=51.4991&longitude=0.1938&radius=5&eventcode=LIVE&order=distance```


We need these fields from "data.results":
  
venue.name, venue.address, venue.town, largeimageurl, link, date, startdate, enddate, description
  
  
Eventcode is optional but it is nice to use. Codes below are useful:
  
FEST = Festivals
  
LIVE = Live music
  
DATE = Dating event
  
THEATRE = Theatre/Dance
  
COMEDY = Comedy
  
ARTS = The Arts
  

******************************************
  
# MOVIEGLU API:

API Endpoint:
  
```https://api-gate2.movieglu.com/```

  
HEADERS - the fields below must be passed in the HTTP header:
  
```client:	FUTU
  
x-api-key:	<MY_API_KEY>
  
authorization:	<AUTH>
  
territory:	UK
  
api-version:	v200
  
geolocation:	Your location in format lat;lng, e.g. 52.47;-1.93
  
device-datetime:	yyyy-mm-ddThh:mm:ss.sssZ (ISO 8601 format, e.g. 2018-09-14T08:30:17.360Z)