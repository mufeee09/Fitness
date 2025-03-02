import React from "react";
import "./Imggrid.css"; // Import the CSS file

const images = [
  { src: "/images/arun_page-0001.jpg", alt: "Workout 1" },
  { src: "/images/gjv_page-0001.jpg", alt: "Yoga Pose" },
  { src: "/images/IMG-20250226-WA0015.jpg", alt: "Weight Lifting" },
  { src: "/images/IMG-20250226-WA0016.jpg", alt: "Healthy Food" },
  { src: "/images/IMG-20250226-WA0017.jpg", alt: "Flexibility Training" },
  { src: "/images/IMG-20250226-WA0020.jpg", alt: "Personal Trainer" }
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <div key={index} className="grid-item">
          <img src={img.src} alt={img.alt} className="grid-image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
