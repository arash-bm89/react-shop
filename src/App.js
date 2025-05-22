import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Nav } from './components/nav';
import { createContext, useState } from 'react';
import {CartContextProvider} from './contexts/CartContext'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
