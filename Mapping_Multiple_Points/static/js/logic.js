// 13.4.2
// Add console.log to check to see if our code is working.
console.log("working");

// get cities.js data
let cityData = cities;   //don't need .js

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  //id: 'mapbox/dark-v10',  //make dark
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});

//  Other map ids to use isntead of streets-v11

//mapbox/streets-v11
//mapbox/outdoors-v11
//mapbox/light-v10
//mapbox/dark-v10
//mapbox/satellite-v9
//mapbox/satellite-streets-v11

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  Loop through cities array using function
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population + "</h3>")
//   .addTo(map);
// });

//  Loop through cities array using function
 cityData.forEach(function(city) {
   console.log(city)
   L.circleMarker(city.location, {
     radius: city.population/100000
   })
   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population + "</h3>")
   .addTo(map);
 });