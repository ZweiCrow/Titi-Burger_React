
const menuBurger = document.querySelector("#menuBurger")
const menu = document.querySelector("#menuMobile")
const closeMenu = document.querySelector("#closeMenu")

menuBurger.addEventListener("click", () => {//click sur le menu burger
  menu.style.right = "0"
  menu.style.opacity = "1"
  menu.style.visibility = "visible"
})

closeMenu.addEventListener("click", () => {//click sur le menu burger
  menu.style.right = "-600px"
  menu.style.opacity = "0"
  menu.style.visibility = "hidden"
})

let map;

const sieli = {lat: 48.860160, lng: 2.346190 };

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



