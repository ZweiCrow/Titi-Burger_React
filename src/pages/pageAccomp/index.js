import React from "react";
import { Link } from "react-router-dom";
import HeaderC from "../../Components/HeaderC";
import "../../utils/style/Choix.scss";

const PageAccomp = () => {
  let html = "";
  let select = "";

  let choix1 = sessionStorage.getItem("choix1");
  let choix2 = sessionStorage.getItem("choix2");

  fetch("https://titi.startwin.fr/products/type/accompagnement")
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
        sessionStorage.setItem("choix3", `${e.target.value}`);
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
            <Link to="/nos-burgers">Choix des Burgers</Link> &#x3e;{" "}
            <Link to="/nos-boissons">Choix des Boissons</Link> &#x3e; Choix des
            Accompagnements
          </p>
        </div>

        <div id="menu">
          <div id="up">
            <h1>Choix des Accompagnements</h1>
            <div id="userChoice">
              <div>
                <Link to="/nos-burgers">
                  <img id="Choix1" src={choix1} alt="" />
                </Link>
              </div>
              <div>
                <Link to="/nos-boissons">
                  <img id="Choix2" src={choix2} alt="" />
                </Link>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div id="down">
            <form>
              <ul id="api"></ul>
              <div>
                <Link to="/nos-desserts">Suivant</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageAccomp;
