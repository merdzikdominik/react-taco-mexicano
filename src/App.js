import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import StartingPage from "./components/StartingPage/StartingPage";
import OrderHomeMenu from './components/OrderHomeMenu/OrderHomeMenu';
import Cart from './components/Cart/Cart';
import StaticMenu from './components/StaticMenu/StaticMenu';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<StartingPage/>}/>
        <Route path='/menu' element={<StaticMenu/>}/>
        <Route path='/order-home' element={<OrderHomeMenu/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
