const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')
const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);
console.log('hello')

mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFlbGRmc2ExNyIsImEiOiJjajhicWw0bWIwMHFuMndvazRkOGY3dGl4In0.wkFBT4V25f4-MNeLQjrpwg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


let newMarker = new buildMarker("hotels", [-73.009151, 41.705086])
newMarker.addTo(map)



const markerDomEl = document.createElement('div'); //create a new detached DIV
markerDomEl.style.width = "32px"
markerDomEl.style.height = "39px"
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);


