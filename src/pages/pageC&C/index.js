import React from 'react';
import HeaderC from '../../Components/HeaderC';
import { Link } from 'react-router-dom';
import "../../utils/style/CC.scss"

const Pagecc = () => {
  return (
    <>
    <div className='CC'>
    <HeaderC/>
    <main>
      <div id="Arianne">
        <p><Link to="/">Accueil</Link> &#x3e; Click & Collect</p>
      </div>

      <div id="menu">
        <h1>Click & Collect</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita quis quos dolorem explicabo libero. Quasi magnam hic magni, voluptatem dolorem at eos sit atque soluta ab. Rem, iusto porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptates dolorem suscipit cupiditate eum? Tenetur recusandae, dicta reprehenderit laboriosam optio praesentium doloremque eius blanditiis harum totam necessitatibus, porro nobis cumque!</p>
        <Link to="/nos-burgers">Commander</Link>
      </div>
    </main>
    </div>
    </>
  );
};

export default Pagecc;