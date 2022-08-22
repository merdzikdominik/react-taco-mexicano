import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import StartingPage from "./components/StartingPage/StartingPage";
import OrderHomeMenu from './components/OrderHomeMenu/OrderHomeMenu';
import Cart from './components/Cart/Cart';
import StaticMenu from './components/StaticMenu/StaticMenu';
import Contact from './components/Contact/Contact';
import OpenHours from './components/OpenHours/OpenHours';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<StartingPage/>}/>
        <Route path='/koszyk' element={<Cart/>}/>
        <Route path='/menu' element={<StaticMenu/>}/>
        <Route path='/kontakt' element={<Contact/>}/>
        <Route path='/godziny-otwarcia' element={<OpenHours/>}/>
        <Route path='/zamow-do-domu' element={<OrderHomeMenu/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
