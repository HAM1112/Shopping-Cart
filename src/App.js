import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Shop from './Components/Shop';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Routes> 
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/shop' exact element={<Shop />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
