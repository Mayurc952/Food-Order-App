import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from "../Componant/Imgs/logo.png"

const Navbar = () => {

  const thali=useSelector(state=>state.counter.thali)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
        <img style={{width:"3%",height:"3%"}} src = {logo} alt = "logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              
            </ul>
             <span className="navbar-text"><Link className="nav-link" to="/cart">
            <i class="fa-solid fa-cart-arrow-down fa-2xl" ></i>
             </Link>
             
            </span>
            <sup style={{color:'black', marginLeft:"-15px", marginTop:"-18px"}}>{thali.length}</sup>
          </div>
        </div> 
      </nav>

      <Outlet />
    </>
  ); 
};

export default Navbar;
