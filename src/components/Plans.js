import React from 'react';
import './Plans.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';

const Plans = () => {
  const handlePlanClick = (plan) => {
    alert(`You selected the ${plan}!`);
  };

  return (
    <>
      {/* <Navbar /> */}
      <section className="plans"  id="container">
        <div className="container" >
          <h2 className="plans-title">Our Plans</h2>
          <div className="premium-container">
      <motion.div
        className="premium-text"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 18, ease:"linear" }}
      >
        Customized workout plans  •  Customized diet plans • Customizable • Personal coach for addressing doubts and ensuring accountability
      </motion.div>
    </div>
          <div className="plan-cards">
            
            <div className="plan-card">
              <div className="blur"></div>
              <h3 className="plan-card-title">3 Months</h3>
              <p className="plan-card-price">₹1999.99</p>
              <p className="plan-card-description">Access to basic features and workouts.</p>
              <button className="plan-card-button" onClick={() => handlePlanClick("Basic Plan")}>
                Choose Plan
              </button>
            </div>

            <div className="plan-card">
              <div className="blur"></div>
              <h3 className="plan-card-title">6 Months</h3>
              <p className="plan-card-price">₹2999.99</p>
              <p className="plan-card-description">Access to all features and standard workouts.</p>
              <button className="plan-card-button" onClick={() => handlePlanClick("Standard Plan")}>
                Choose Plan
              </button>
            </div>

            <div className="plan-card">
              <div className="blur"></div>
              <h3 className="plan-card-title">1 Year</h3>
              <p className="plan-card-price">₹4999.99</p>
              <p className="plan-card-description">Access to all features and premium workouts.</p>
              <button className="plan-card-button" onClick={() => handlePlanClick("Premium Plan")}>
                Choose Plan
              </button>
            </div>

          </div>
        </div>
      </section>
      {/* <WhatsAppButton /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Plans;
