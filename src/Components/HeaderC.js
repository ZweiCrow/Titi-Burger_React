import React from 'react';
import { Link } from 'react-router-dom';
import "../utils/style/HeaderC.scss"

const HeaderC = () => {
  return (
    <header>
        <div id="frontHeader">
            <div id="logo"><Link to="/"><img src="./image/Icons/Logo.svg" alt=""/></Link></div>
            <div id="Navbar">
                <nav>
                    <ul>
                        <li><Link to="/">La Carte</Link></li>
                        <li><Link to="/">Titi Story</Link></li>
                        <li><Link to="/">Le Resto</Link></li>
                        <li><Link to="/">Actus</Link></li>
                        <li><Link to="/">Réserver</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  );
};

export default HeaderC;