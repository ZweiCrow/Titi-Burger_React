import { Route, Routes } from 'react-router-dom';
import Template from './Components/template';
import PageHome from './pages/pageHome';
import Pagecc from './pages/pageC&C';
import PageBurgers from './pages/pageBurgers';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Template/>}>
        <Route index element={<PageHome/>}/>
        <Route path='/click-collect' element={<Pagecc/>}/>
        <Route path='/nos-burgers' element={<PageBurgers/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
