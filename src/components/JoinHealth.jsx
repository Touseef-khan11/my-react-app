import React, { useState } from "react";
// import "./JoinHealthcareForm.css";

export default function JoinHealthcareForm() {
  const [messageCount, setMessageCount] = useState(0);

  return (
    <section className="formsec">
      <div className="container py-5">

        {/* Section Heading */}
        <div className="findtheperfectsec d-flex flex-column align-items-center ">
          <h1 className="fw-bold">Join Our Healthcare Team</h1>
          {/* <p className="text-muted">
            Submit your application with a 1-minute video introduction and resume.
            We're looking for dedicated healthcare professionals to join our network.
          </p> */}
          <p className="tex-width text-muted text-center mb-5">
            Submit your application with a 1-minute video introduction and resume.
            We're looking for dedicated healthcare professionals to join our network.
          </p>
        </div>

        {/* Form Card */}
        <div className="form-card shadow-lg p-4 rounded-4 mx-auto">

          <form>
            <div className="row g-3">

              {/* First & Last Name */}
              <div className="col-md-6">
                <label className="form-label">First Name *</label>
                <input className="form-control custom-input" type="text" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Last Name *</label>
                <input className="form-control custom-input" type="text" />
              </div>

              {/* Email & Phone */}
              <div className="col-md-6">
                <label className="form-label">Email Address *</label>
                <input className="form-control custom-input" type="email" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone Number *</label>
                <input className="form-control custom-input" type="text" />
              </div>

              {/* Dropdowns */}
              <div className="col-md-6">
                <label className="form-label">Position Interested In *</label>
                <select className="form-select custom-input">
                  <option>Select a position</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Years of Experience *</label>
                <select className="form-select custom-input">
                  <option>Select experience</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Availability *</label>
                <select className="form-select custom-input">
                  <option>Select availability</option>
                </select>
              </div>

              {/* File Uploads */}
              <div className="col-md-6">
                <label className="form-label">Video Introduction (1 minute max) *</label>
                <input className="form-control custom-input" type="file" />
                <small className="text-muted">
                  Upload a 1-minute video introducing yourself (Max: 100MB)
                </small>
              </div>

              <div className="col-md-6">
                <label className="form-label">Resume/CV *</label>
                <input className="form-control custom-input" type="file" />
                <small className="text-muted">
                  Upload your resume (PDF or Word, Max: 10MB)
                </small>
              </div>

              {/* Additional Message */}
              <div className="col-12">
                <label className="form-label">Additional Message (Optional)</label>
                <textarea
                  className="form-control custom-textarea"
                  rows="4"
                  maxLength="500"
                  onChange={(e) => setMessageCount(e.target.value.length)}
                  placeholder="Tell us why you'd like to join our team..."
                ></textarea>

                <div className="text-end text-muted small">
                  {messageCount}/500 characters
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12 text-center mt-3">
                <button className="btn text-white servicebtn px-5 py-2 rounded-pill fw-semibold submit-btn">
                  Submit Application
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
