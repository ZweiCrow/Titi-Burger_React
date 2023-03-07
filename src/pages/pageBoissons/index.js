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
  const [burger, setBurger] = useState([])
  const [boisson, setBoisson] = useState([])

  useEffect(()=>{
    const fetchBurgers = async () => {
      try{
        const {data} = await axios.get(URL.fetchBurger)
        setBurger(data);
      }catch(error){
        console.log(error.message());
      }
    }
    const fetchBoissons = async () => {
      try{
        const {data} = await axios.get(URL.fetchBoisson)
        setBoisson(data);
      }catch(error){
        console.log(error.message());
      }
    }
    fetchBurgers()
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
                  {burger.map((item)=>{
                      if(item._id === choix1){
                        return(<img id="Choix1" key={item._id} src={item.image} alt="" />)
                      }else{
                        return(<img key={item._id} alt="" style={{display: "none"}}></img>)}
                    })}
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
