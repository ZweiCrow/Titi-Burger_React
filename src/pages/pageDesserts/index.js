import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HeaderC from "../../Components/HeaderC";
import "../../utils/style/Choix.scss";

// Url api
import { URL } from "../../utils/constantes/urls";

const PageDesserts = () => {
  let choix1 = sessionStorage.getItem("choix1");
  let choix2 = sessionStorage.getItem("choix2");
  let choix3 = sessionStorage.getItem("choix3");
  let select = ""
  const [dessert, setDessert] = useState([])

  useEffect(()=>{
    const fetchDessert = async () => {
      try{
        const {data} = await axios.get(URL.fetchDessert)
        setDessert(data);
      }catch(error){
        console.log(error.message());
      }
    }
    fetchDessert()
  },[])

  userCoice();

  function userCoice() {
    select = document.querySelectorAll("input[type=radio]");
    for (const el of select) {
      el.addEventListener("input", (e) => {
        sessionStorage.setItem("choix4", `${e.target.value}`);
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
            <Link to="/nos-burgers">Choix des Burgers</Link> &#x3e;{" "}
            <Link to="/nos-boissons">Choix des Boissons</Link> &#x3e;{" "}
            <Link to="/nos-accompagnements">Choix des Accompagnements</Link>{" "}
            &#x3e; Choix des Desserts{" "}
          </p>
        </div>

        <div id="menu">
          <div id="up">
            <h1>Choix des Desserts</h1>
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
              <div>
                <Link to="/nos-accompagnements">
                  <img id="Choix3" src={choix3} alt="" />
                </Link>
              </div>
              <div></div>
            </div>
          </div>
          <div id="down">
            <form>
            <ul id="api">
                {dessert.map((item)=>{
                  return (<li key={item._id}>
                            <input value={item.image} type="radio" name="choix" id={item._id}/>
                            <label htmlFor={item._id}>
                                <div className="image">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="desc">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="prix"><p>{item.price.$numberDecimal} €</p></div>
                            </label>
                          </li>)
                    })
                  }
              </ul>
              <div>
                <Link to="/recapitulatif">Suivant</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageDesserts;
