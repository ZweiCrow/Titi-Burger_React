import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import HeaderC from '../../Components/HeaderC';

// Url api
import { URL } from "../../utils/constantes/urls";

const PageRecap = () => {
  let choix1 = sessionStorage.getItem("choix1")
  let choix2 = sessionStorage.getItem("choix2")
  let choix3 = sessionStorage.getItem("choix3")
  let choix4 = sessionStorage.getItem("choix4")
  let prix1 = parseInt(sessionStorage.getItem("prix1"));
  let prix2 = parseInt(sessionStorage.getItem("prix2"));
  let prix3 = parseInt(sessionStorage.getItem("prix3"));
  let prix4 = parseInt(sessionStorage.getItem("prix4"));
  const [burger, setBurger] = useState([])
  const [boisson, setBoisson] = useState([])
  const [accompagnements, setAccompagnements] = useState([])
  const [dessert, setDessert] = useState([])

  useEffect(()=>{
    const fetchBurgers = async () => {
      try{
        const {data} = await axios.get(URL.fetchBurger)
        setBurger(data);
      }catch(error){
        // console.log(error.message());
      }
    }
    const fetchBoissons = async () => {
      try{
        const {data} = await axios.get(URL.fetchBoisson)
        setBoisson(data);
      }catch(error){
        // console.log(error.message());
      }
    }
    const fetchAccompagnements = async () => {
      try{
        const {data} = await axios.get(URL.fetchAccompagnement)
        setAccompagnements(data);
      }catch(error){
        // console.log(error.message());
      }
    }
    const fetchDessert = async () => {
      try{
        const {data} = await axios.get(URL.fetchDessert)
        setDessert(data);
      }catch(error){
        // console.log(error.message();
      }
    }
    fetchBurgers()
    fetchBoissons()
    fetchAccompagnements()
    fetchDessert()

  },[])

  if(isNaN(prix1)){
    sessionStorage.setItem("prix1", 0);
  }
  if(isNaN(prix2)){
    sessionStorage.setItem("prix2", 0);
  }
  if(isNaN(prix3)){
    sessionStorage.setItem("prix3", 0);
  }
  if(isNaN(prix4)){
    sessionStorage.setItem("prix4", 0);
  }
  const reset = () => {sessionStorage.clear()}

  return (
    <div className='CC'>
      <HeaderC/>
      <main>
      <div id="Arianne">
        <p><Link to="/">Accueil</Link>  &#x3e; <Link to="click-collect.html">Click & Collect</Link> &#x3e; <Link to="/nos-burgers">Choix des Burgers</Link> &#x3e; <Link to="/nos-boissons">Choix des Boissons</Link> &#x3e; <Link to="/nos-accompagnements">Choix des Accompagnements</Link> &#x3e; <Link to="/nos-desserts">Choix des Desserts</Link> &#x3e; Récapitulatif </p>
      </div>

      <div id="menu">
        <h1>Click & Collect</h1>
        <div id="userChoice">
          <div>
            <Link to="/nos-burgers">
              {burger.map((item)=>{
                  if(item._id === choix1){
                    sessionStorage.setItem("prix1", `${item.price.$numberDecimal}`);
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
                    sessionStorage.setItem("prix2", `${item.price.$numberDecimal}`);
                    return(<img id="Choix2" key={item._id} src={item.image} alt="" />)
                  }else{
                    return(<img key={item._id} alt="" style={{display: "none"}}></img>)}
                })}
            </Link>
          </div>
          <div>
            <Link to="/nos-accompagnements">
              {accompagnements.map((item)=>{
                  if(item._id === choix3){
                    sessionStorage.setItem("prix3", `${item.price.$numberDecimal}`);
                    return(<img id="Choix3" key={item._id} src={item.image} alt="" />)
                  }else{
                    return(<img key={item._id} alt="" style={{display: "none"}}></img>)}
                })}
            </Link>
          </div>
          <div>
            <Link to="/nos-desserts">
              {dessert.map((item)=>{
                  if(item._id === choix4){
                    sessionStorage.setItem("prix4", `${item.price.$numberDecimal}`);
                    return(<img id="Choix4" key={item._id} src={item.image} alt="" />)
                  }else{
                    return(<img key={item._id} alt="" style={{display: "none"}}></img>)}
                })}
            </Link>
          </div>
        </div>
        <p id="total">Total de la commande : {prix1+prix2+prix3+prix4} €</p>
        <Link to="/" onClick={reset}>Valider</Link>
      </div>
    </main>
    </div>
  );
};

export default PageRecap;