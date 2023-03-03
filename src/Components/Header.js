import React from 'react';
import { Link } from 'react-router-dom';
import "../utils/style/Header.scss"

const Header = () => {
  return (
    <header>
        <div id="frontHeader">
            <div id="logo"><Link to="/"><img src="./images/Icons/Logo.svg" alt=""/></Link></div>
            <div id="Navbar">
                <div id="menuBurger"><img src="./images/Icons/menuBurger.svg" alt=""/></div>
                <div>
                    <Link to="/click-collect">Click & Collect</Link>
                    <Link to="#">Livraison</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="#Burgers">La Carte</Link></li>
                        <li><Link to="#Story">Titi Story</Link></li>
                        <li><Link to="#Resto">Le Resto</Link></li>
                        <li><Link to="#Actus">Actus</Link></li>
                        <li><Link to="">Réserver</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div id="bottomHeader"><img src="./images/header.png" alt=""/></div>
    </header>
  );
};

export default Header;