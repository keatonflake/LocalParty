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
  'to the movie theater',
  'hiking',
  'roller skating',
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
var shuffleResult = list[i];
}

function initMap() {
  var searchInput = document.getElementById("input").value;
  console.log(searchInput);

  if (searchInput == ""){
    if (document.getElementById("food").style.backgroundColor == "white") {
      searchInput = food[getRandomInt(food.length)];
      document.getElementById("result").innerHTML = "directions to nearest " + searchInput + "!";
    } else {
      searchInput = activities[getRandomInt(activities.length)];
      document.getElementById("result").innerHTML = "Lets go " + searchInput + "!";
    }
    console.log(searchInput);
  }




  
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 18,
  });

  const request = {
    query: searchInput,
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
document.getElementById("go").addEventListener("click", initMap = initMap);

document.getElementById("activity").addEventListener("click", function(){
	document.getElementById("activity").style.backgroundColor = "white";})
document.getElementById("activity").addEventListener("click", function(){
  document.getElementById("food").style.backgroundColor = "#BFDBF7";})
document.getElementById("activity").addEventListener("click", initMap = initMap);

document.getElementById("food").addEventListener("click", function(){
	document.getElementById("food").style.backgroundColor = "white";})
document.getElementById("food").addEventListener("click", function(){
  document.getElementById("activity").style.backgroundColor = "#BFDBF7";})
document.getElementById("food").addEventListener("click", initMap = initMap);

var words = ['Family Fun', 'Restaurant', 'Date Night', 'At Home Getaway'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});