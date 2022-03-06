import React from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componant/Home";
import Menu from "./Componant/Menu";
import About from "./Componant/About";
import Navbar from "./Componant/Navbar";
import "./App.css"
import Cart from "./Componant/Cart";
import Footer from "./Componant/Footer";

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
    <Routes>
     
      <Route path="/home" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />

  </BrowserRouter>)
     
}

