import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { NavComp } from './components/nav';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
