import React from "react";
import FamilyImg from "../assets/images/safetyimgtwo.png";

// IMPORT YOUR FEATURE IMAGES
import CheckImg from "../assets/images/checks.png";
import IndentityImg from "../assets/images/indentification.png";   // add your image
import RatingImg from "../assets/images/rating.png";       // add your image
import SupportImg from "../assets/images/support.png"; // add your image

export default function SafetySection() {
  const features = [
    {
      title: "Background checks",
      description: "Comprehensive criminal background checks on all caregivers",
      img: CheckImg,
    },
    {
      title: "Identity verification",
      description: "Government ID verification for every caregiver profile",
      img: IndentityImg,
    },
    {
      title: "Reviews & ratings",
      description: "Real reviews from families in your community",
      img: RatingImg,
    },
    {
      title: "24/7 support",
      description: "Round-the-clock customer support when you need it",
      img: SupportImg,
    },
  ];

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        {/* LEFT COLUMN */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <span className="badge safetybadge mb-2">Safety First</span>

          <h2 className="fw-bold mb-3">
            Your family's safety is our top priority
          </h2>

          <p className="text-muted mb-4">
            We go above and beyond to ensure every caregiver on our platform
            meets the highest safety standards, giving you complete peace of mind.
          </p>

          {/* FEATURES LIST */}
          <div className="mb-4">
            {features.map((f, i) => (
              <div key={i} className="d-flex align-items-start mb-3">
                <img
                  src={f.img}
                  alt={f.title}
                  className="me-3"
                  style={{ width: "34px", height: "34px", objectFit: "contain" }}
                />
                <div>
                  <h6 className="fw-bold mb-1">{f.title}</h6>
                  <p className="mb-0 text-muted">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn servicebtn text-white rounded-pill px-4 py-2 fw-semibold">
            Learn about our safety measures
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-6 position-relative">
          <img
            src={FamilyImg}
            alt="Family"
            className="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
  );
}
