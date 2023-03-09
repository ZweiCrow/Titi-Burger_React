import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../utils/style/Header.scss"

const Header = () => {

    useEffect(()=>{
			const menuBurger = document.querySelector("#menuBurger")
			const menu = document.querySelector("#menuMobile")
			const closeMenu = document.querySelector("#closeMenu")

			menuBurger.addEventListener("click", () => {//click sur le menu burger
				menu.style.right = "0"
				menu.style.opacity = "1"
				menu.style.visibility = "visible"
			})

			closeMenu.addEventListener("click", () => {//click sur le menu burger
				menu.style.right = "-600px"
				menu.style.opacity = "0"
				menu.style.visibility = "hidden"
			})
    })
		
  return (
    <header>
        <div id="frontHeader">
            <div id="logo"><Link to="/"><img src="./image/Icons/Logo.svg" alt=""/></Link></div>
            <div id="Navbar">
                <div id="menuBurger"><img src="./image/Icons/menuBurger.svg" alt=""/></div>
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
        <div id="bottomHeader"><img src="./image/header.png" alt=""/></div>
        <div id="menuMobile">
            <div>
                <Link to="/click-collect">Click & Collect</Link>
                <Link to="">Livraison</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="">La Carte</Link></li>
                    <li><Link to="">Titi Story</Link></li>
                    <li><Link to="">Le Resto</Link></li>
                    <li><Link to="">Actus</Link></li>
                    <li><Link to="">Réserver</Link></li>
                    <li id="closeMenu"><img src="./image/Icons/closeMenu.svg" alt=""/></li>
                </ul>
            </nav>
        </div>
    </header>
    
  );
};

export default Header;