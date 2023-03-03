
let html = ""
let select = "";
let map;
const sieli = {lat: 48.860160, lng: 2.346190 };

let choix1 = sessionStorage.getItem("choix1")
let choix2 = sessionStorage.getItem("choix2")
let choix3 = sessionStorage.getItem("choix3")
const user = document.querySelector("#userChoice")

fetch("https://titi.startwin.fr/products/type/dessert").then(function(response){
    return response.json();
}).then(function(data){
    for (let index = 0; index < data.length; index++) {
        jsonToHtml(data,index);
    }
    document.querySelector("#api").innerHTML = html;
    userCoice();
})

user.innerHTML = 
`<div><a href="CBurgers.html"><img id="Choix1" src="${choix1}" alt=""></a></div>
<div><a href="CBoissons.html"><img id="Choix2" src="${choix2}" alt=""></a></div>
<div><a href="CAccompagnements.html"><img id="Choix3" src="${choix3}" alt=""></a></div>
<div></div>`


window.initMap = initMap;

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

function userCoice () {
    select = document.querySelectorAll("input[type=radio]")
    console.log(select);
    for (const el of select) {
        el.addEventListener("input", (e) => {
            // console.log(e.target.value);
            sessionStorage.setItem("choix4",`${e.target.value}`)
        })
    }
}

function jsonToHtml(arr, index) {
    const el = arr[index];
    console.log(el);
    html += 
    `<li>
        <input value="${el.image}" type="radio" name="choix" id="${el._id}">
        <label for="${el._id}">
            <div class="image">
                <img src="${el.image}" alt="">
            </div>
            <div class="desc">
                <h3>${el.name}</h3>
                <p>${el.description}</p>
            </div>
            <div class="prix"><p>${el.price.$numberDecimal} $</p></div>
        </label>
    </li>`;
}