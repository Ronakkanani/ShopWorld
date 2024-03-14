import './App.css';
import Home from './componets/Home';
import { Routes, Route } from "react-router-dom"
import Productdeatiles from './componets/Productdeatiles';
import Header from './componets/Header';
import { useState } from 'react';
import Cart from './componets/Cart';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Checkout from './componets/Checkout';

function App() {

  const [search, setSearch] = useState(null);

  return (
    <div>
      <ToastContainer/>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={ search} />} />
        <Route path="/:title" element={<Home />} />
        <Route path="/detail/:id" element={<Productdeatiles />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
