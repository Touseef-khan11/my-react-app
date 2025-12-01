import React from "react";
import BannerImage from '../assets/images/banner.png'; // replace with your uploaded image


export default function HomeBanner() {
  return (
      <section
        className="home-banner py-5 position-relative d-flex align-items-center"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '90vh',
          color: '#fff',
        }}
      >
        {/* Overlay */}
        {/* <div className="overlay position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}></div> */}

        <div className="container py-4 position-relative">
          <div className="row align-items-center">

            {/* Left Side: Text + Form */}
            <div className="col-lg-6 text-white">
              <h1 className="fw-bold mb-3">
                Find qualified <span className="text-color">healthcare staff</span> for your facility
              </h1>
              <p className="text-bigger mb-4 text-white">
                Connect with background-checked  healthcare professionals and caregivers for your medical facility or care center.
              </p>

              {/* Search Form */}
              <div className="bg-white p-4  gap-3 rounded shadow-sm mb-2" style={{ maxWidth: '400px' }}>
                <label className="form-label text-black fw-bold">Find healthcare staff</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your ZIP code"
                  />
                  <button className="btn text-white btn-success">Find staff</button>
                </div>
                <small className="text-muted d-block mt-2">
                  Trusted by 500+ healthcare facilities nationwide
                </small>
              </div>

              {/* Bottom Info */}
              <div className="d-flex gap-3 mt-3">
                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-patch-check-fill text-success"></i>
                  Licensed & certified
                </div>
                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-star-fill text-warning"></i>
                  4.9/5 rating
                </div>
                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-headset text-success"></i>
                  24/7 support
                </div>
              </div>
            </div>

            {/* Right Side: Stats Boxes */}
            <div className="col-lg-6 d-none d-lg-flex  flex-wrap gap-3">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-6">
                    <div className="bg-blur  p-3 rounded shadow text-center" >
                      <h3 className="colorforheading fw-bold mb-1">500+</h3>
                      <p className="text-white mb-0">Healthcare facilities</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="bg-blur  p-3 rounded shadow text-center" >
                      <h3 className="colorforheading fw-bold mb-1">10K+</h3>
                      <p className="text-white mb-0">Healthcare staff</p>
                    </div>
                  </div>
                </div>
                <div className="row">

                  <div className="col-lg-6">
                    <div className="bg-blur p-3 rounded shadow text-center" style={{ minWidth: '120px' }}>
                      <h3 className="colorforheading fw-bold mb-1">4.9★</h3>
                      <p className="text-white mb-0">Average rating</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="bg-blur p-3 rounded shadow text-center" style={{ minWidth: '120px' }}>
                      <h3 className="colorforheading fw-bold mb-1">24/7</h3>
                      <p className="text-white mb-0">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}
