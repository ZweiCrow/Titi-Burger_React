import React from 'react';
import { Link } from 'react-router-dom';
import HeaderC from '../../Components/HeaderC';
// import "../../js/Recap.js"

const PageRecap = () => {
  let choix1 = sessionStorage.getItem("choix1")
let choix2 = sessionStorage.getItem("choix2")
let choix3 = sessionStorage.getItem("choix3")
let choix4 = sessionStorage.getItem("choix4")

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
          <div><Link to="/nos-burgers"><img id="Choix1" src={choix1} alt=""/></Link></div>
          <div><Link to="/nos-boissons"><img id="Choix2" src={choix2} alt=""/></Link></div>
          <div><Link to="/nos-accompagnements"><img id="Choix3" src={choix3} alt=""/></Link></div>
          <div><Link to="/nos-desserts"><img id="Choix4" src={choix4} alt=""/></Link></div>
        </div>
        <Link to="/">Valider</Link>
      </div>
    </main>
    </div>
  );
};

export default PageRecap;