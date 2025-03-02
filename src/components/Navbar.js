import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/Untitled-1.png';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
    <header className='header'>
    <nav className="nav">
    <div className="brand">
        <figure>
          <img src={logo} alt="Logo" className="logo" />
        </figure>
      </div>
        <div className="nav-links desktop">
          <Link to="/" style={{color:"black", textDecoration:"none"}} className='li'>Home</Link>
          {/* <Link to="/Plan" style={{color:"black", textDecoration:"none"}}>Plan</Link> */}
          <Link to="/About" style={{color:"black", textDecoration:"none"}}>About</Link>
          <Link to="/Imgslide" style={{color:"black", textDecoration:"none"}}>Why TestMax</Link>
          <Link to="/Contact" style={{color:"black", textDecoration:"none"}}>Contact</Link>
          <Link to="/FAQ" style={{color:"black", textDecoration:"none"}}>FAQ</Link>
        
          {/* <a href="#products" className="nav-link">Products</a>
          <a href="#contact" className="nav-link">Contact</a> */}
        </div>
        {/* <header className="header"> */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="nav-links">
            <Link to="/" style={{color:"black", textDecoration:"none"}}>Home</Link>
            {/* <Link to="/Plan" style={{color:"black", textDecoration:"none"}}>Plan</Link> */}
            <Link to="/About" style={{color:"black", textDecoration:"none"}}>About</Link>
            <Link to="/Imgslide" style={{color:"black", textDecoration:"none"}}>Why TestMax</Link>
            <Link to="/Contact" style={{color:"black", textDecoration:"none"}}>Contact</Link>
            <Link to="/FAQ" style={{color:"black", textDecoration:"none"}}>FAQ</Link>
          </div>
        </div>
        
      )}
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
</header>
);
}

export default Navbar;