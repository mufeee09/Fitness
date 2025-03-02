import React, { useState } from 'react';
import './FAQ.css'; // Import the new CSS file
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <Navbar></Navbar>
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(0)}>
          1. Do you focus on weight loss, muscle building, or both?

          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              We focus on both weight loss and muscle building! Whether you want to shed extra pounds, 
              gain strength, or achieve a balanced transformation, our programs are tailored to your goals
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
          2. Is this 1-on-1 coaching or group coaching?

          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
             We offer both 1-on-1 coaching and group coaching! Whether you prefer personalized attention
              or the motivation of a group setting, we have options to fit your needs.
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
          3. What kind of Tamil people abroad are you targeting?
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              We welcome all Tamil people living abroad who are looking to stay connected to their roots while 
              focusing on health and fitness. Whether you're a student, working professional, or a family looking
               for guidance, our programs are designed to fit your lifestyle.
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
         4. What makes your coaching better than others?
          </div>
          {activeIndex === 3 && (
            <div className="faq-answer">
              Our coaching stands out because we offer personalized plans tailored to your lifestyle, 
              cultural preferences, and fitness level. We focus on sustainable results, not just quick fixes, 
              and provide ongoing support to keep you motivated
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(4)}>
          5. Have you helped clients get fast results
          </div>
          {activeIndex === 4 && (
            <div className="faq-answer">
              Yes! Many of our clients have seen fast results. Some have lost up to 5-7 kg in just 4-6 weeks by
               following our personalized coaching plans, which include tailored workouts and balanced meal plans.
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(5)}>
          6. Any unique bonuses or guarantees?
          </div>
          {activeIndex === 5 && (
            <div className="faq-answer">
             Yes! We offer a unique guarantee—Lose 5kg in 30 days or get 100% of your money back! Plus,
              our clients get exclusive bonuses like personalized meal plans, Tamil-friendly workout routines,
               and 24/7 support to keep them on track.
            </div>
          )}
        </div>
        {/* Add more FAQ items as needed */}
      </div>
    </section>
    <WhatsAppButton></WhatsAppButton>
    <Footer></Footer>
    </>
  );
};

export default FAQ;