import React from "react";
import { Link } from "react-router-dom";
import HeaderC from "../../Components/HeaderC";
import "../../utils/style/Choix.scss";
// import "../../js/CBurgers.js"

const PageBurgers = () => {
  let html = "";
  let select = "";

  fetch("https://titi.startwin.fr/products/type/burger")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let index = 0; index < data.length - 1; index++) {
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
        sessionStorage.setItem("choix1", `${e.target.value}`);
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
            <Link to="/click-collect">Click & Collect</Link> &#x3e; Choix des
            Burgers{" "}
          </p>
        </div>

        <div id="menu">
          <div id="up">
            <h1>Choix des Burgers</h1>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div id="down">
            <form action="">
              <ul id="api">{html}</ul>
              <div>
                <Link to="/nos-boissons">Suivant</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageBurgers;
