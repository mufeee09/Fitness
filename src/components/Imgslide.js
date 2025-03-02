// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './Imgslide.css'; 
// import { useState,useEffect} from 'react';
// import { motion } from 'framer-motion';

// const images = [
//   { src: "/images/IMG-20250226-WA0015.jpg", alt: "Image 1" },
//   { src: "/images/IMG-20250226-WA0016.jpg", alt: "Image 2" },
//   { src: "/images/IMG-20250226-WA0017.jpg", alt: "Image 3" },
//   { src: "/images/IMG-20250226-WA0018.jpg", alt: "Image 4" },
//   { src: "/images/IMG-20250226-WA0019.jpg", alt: "Image 4" },
//   { src: "/images/IMG-20250226-WA0020.jpg", alt: "Image 4" },
//   { src: "/images/0 days 63 kg’s4.png_page-0001.jpg", alt: "Image 4" },
//   { src: "/images/arun_page-0001.jpg", alt: "Image 4" },
//   { src: "/images/gjv_page-0001.jpg", alt: "Image 4" },
//   { src: "/images/month_page-0001.jpg", alt: "Image 4" },
// ];

// const ImageSlider = () => {
//   const texts = ["Lose Fat",  "Feel Confident","Build Muscle", "Get Stronger","Transform Your Body"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="image-slider">
//       <div className="container" id="container">
//         <h2 className="slider-title"></h2>
//         <div style={styles.container}>
//       <motion.h1
//         key={index}
//         initial={{ scale: 0.5, opacity: 0 }}
//         animate={{ scale: 0.5, opacity: 1 }}
//         exit={{ scale: 2, opacity: 0 }}
//         transition={{ duration: 1 }}
//         style={styles.text}
//       >
//         {texts[index]}
//       </motion.h1>
//     </div>

//         <Swiper
//           modules={[Autoplay, Pagination, Navigation]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={false}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           breakpoints={{
//             480: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1440: { slidesPerView: 4 }
//           }}
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index} className="image-card">
//               <div className="image-wrapper">
//                 <img src={img.src} alt={img.alt} className="slider-image" />
//               </div>
//               {/* <div className="image-over">
//                   <p className="image-overt">Image {index + 1}</p>
//                 </div> */}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "30px",
//     backgroundcolor: "black",
//   },
//   text: {
//     fontSize: "48px",
//     fontWeight: "bold",
//     color: "black",
//     textTransform: "uppercase",
//   },
// };
// export default ImageSlider;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Imgslide.css"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import Whytestmax from "./Whytestmax";

const images = [
  { src: "/images/IMG-20250226-WA0015.jpg", alt: "Image 1" },
  { src: "/images/IMG-20250226-WA0016.jpg", alt: "Image 2" },
  { src: "/images/IMG-20250226-WA0017.jpg", alt: "Image 3" },
  { src: "/images/IMG-20250226-WA0018.jpg", alt: "Image 4" },
  { src: "/images/IMG-20250226-WA0019.jpg", alt: "Image 5" },
  { src: "/images/IMG-20250226-WA0020.jpg", alt: "Image 6" },
];

const texts = ["Lose Fat", "Feel Confident", "Build Muscle", "Get Stronger", "Transform Your Body"];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <Whytestmax></Whytestmax>
    <section className="image-slider" id="cont">
      <div className="container">
        <motion.h1
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1 }}
          className="slider-text"
        >
          {texts[index]}
        </motion.h1>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
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
          {images.map((img, index) => (
            <SwiperSlide key={index} className="image-card">
              <div className="image-wrapper">
                <img src={img.src} alt={img.alt} className="slider-image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default ImageSlider;
