const mapboxgl = require("mapbox-gl");
const BuildMarker = require('../src/marker.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFlbGRmc2ExNyIsImEiOiJjajhicWw0bWIwMHFuMndvazRkOGY3dGl4In0.wkFBT4V25f4-MNeLQjrpwg';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

let newMarker = BuildMarker('hotels', [-74.009, 40.705]);
