import React from 'react';
import './Hero.css';
import backgroundImage from '../images/pexels-823sl-2294361.jpg';
import Navbar from './Navbar';
// import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import HowItWorks from './HowItWorks';
import About from './About';
import Imgslide from './Imgslide';
import Whytestmax from './Whytestmax';
import Imggrid from './Imggrid';
import Plans from './Plans';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '5rem 1rem',
    position: 'relative'
  };

  return (
    <>
    <Navbar ></Navbar>
    <section style={heroStyle} className="hero">
      <div className='over'>
      <h1 className="hero-title">Welcome to TestMax—where transformation begins.</h1>
      <p className="hero-subtitle">Be consistent. Be disciplined. Be a man.</p>
      <p className="hero-subtitle">Achieve your fitness goals with us</p>
      </div>
      {/* <button className="hero-button">Get Started</button> */}
    </section>
    <WhatsAppButton></WhatsAppButton>
    <HowItWorks></HowItWorks>
    <Plans></Plans>
    {/* <Whytestmax></Whytestmax> */}
    {/* <Imgslide></Imgslide> */}
    {/* <About></About> */}
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  );
};

export default Hero;


