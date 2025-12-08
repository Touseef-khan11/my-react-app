import React from "react";
import CareFilters from "../components/CareFilters";
import FaqsSection from "../components/FaqsSection";




export default function FindCare() {
  return (
    <>
      {/* find care search */}
      <section className="care-search-section text-center  p-3 py-5">
        {/* Title */}
        <h2 className="care-title fw-bold">Find local caregivers nearby</h2>
        {/* Subtitle */}
        <p className="care-subtitle">
          Browse our comprehensive range of care services, all with background-checked
          professionals ready to help your family thrive.
        </p>

        {/* Search bar */}
        <div className="d-flex justify-content-center mt-4">
          <div className="input-group care-search-input">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-geo-alt"></i> {/* Bootstrap icon for location */}
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search for..."
            />
            <button className="btn findcarebtn">Search</button>
          </div>
        </div>
      </section>

      <CareFilters />

      <FaqsSection />



      {/* ready to join */}


      <div className="Readytojoin d-flex justify-content-center align-items-center text-center text-white">
        <div className="container content-box p-5">
          <div className="row d-flex text-center justify-content-center">
            <h1 className="section-title mb-3">Ready to Join Our Community?</h1>
            <p className="section-subtitle tex-width mb-5">
              Become part of a supportive network of healthcare professionals dedicated to
              excellence in patient care
            </p>
          </div>

          <div className="row stats-row">
            <div className="col d-flex gap-3 justify-content-center">
              <a href="#" className="btn joinourteambtn ">Join Our Team</a>
              <a href="#" className="btn learnmorebtn ">Learn More</a>
            </div>
          </div>


        </div>
      </div>



    </>
  );
}
