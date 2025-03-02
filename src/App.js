// import React from 'lucide-react';
// import { UserCircle2, Home, Info, ShoppingBag, Phone, MessageCircle } from 'lucide-react';
// // import Header from './components/Header';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import HowItWorks from './components/HowItWorks';
// import Plans from './components/Plans';
// import Products from './components/Products';
// import FAQ from './components/FAQ';
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import WhatsAppButton from './components/WhatsAppButton';

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />
//       <main>
//         <Hero />
//         <HowItWorks />
//         <Plans />
//         <Products />
//         <FAQ />
//         <Contact />
//         <Testimonials />
//       </main>
//       <Footer />
//       <WhatsAppButton />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { UserCircle2, Home, Info, ShoppingBag, Phone, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css'; 
import Navbar from './components/Navbar';
import Imgslide from './components/Imgslide';
import About from './components/About';
import Whytestmax from './components/Whytestmax';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
  
 <Router>
  <Routes>
    <Route path='/' element={<Hero />} ></Route>
    {/* <Route path='/Plan' element={<Plans />} ></Route> */}
    <Route path='/About' element={<About />} ></Route>
    <Route path='/Imgslide' element={<Imgslide />} ></Route>
    <Route path='/Contact' element={<Contact />} ></Route>
    <Route path='/FAQ' element={<FAQ />} ></Route>
  </Routes>
 </Router>
 </>
  );
}
export default App;