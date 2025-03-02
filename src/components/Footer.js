import React from 'react';
import './Footer.css'; 
import { useState, useEffect, newDate } from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { FaFacebook,FaTwitter, FaHome, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#products" className="footer-link">Products</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div> */}
        <div className="footer-social">
          <a href="https://facebook.com" className="footer-social-icon">
          <FaFacebook icon={FaFacebook} /></a>
          <a href="https://twitter.com" className="footer-social-icon">
          <FaTwitter icon={FaTwitter} /></a>
          <a href="https://instagram.com"  className="footer-social-icon">
          <FaInstagram icon={FaInstagram} /></a>

        </div>
        <div>
          <p className='all'>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;