import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HeaderC from "../../Components/HeaderC";
import "../../utils/style/Choix.scss";

// Url api
import { URL } from "../../utils/constantes/urls";

const PageBoissons = () => {
  let choix1 = sessionStorage.getItem("choix1");
  let select = ""
  const [boisson, setBoisson] = useState([])

  useEffect(()=>{
    const fetchBoissons = async () => {
      try{
        const {data} = await axios.get(URL.fetchBoisson)
        console.log(data);
        setBoisson(data);
      }catch(error){
        console.log(error.message());
      }
    }
    fetchBoissons()
  },[])

  userCoice();

  function userCoice() {
    select = document.querySelectorAll("input[type=radio]");
    for (const el of select) {
      el.addEventListener("input", (e) => {
        sessionStorage.setItem("choix2", `${e.target.value}`);
      });
    }
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
            <ul id="api">
                {boisson.map((item)=>{
                  return (<li>
                            <input value={item.image} type="radio" name="choix" id={item._id}/>
                            <label for={item._id}>
                                <div class="image">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div class="desc">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div class="prix"><p>{item.price.$numberDecimal} €</p></div>
                            </label>
                          </li>)
                    })
                  }
              </ul>
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
