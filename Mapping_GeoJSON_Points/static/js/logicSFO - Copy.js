// 13.4.1
// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([37.5, -122.5], 10);  //SF Airport

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

  // We create the tile layer that will be the background of our map.
  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/dark-v10',  //make dark
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
  });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
let marker = L.marker([37.5, -122.5]).addTo(map);

//Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.name + "</h2>");
  }

}).addTo(map);

// console.log("marking");

// L.geoJSON(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log("in")
//     console.log(layer);
//     console.log("out")
//     layer.bindPopup();
//    }
// }).addTo(map);
