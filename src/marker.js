// Create a new function that can be used to build new markers for a given type (hotel, restaurant or activity) and coordinates.
const mapbox = require('mapgox-gl')

const iconURLS = {

    hotels: "http://i.imgur.com/WbMOfMl.png",
    restaurants: "http://i.imgur.com/D9574Cu.png",
    activities: "http://i.imgur.com/cqR6pUI.png"
}




const buildMarker = (markerType, coordinateArray) =>{ //Activity, Hotel, Restaurant
let backgroundImage;
this.markerType = iconURLS[markerType]; //set markerType as key to iconURLS object
this.coordinateArray = coordinateArray;



// if(markerType === "activity"){

// }

// if(markerType === "hotel"){

// }


// if(markerType === "restaurant"){

// }


}




module.exports = buildMarker;
