import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div><Link className="nav-link" to="/home">Home</Link></div>
      <div><Link className="nav-link" to="/men">Men</Link></div>
      <div><Link className="nav-link" to="/women">Women</Link></div>
      <div><Link className="nav-link" to="/kids">Kids</Link></div>
      <div><Link className="nav-link" to="/living">Home & Living</Link></div>
      <div><Link className="nav-link" to="/beauty">Beauty</Link></div>
      <div><Link className="nav-link" to="/studio">Studio</Link></div>

 
      <div><Link className="nav-link" to="/register">Register</Link></div>
      <div><Link className="nav-link" to="/signin">Sign In</Link></div>
    </nav>
  );
}
