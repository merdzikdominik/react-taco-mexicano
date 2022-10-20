import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import StartingPage from "./components/StartingPage/StartingPage";
import OrderHomeMenu from './components/OrderHomeMenu/OrderHomeMenu';
import Cart from './components/Cart/Cart';
import StaticMenu from './components/StaticMenu/StaticMenu';
import Contact from './components/Contact/Contact';
import OpenHours from './components/OpenHours/OpenHours';
import Location from './components/Location/Location';
import Checkout from './components/Cart/Checkout';
import Page404 from './components/Page404/Page404';

function App() {
  const cartHasItems = useSelector(state => state.dishesReducer.dishes.length !== 0);

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='*' element={<Page404/>}/>
        <Route path='/' element={<StartingPage/>}/>
        <Route path='/koszyk' element={<Cart/>}/>
        {cartHasItems && <Route path='/koszyk/podsumowanie' element={<Checkout/>} />}
        <Route path='/menu' element={<StaticMenu/>}/>
        <Route path='/kontakt' element={<Contact/>}/>
        <Route path='/godziny-otwarcia' element={<OpenHours/>}/>
        <Route path='/lokalizacja' element={<Location/>}/>
        <Route path='/zamow-do-domu' element={<OrderHomeMenu/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
