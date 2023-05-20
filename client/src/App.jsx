import React from "react";
import Productlist from "./pages/Productlist";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Landingpage from "./pages/Landingpage";
import Products from "./components/Products/Products";

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

const App = () => {
  const user = true
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Landingpage />}/>
      <Route path="/products/:category" element={<Productlist />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/cart" element={<Cart />}/>
      
      // Redux for Login Process

      <Route path="/register" element={user ? (<Navigate to="/" />) : (<Register />)}/>
      <Route path="/login" element={user ? (<Navigate to="/" />) : (<Login />)}/>

    </Routes>
  </Router>
  )   
};

export default App;
