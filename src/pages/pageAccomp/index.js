import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HeaderC from "../../Components/HeaderC";
import "../../utils/style/Choix.scss";

// Url api
import { URL } from "../../utils/constantes/urls";

const PageAccomp = () => {
  let choix1 = sessionStorage.getItem("choix1");
  let choix2 = sessionStorage.getItem("choix2");
  let select = ""
  const [burger, setBurger] = useState([])
  const [boisson, setBoisson] = useState([])
  const [accompagnements, setAccompagnements] = useState([])

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
    const fetchAccompagnements = async () => {
      try{
        const {data} = await axios.get(URL.fetchAccompagnement)
        setAccompagnements(data);
      }catch(error){
        console.log(error.message());
      }
    }
    fetchBurgers()
    fetchBoissons()
    fetchAccompagnements()
  },[])

  userCoice();

  function userCoice() {
    select = document.querySelectorAll("input[type=radio]");
    for (const el of select) {
      el.addEventListener("input", (e) => {
        sessionStorage.setItem("choix3", `${e.target.value}`);
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
                  {burger.map((item)=>{
                      if(item._id === choix1){
                        return(<img id="Choix1" key={item._id} src={item.image} alt="" />)
                      }else{
                        return(<img key={item._id} alt="" style={{display: "none"}}></img>)}
                    })}
                </Link>
              </div>
              <div>
              <Link to="/nos-boissons">
                  {boisson.map((item)=>{
                      if(item._id === choix2){
                        return(<img id="Choix2" key={item._id} src={item.image} alt="" />)
                      }else{
                        return(<img key={item._id} alt="" style={{display: "none"}}></img>)}
                    })}
                </Link>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div id="down">
            <form>
            <ul id="api">
                {accompagnements.map((item)=>{
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
