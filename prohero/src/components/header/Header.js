import React from 'react'
import logo from '../../images/Logo.svg';
import  './header.css'
export const Header = () => {
  return (
    <nav className="nav-bg ">
        <img src={logo} alt="" />
        <div className="nav-link"> 
            <a href="">Shop</a>
            <a href="">Orders</a>
            <a href="">Inventory</a>
            <a href="">Manage Summary</a>
        </div>
    </nav>
  )
}
