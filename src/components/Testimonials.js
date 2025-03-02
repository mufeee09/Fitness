// import React from 'react';
// import './Testimonials.css'; // Import the new CSS file

// const Testimonials = () => {
//   return (
//     <section className="testimonials" id="testimonials">
//       <div className="container">
//         <h2 className="testi-title">What Our Clients Say</h2>
//         <div className="testi-cards">
//           <div className="testi-card">
//             <h3 className="testi-card-title">Amazing Experience</h3>
//             <p className="testi-card-desc">EliteFit has transformed my life!</p>
//             <p className="testi-card-author">- John Doe</p>
//           </div>
//           <div className="testi-card">
//             <h3 className="testi-card-title">Highly Recommend</h3>
//             <p className="testi-card-desc">The best fitness program I've ever tried.</p>
//             <p className="testi-card-author">- Jane Smith</p>
//           </div>
//           <div className="testi-card">
//             <h3 className="testi-card-title">Great Results</h3>
//             <p className="testi-card-desc">I've seen amazing results in just a few weeks.</p>
//             <p className="testi-card-author">- Mike Johnson</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// import React, { useState, useEffect } from 'react';
// import './Testimonials.css';

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonials = [
//     {
//       title: "Amazing Experience",
//       desc: "EliteFit has transformed my life!",
//       author: "John Doe"
//     },
//     {
//       title: "Highly Recommend",
//       desc: "The best fitness program I've ever tried.",
//       author: "Jane Smith"
//     },
//     {
//       title: "Great Results",
//       desc: "I've seen amazing results in just a few weeks.",
//       author: "Mike Johnson"
//     },
//     // Add more testimonials here as needed
//     {
//       title: "Incredible Support",
//       desc: "The trainers are always there to help.",
//       author: "Sarah Wilson"
//     },
//     {
//       title: "Life Changing",
//       desc: "Best decision I ever made!",
//       author: "Chris Taylor"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <section className="testimonials" id="testimonials">
//       <div className="container">
//         <h2 className="testi-title">What Our Clients Say</h2>
//         <div className="testi-carousel">
//           <div 
//             className="testi-cards"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {testimonials.map((testi, index) => (
//               <div className="testi-card" key={index}>
//                 <h3 className="testi-card-title">{testi.title}</h3>
//                 <p className="testi-card-desc">{testi.desc}</p>
//                 <p className="testi-card-author">- {testi.author}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="dots-container">
//           {testimonials.map((_, index) => (
//             <div 
//               key={index}
//               className={`dot ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css'; // Import styles

const testimonialsData = [
  { title: "Amazing Experience", desc: "EliteFit has transformed my life!", author: "John Doe" },
  { title: "Highly Recommend", desc: "The best fitness program I've ever tried.", author: "Jane Smith" },
  { title: "Great Results", desc: "I've seen amazing results in just a few weeks.", author: "Mike Johnson" },
  { title: "Life Changing", desc: "My energy levels have never been higher!", author: "Sarah Lee" },
  { title: "Best Decision", desc: "Joining this was the best decision I ever made!", author: "Chris Brown" },
  { title: "Best Decision", desc: "Joining this was the best decision I ever made!", author: "Chris Brown" },
  { title: "Best Decision", desc: "Joining this was the best decision I ever made!", author: "Chris Brown" }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="testi-title">What Our Clients Say</h2>
        
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={false}
          centeredSlides={false}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, 
            1440: { slidesPerView: 4 } 
          }}
        >
          {testimonialsData.map((testi, index) => (
            <SwiperSlide key={index} className="testi-card">
              <h3 className="testi-card-title">{testi.title}</h3>
              <p className="testi-card-desc">{testi.desc}</p>
              <p className="testi-card-author">- {testi.author}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
