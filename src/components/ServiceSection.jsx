import React from "react";


import img1 from "../assets/images/daycare1.png";
import img2 from "../assets/images/camps.png";
import img3 from "../assets/images/infant.png";
import img4 from "../assets/images/cleaner.png";
import img5 from "../assets/images/seniorcare.png";
import img6 from "../assets/images/tutor.png";

// Duplicate for second row
const secondRowImages = [img6, img5, img4, img3, img2, img1];

export default function ServiceSection() {
  const categories = [
    { title: "daycares", img: img1 },
    { title: "activities & camps", img: img2 },
    { title: "infant care", img: img3 },
    { title: "last minute cleaners", img: img4 },
    { title: "senior companions", img: img5 },
    { title: "math tutors", img: img6 },
  ];

  return (
    <section className="container py-4">
      {/* Row 1 */}
      <div className="row g-3 justify-content-center mb-2">
        {categories.map((item, index) => (
          <div key={index} className="col-md-2 col-sm-4 col-6">
            <div className="category-card" style={{ backgroundImage: `url(${item.img})` }}>
              <div className="overlay"></div>
              <p className="category-text">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 (mirrored images) */}
      <div className="row g-3 justify-content-center">
        {secondRowImages.map((img, index) => (
          <div key={index} className="col-md-2 col-sm-4 col-6">
            <div className="category-card" style={{ backgroundImage: `url(${img})` }}>
              <div className="overlay"></div>
              <p className="category-text">
                {categories[index].title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
