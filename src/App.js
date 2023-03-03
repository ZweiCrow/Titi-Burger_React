import { Route, Routes } from 'react-router-dom';
import Template from './Components/template';
import PageHome from './pages/pageHome';
import Pagecc from './pages/pageC&C';
import PageBurgers from './pages/pageBurgers';
import PageBoissons from './pages/pageBoissons';
import PageAccomp from './pages/pageAccomp';
import PageDesserts from './pages/pageDesserts';
import PageRecap from './pages/pageRecap';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Template/>}>
        <Route index element={<PageHome/>}/>
        <Route path='/click-collect' element={<Pagecc/>}/>
        <Route path='/nos-burgers' element={<PageBurgers/>}/>
        <Route path='/nos-boissons' element={<PageBoissons/>}/>
        <Route path='/nos-accompagnements' element={<PageAccomp/>}/>
        <Route path='/nos-desserts' element={<PageDesserts/>}/>
        <Route path='/recapitulatif' element={<PageRecap/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
