
let html = ""
let select = "";
let map;
const sieli = {lat: 48.860160, lng: 2.346190 };

let choix1 = sessionStorage.getItem("choix1")
let choix2 = sessionStorage.getItem("choix2")
let choix3 = sessionStorage.getItem("choix3")
let choix4 = sessionStorage.getItem("choix4")
const user = document.querySelector("#userChoice")


user.innerHTML = 
`
<div><a href="CBurgers.html"><img id="Choix1" src="${choix1}" alt=""></a></div>
<div><a href="CBoissons.html"><img id="Choix2" src="${choix2}" alt=""></a></div>
<div><a href="CAccompagnements.html"><img id="Choix3" src="${choix3}" alt=""></a></div>
<div><a href="CDessert.html"><img id="Choix4" src="${choix4}" alt=""></a></div>
`


function initMap() {
  map = new google.maps.Map(document.getElementById("Gmaps"), {
    zoom: 14,
    center: sieli,
    disableDefaultUI: true,
  });
  
  const marker = new google.maps.Marker({
    position: sieli,
    map: map,
  });
  marker.setMap(map);
}

window.initMap = initMap;


