import { Route, Routes } from 'react-router-dom';
import Template from './Components/template';
import Home from './pages/pageHome';
import "./utils/style/TitiBurger.scss"

function App() {
  return (
    <>
    <Routes>
      <Route path="*" element={<Template/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
