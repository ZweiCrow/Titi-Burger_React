
let html = ""
let select = "";
let map;
const sieli = {lat: 48.860160, lng: 2.346190 };


fetch("https://titi.startwin.fr/products/type/burger").then(function(response){
    return response.json();
}).then(function(data){
    for (let index = 0; index < data.length-1; index++) {
        jsonToHtml(data,index);
    }
    document.querySelector("#api").innerHTML = html;
    userCoice();
})





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
            sessionStorage.setItem("choix1",`${e.target.value}`)
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

