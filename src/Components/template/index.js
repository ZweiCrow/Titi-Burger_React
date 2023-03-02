import React from 'react';
import {Link, Outlet} from "react-router-dom"
import "../../utils/style/TitiBurger.scss"
const Template = () => {
  return (
    <>
    <header>
        <div id="frontHeader">
            <div id="logo"><Link href="index.html"><img src="./images/Icons/Logo.svg" alt=""/></Link></div>
            <div id="Navbar">
                <div id="menuBurger"><img src="./images/Icons/menuBurger.svg" alt=""/></div>
                <div>
                    <Link href="click-collect.html">Click & Collect</Link>
                    <Link href="#">Livraison</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link href="#Burgers">La Carte</Link></li>
                        <li><Link href="#Story">Titi Story</Link></li>
                        <li><Link href="#Resto">Le Resto</Link></li>
                        <li><Link href="#Actus">Actus</Link></li>
                        <li><Link href="">Réserver</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div id="bottomHeader"><img src="./images/header.png" alt=""/></div>
    </header>
    <section>
      <Outlet/>
    </section>
    <footer>
        <ul>
            <li>
                <p>Mentions Légales</p>
                <Link href="index.html">CGU</Link>
                <Link href="index.html">CGV</Link>
            </li>
            <li>
                <p>Plan du site</p>
                <Link href="index.html">La Carte</Link>
                <Link href="index.html">Titi Story</Link>
                <Link href="index.html">Le Resto</Link>
                <Link href="index.html">Actus</Link>
            </li>
            <li id="map">
                <p>Où nous touver ?</p>
                <div id="Gmaps"></div>
            </li>
            <li>
                <p>Contacts</p>
                <Link href="index.html">FAQ</Link>
            </li>
            <li id="socials">
                <Link href="index.html"><img src="./images/Icons/Instagram.svg" alt=""/></Link>
                <Link href="index.html"><img src="./images/Icons/Facebook.svg" alt=""/></Link>
            </li>
        </ul>
    </footer>
    </>
  );
};

export default Template;