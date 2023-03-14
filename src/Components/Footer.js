import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../utils/style/Footer.scss"
import Map from './Map';

const Footer = () => {
  // useEffect(()=>{
  //   const map = document.querySelector('[aria-label="Map"]')
  //   map.style.zIndex = "9999999";
  // })
  
  return (
    <footer>
        <div>
            <ul>
                <li>
                    <p>Mentions Légales</p>
                    <Link to="/">CGU</Link>
                    <Link to="/">CGV</Link>
                </li>
                <li>
                    <p>Plan du site</p>
                    <Link to="/">La Carte</Link>
                    <Link to="/">Titi Story</Link>
                    <Link to="/">Le Resto</Link>
                    <Link to="/">Actus</Link>
                </li>
                <li id="map">
                    <p>Où nous touver ?</p>
                    <div><Map/></div>
                </li>
                <li>
                    <p>Contacts</p>
                    <Link to="/">FAQ</Link>
                </li>
                <li id="socials">
                    <Link to="/"><img src="./image/Icons/Instagram.svg" alt=""/></Link>
                    <Link to="/"><img src="./image/Icons/Facebook.svg" alt=""/></Link>
                </li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;