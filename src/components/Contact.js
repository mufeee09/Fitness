import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import './Contact.css'; // Import the new CSS file
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <>
      <Navbar />
    <section className="contact-section" id="contact">
   
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        
        <div className="contact-grid">
          <div>
            <h3 className="contact-subtitle">Get in Touch</h3>
            <p className="contact-description">
              Have questions about our programs or products? We're here to help you
              achieve your fitness goals.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" size={24} color='black'/>
                <span>+91 00000 00000</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" size={24} color='black'/>
                <span>contact@testmax.com</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-input" required />
            </div>
            
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-input" required />
            </div>
            
            <div>
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" id="phone" className="form-input" required />
            </div>
            
            <div>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" rows={4} className="form-input" required></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              {/* <Send size={20} className="button-icon" /> */}
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    <WhatsAppButton></WhatsAppButton>
    <Footer></Footer>
    </>
  );
};

export default Contact;