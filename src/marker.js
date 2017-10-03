// Create a new function that can be used to build new markers for a given type (hotel, restaurant or activity) and coordinates.
const mapboxgl = require('mapbox-gl');

const iconURLS = {

    hotels: "http://i.imgur.com/WbMOfMl.png",
    restaurants: "http://i.imgur.com/D9574Cu.png",
    activities: "http://i.imgur.com/cqR6pUI.png"
}



function BuildMarker(markerType, coordinateArray) {

    const markerDomEl = document.createElement('div'); //create a new detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${iconURLS[markerType]})`;
    console.log(markerDomEl.style.backgroundImage)

    new mapboxgl.Marker(markerDomEl).setLngLat(coordinateArray).addTo(map);
}
// const BuildMarker = (markerType, coordinateArray) => { //Activity, Hotel, Restaurant
//     console.log('hello')
//     const markerDomEl = document.createElement('div'); //create a new detached DIV
//     markerDomEl.style.width = "32px";
//     markerDomEl.style.height = "39px";
//     markerDomEl.style.backgroundImage = `url(${iconURLS[markerType]})`;


//     new mapboxgl.Marker(markerDomEl).setLngLat(coordinateArray).addTo(map);
// };

module.exports = BuildMarker;
