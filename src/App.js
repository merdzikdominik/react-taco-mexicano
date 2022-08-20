import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import StartingPage from "./components/StartingPage/StartingPage";
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<StartingPage/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
