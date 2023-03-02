import React from 'react';
import "../utils/style/header.css"

const Header = () => {
  return (
    <header>
        <div id="frontHeader">
            <div id="logo"><a href="index.html"><img src="./images/Icons/Logo.svg" alt=""/></a></div>
            <div id="Navbar">
                <div id="menuBurger"><img src="./images/Icons/menuBurger.svg" alt=""/></div>
                <div>
                    <a href="click-collect.html">Click & Collect</a>
                    <a href="#">Livraison</a>
                </div>
                <nav>
                    <ul>
                        <li><a href="#Burgers">La Carte</a></li>
                        <li><a href="#Story">Titi Story</a></li>
                        <li><a href="#Resto">Le Resto</a></li>
                        <li><a href="#Actus">Actus</a></li>
                        <li><a href="">Réserver</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div id="bottomHeader"><img src="./images/header.png" alt=""/></div>
    </header>
  );
};

export default Header;