let map;
let service;
let infowindow;
var searchInput = document.getElementById("input").value;
// console.log("|" + searchInput + "|");

// function searchitem(shuffledItem) {
//   var shuffledItem = shuffledItem
//   console.log(shuffledItem)
// }

const activities = [
  'bowling',
  'movie',
  'hiking'
];

const food = [
  'pizza',
  'Chinese',
  'Italian',
  "McDonald's",
  'Taco Bell',
  "Wendy's",
  "Del Taco", 
  "Arby's",
  'Chick-fil-a',
  "Carl's Jr.",
  'Texas Roadhouse'
];

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

function shuffle(list){
let i = getRandomInt(list.length)
console.log(list[i]);
// searchitem(shuffledItem);
}
var shuffledItem = list[i];

function initMap() {
  var searchInput = document.getElementById("input").value;
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 18,
  });

  const request = {
    query: shuffledItem,
    fields: ["name", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}
document.getElementById("go").addEventListener("click", initMap = initMap)

