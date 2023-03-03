import React from 'react';
import { Link } from 'react-router-dom';
import HeaderC from '../../Components/HeaderC';
import "../../utils/style/Choix.scss"

const PageBurgers = () => {
  return (
    <div className='choix'>
      <HeaderC/>
      <main>
      <div id="Arianne">
        <p><Link to="index.html">Accueil</Link>  &#x3e; <Link to="click-collect.html">Click & Collect</Link> &#x3e; Choix des Burgers </p>
      </div>

      <div id="menu">
        <div id="up">
          <h1>Choix des Burgers</h1>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div id="down">
            <form action="">
                <ul id="api">
                    <li>
                        <input type="radio" name="choix" id="123456789"/>
                        <label for="123456789">
                            <div class="image">
                                <img src="assets/images/Choix/CDarko.png" alt=""/>
                            </div>
                            <div class="desc">
                                <h3>Darko</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quaerat reprehenderit provident, at velit corporis ea excepturi fuga ipsam, voluptates ex distinctio aliquid sit mollitia itaque assumenda enim, quibusdam blanditiis.</p>
                            </div>
                            <div class="prix"><p>14.95 $</p></div>
                        </label>
                    </li>
                </ul>
                <div><Link to="nos-boissons.html">Suivant</Link></div>
                
            </form>
        </div>
        
      </div>
    </main>
    </div>
  );
};

export default PageBurgers;