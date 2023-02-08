import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import './App.css';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Item from './Components/Item';
import Nav from './Components/Nav';
import Shop from './Components/Shop';

function App() {
  const [CartItems, setCartItems] = useState('');
  
  useEffect(() => {
    console.log(CartItems);
  }, [CartItems]);

  const getItems = (newItem) =>{
    if(CartItems === ''){
      setCartItems([newItem])
    }else{
      setCartItems([...CartItems, newItem])
    }
  }
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Routes> 
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/shop' exact element={<Shop passData={getItems} />} />
          <Route path='/shop/:id' exact element={<Item passData={getItems}/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
