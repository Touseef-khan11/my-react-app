import React from "react";


import img1 from "../assets/images/family1.png";
import img2 from "../assets/images/dog.png";
import img3 from "../assets/images/momandkid.png";
// import img4 from "../assets/images/backgroundforapp.png";


export default function ServiceInfo() {
  return (
    <section className="container py-5 service-section">
      <div className="row align-items-center">

        {/* LEFT SIDE CONTENT */}
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold mb-4">Find care on your terms</h2>

          {/* Feature Item */}
          <div className="d-flex mb-4  align-items-start feature-item">
            <div className="icon-box bg-success-subtle">
              <i className="bi bi-file-earmark-text"></i>
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Post a job</h6>
              <p className="text-muted small">
                Tell us exactly what you need, and let caregivers apply directly.
              </p>
            </div>
          </div>

          <div className="d-flex mb-4 align-items-start feature-item">
            <div className="icon-box bg-success-subtle">
              <i className="bi bi-search"></i>
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Compare profiles</h6>
              <p className="text-muted small">
                From experience and trainings to location and pay.
              </p>
            </div>
          </div>

          <div className="d-flex mb-4 align-items-start feature-item">
            <div className="icon-box bg-success-subtle">
              <i className="bi bi-star"></i>
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Read reviews</h6>
              <p className="text-muted small">
                No need to ask around, see what others have said.
              </p>
            </div>
          </div>

          <button className="btn servicebtn text-white px-4 py-2 rounded-pill">
            Get started
          </button>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="col-md-6">
          <div className="right-grid">

            <img src={img1} className="grid-img large-img" alt="family" />
            <img src={img2} className="grid-img small-img" alt="dog" />
            <img src={img3} className="grid-img large-img" alt="mom and child" />
            {/* <img src={img4} className="grid-img large-img" alt="mom and child" /> */}


            <div className="mobile-app-card">
              <h6 className="fw-bold text-white ">Mobile App</h6>
              <p className="text-white small mb-0">
                Find care on the go with our mobile app
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
