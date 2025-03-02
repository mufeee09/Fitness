import React from 'react';
import './HowItWorks.css'; // Import the new CSS file

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container" id="container">
        <div className='title'>
       <h2 className="how-it-works-title">How It Works</h2></div>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3 className="step-title">Contact Us</h3>
            <p className="step-description">Open an account for yourself.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3 className="step-title">Choose a Plan</h3>
            <p className="step-description">Select the plan that fits your needs.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3 className="step-title">Start Training</h3>
            <p className="step-description">Begin your fitness journey with us.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;