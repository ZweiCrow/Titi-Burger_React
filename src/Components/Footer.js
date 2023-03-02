import React from 'react';
import "../utils/style/footer.css"

const Footer = () => {
  return (
    <footer>
        <ul>
            <li>
                <p>Mentions Légales</p>
                <a href="index.html">CGU</a>
                <a href="index.html">CGV</a>
            </li>
            <li>
                <p>Plan du site</p>
                <a href="index.html">La Carte</a>
                <a href="index.html">Titi Story</a>
                <a href="index.html">Le Resto</a>
                <a href="index.html">Actus</a>
            </li>
            <li id="map">
                <p>Où nous touver ?</p>
                <div id="Gmaps"></div>
            </li>
            <li>
                <p>Contacts</p>
                <a href="index.html">FAQ</a>
            </li>
            <li id="socials">
                <a href="index.html"><img src="./images/Icons/Instagram.svg" alt=""/></a>
                <a href="index.html"><img src="./images/Icons/Facebook.svg" alt=""/></a>
            </li>
        </ul>
    </footer>
  );
};

export default Footer;