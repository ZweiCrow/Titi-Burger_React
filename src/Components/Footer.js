import React from 'react';
import { Link } from 'react-router-dom';
import "../utils/style/Footer.scss"

const Footer = () => {
  return (
    <footer>
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
                <div id="Gmaps"></div>
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
    </footer>
  );
};

export default Footer;