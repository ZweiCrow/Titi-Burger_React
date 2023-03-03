import React from "react";
import { Link } from "react-router-dom";
import HeaderC from "../../Components/HeaderC";
import "../../utils/style/Choix.scss";
// import "../../js/CBoissons.js"

const PageBoissons = () => {
  let html = "";
  let select = "";
  let choix1 = sessionStorage.getItem("choix1");

  fetch("https://titi.startwin.fr/products/type/boisson")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let index = 0; index < data.length; index++) {
        jsonToHtml(data, index);
      }
      document.querySelector("#api").innerHTML = html;
      userCoice();
    });

  function userCoice() {
    select = document.querySelectorAll("input[type=radio]");
    console.log(select);
    for (const el of select) {
      el.addEventListener("input", (e) => {
        // console.log(e.target.value);
        sessionStorage.setItem("choix2", `${e.target.value}`);
      });
    }
  }

  function jsonToHtml(arr, index) {
    const el = arr[index];
    console.log(el);
    html += `<li>
          <input value="${el.image}" type="radio" name="choix" id="${el._id}"/>
          <label for="${el._id}">
              <div class="image">
                  <img src="${el.image}" alt=""/>
              </div>
              <div class="desc">
                  <h3>${el.name}</h3>
                  <p>${el.description}</p>
              </div>
              <div class="prix"><p>${el.price.$numberDecimal} $</p></div>
          </label>
      </li>`;
  }

  return (
    <div className="choix">
      <HeaderC />
      <main>
        <div id="Arianne">
          <p>
            <Link to="/">Accueil</Link> &#x3e;{" "}
            <Link to="/click-collect">Click & Collect</Link> &#x3e;{" "}
            <Link to="/nos-burgers">Choix des Burgers</Link> &#x3e; Choix des
            Boissons{" "}
          </p>
        </div>

        <div id="menu">
          <div id="up">
            <h1>Choix des Boissons</h1>
            <div id="userChoice">
              <div>
                <Link to="/nos-burgers">
                  <img id="Choix1" src={choix1} alt="" />
                </Link>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div id="down">
            <form>
              <ul id="api">{html}</ul>
              <div>
                <Link to="/nos-accompagnements">Suivant</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageBoissons;
