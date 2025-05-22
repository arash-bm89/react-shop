import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Nav } from './components/nav';
import {CartContextProvider} from './contexts/CartContext'
import { Welcome } from './components/welcome';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <Router>
        <Nav />
        <Welcome />
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
