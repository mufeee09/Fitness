

import React, { useState } from 'react';
import { UserCircle2, Home, Info, ShoppingBag, Phone, Menu, X } from 'lucide-react';
import './Header.css'; // Import the new CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <header className="header">
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
        
      )}
    </header>
    </>
  );
};

export default Header;