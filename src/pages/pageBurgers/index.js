import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HeaderC from "../../Components/HeaderC";
import "../../utils/style/Choix.scss";

// Url api
import { URL } from "../../utils/constantes/urls";

const PageBurgers = () => {
  let select = ""
  const [burger, setBurger] = useState([])

  useEffect(()=>{
    const fetchBurgers = async () => {
      try{
        const {data} = await axios.get(URL.fetchBurger)
        setBurger(data);
      }catch(error){
        console.log(error.message());
      }
    }
    fetchBurgers()
  },[])

  userCoice();

  function userCoice() {
    select = document.querySelectorAll("input[type=radio]");
    for (const el of select) {
      el.addEventListener("input", (e) => {
        console.log(e);
        sessionStorage.setItem("choix1", `${e.target.value}`);
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
              <ul id="api">
                {burger.map((item)=>{
                  return (<li key={item._id}>
                            <input value={item._id} type="radio" name="choix" id={item._id}/>
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
