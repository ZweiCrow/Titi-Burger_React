import React from 'react';
import { Link } from 'react-router-dom';
import HeaderC from '../../Components/HeaderC';
import "../../utils/style/Choix.scss"

const PageAccomp = () => {
  return (
    <div className='choix'>
      <HeaderC/>
      <main>
      <div id="Arianne">
        <p><Link to="/">Accueil</Link>  &#x3e; <Link to="/click-collect">Click & Collect</Link> &#x3e; <Link to="/nos-burgers">Choix des Burgers</Link> &#x3e; <Link to="/nos-boissons">Choix des Boissons</Link> &#x3e; Choix des Accompagnements</p>
      </div>

      <div id="menu">
        <div id="up">
          <h1>Choix des Accompagnements</h1>
          <div id="userChoice">
            <div><Link to="/nos-burgers"><img id="Choix1" src="./images/Darko.png" alt=""/></Link></div>
            <div><Link to="/nos-boissons"><img id="Choix2" src="./images/Limonade.png" alt=""/></Link></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div id="down">
            <form>
                <ul id="api">
                    <li>
                        <input type="radio" name="choix" id="123456789"/>
                        <label for="123456789">
                            <div class="image">
                                <img src="./images/Choix/CFS.png" alt=""/>
                            </div>
                            <div class="desc">
                                <h3>Frites sel</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quaerat reprehenderit provident, at velit corporis ea excepturi fuga ipsam, voluptates ex distinctio aliquid sit mollitia itaque assumenda enim, quibusdam blanditiis.</p>
                            </div>
                            <div class="prix"><p>14.95 $</p></div>
                        </label>
                    </li>
                </ul>
                <div><Link to="/nos-desserts">Suivant</Link></div>
                
            </form>
        </div>
        
      </div>
    </main>
    </div>
  );
};

export default PageAccomp;