import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
        <div id="menuMobile">
            <div>
                <Link to="click-collect.html">Click & Collect</Link>
                <Link to="">Livraison</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="">La Carte</Link></li>
                    <li><Link to="">Titi Story</Link></li>
                    <li><Link to="">Le Resto</Link></li>
                    <li><Link to="">Actus</Link></li>
                    <li><Link to="">Réserver</Link></li>
                    <li id="closeMenu"><img src="./images/Icons/closeMenu.svg" alt=""/></li>
                </ul>
            </nav>
        </div>
        <section id="Presentation">
            <div id="Resto">
                <h2>Le Resto</h2>
                <img src="./images/open.png" alt=""/>
            </div>
            <div id="Story">
                <h2>Titi Story</h2>
                <h3>Une équipe authentique</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid deleniti aliquam quia, blanditiis quaerat iste doloribus reprehenderit eligendi a maiores dolores labore laboriosam at velit nulla, laborum autem. Provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis, iure cumque odio harum laudantium eum. Unde, totam culpa! Libero exercitationem quibusdam temporibus delectus fuga id quam amet a quaerat?</p>
                <Link to="">Lire la suite ...</Link>
            </div>
        </section>
        <section id="Burgers">
            <div id="NosBurger">
                <h2>Nos Burgers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint, minima corrupti molestias labore repudiandae eum itaque necessitatibus ea. Laboriosam tempore explicabo tenetur illo inventore laborum, ad non odit saepe.</p>
            </div>
            <ul class="Carousel">
                <li><img src="./images/Darko.png" alt=""/></li>
                <li><img src="./images/Original.png" alt=""/></li>
                <li><img src="./images/Tropica.png" alt=""/></li>
                <li><img src="./images/Darko.png" alt=""/></li>
                <li><img src="./images/Original.png" alt=""/></li>
                <li><img src="./images/Tropica.png" alt=""/></li>
            </ul>
        </section>
        <section id="Actus">
            <div><h2>Actus</h2></div>
            <ul>
                <li>
                    <h3>Article 1</h3>
                    <img src="./images/Affiche1.png" alt=""/>
                    <Link to="">En Savoir +</Link>
                </li>
                <li>
                    <h3>Article 1</h3>
                    <img src="./images/Limonade.png" alt=""/>
                    <Link to="">En Savoir +</Link>
                </li>
                <li>
                    <h3>Article 1</h3>
                    <img src="./images/Tiramisu.png" alt=""/>
                    <Link to="">En Savoir +</Link>
                </li>
            </ul>
        </section>
        <section id="Newsletter">
            <h2 style="display: none;">Newsletter</h2>
            <div>
                <p>Des offres et des actus <br/> Chaques semaines sur Titi Burger</p>
            </div>
            <div id="newsForm">
                <p>Inscription à la Newsletter</p>
                <form>
                    <label for="email"> c'est par ici &#10233;</label>
                    <input type="email" name="email" id="email"/>
                </form>
            </div>
        </section>
    </main>
  );
};

export default Home;