import React from "react";
import "./navbar.css";
import Carrito from "./NavComps/Carrito";
import { Mainlg } from "./NavComps/Mainlg";



function Navbar(){
  return (
    <header>
      <nav className="main-nav">
        <Mainlg></Mainlg>
        <ul className="nav-list">
          <li><a href="https://cdn.shopify.com/" className="list-product">Home</a></li>
          <li><a href="https://cdn.shopify.com/" className="list-product">Products</a></li>
          <li><a href="https://cdn.shopify.com/" className="list-product">About us</a></li>
        </ul>
        <Carrito></Carrito>
      </nav>
    </header>
  );
};

export default Navbar;