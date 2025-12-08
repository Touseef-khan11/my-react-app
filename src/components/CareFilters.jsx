import React from "react";
import SarahImg from "../assets/images/findcarepage/sarahfindcare.png";
import JamesImg from "../assets/images/findcarepage/jamesl.png";
import EmilyImg from "../assets/images/findcarepage/emilyfindcare.png";





export default function CareFilters() {

  const CareFilters = [
    {
      name: "Sarah M.",
      photo: SarahImg,
      location: "Brooklyn, NY",
      rate: 22,
      description: "I am a very energetic, responsible, and caring nanny with over 5 years of experience.",
      tags: ["CPR Certified", "Non-smoker", "Has car"]
    },
    {
      name: "James L.",
      photo: JamesImg,
      location: "Manhattan, NY",
      rate: 28,
      description: "Compassionate caregiver with a background in nursing assistance.",
      tags: ["Certified Nursing Assistant", "Dementia Care", "First Aid"]
    },
    {
      name: "Emily R.",
      photo: EmilyImg,
      location: "Queens, NY",
      rate: 20,
      description: "Graduate student offering tutoring and after-school care.",
      tags: ["Homework Help", "Tutoring", "Pets welcome"]
    },
    {
      name: "Sarah M.",
      photo: SarahImg,
      location: "Brooklyn, NY",
      rate: 22,
      description: "I am a very energetic, responsible, and caring nanny with over 5 years of experience.",
      tags: ["CPR Certified", "Non-smoker", "Has car"]
    },
    {
      name: "James L.",
      photo: JamesImg,
      location: "Manhattan, NY",
      rate: 28,
      description: "Compassionate caregiver with a background in nursing assistance.",
      tags: ["Certified Nursing Assistant", "Dementia Care", "First Aid"]
    },
    {
      name: "Emily R.",
      photo: EmilyImg,
      location: "Queens, NY",
      rate: 20,
      description: "Graduate student offering tutoring and after-school care.",
      tags: ["Homework Help", "Tutoring", "Pets welcome"]
    },
  ];

  return (
    <>

 


      {/* find care filter */}
      <section className="care-section ">
        <div className="container">
          <div className="row">

            {/* LEFT – FILTERS */}
            <div className="col-md-3">
              <div className="filters-box">
                <div className="d-flex justify-content-between mb-2">
                  <h5>Filters</h5>
                  <button className="btn btn-link p-0">Reset</button>
                </div>

                <p className="mb-1">Care Type</p>
                <div>
                  <div><input type="checkbox" /> Child Care</div>
                  <div><input type="checkbox" /> Senior Care</div>
                  <div><input type="checkbox" /> Pet Care</div>
                  <div><input type="checkbox" /> Housekeeping</div>
                  <div><input type="checkbox" /> Tutoring</div>
                </div>

                <p className="mt-3 mb-1">Distance</p>

                <p className="mt-3 mb-1">Hourly Rate</p>
              </div>
            </div>

            {/* RIGHT – CAREGIVER CARDS */}
            <div className="col-md-9">
              <h5 className="mb-3">Showing 124 caregivers nearby</h5>

              <div className="row g-4">

                {CareFilters.map((c, i) => (
                  <div key={i} className="col-md-4">
                    <div className="caregiver-card">

                      {/* Header */}
                      <div className="caregiver-header">
                        <img src={c.photo} alt="" />
                        <div>
                          <div className="caregiver-name">{c.name}</div>
                          <div className="caregiver-location">{c.location}</div>
                        </div>
                        <div className="ms-auto caregiver-rate">
                          ${c.rate}/hr
                        </div>
                      </div>

                      {/* Description */}
                      <div className="caregiver-desc">{c.description}</div>

                      {/* Tags */}
                      <div className="mt-2">
                        {c.tags.map((t, idx) => (
                          <span className="tag" key={idx}>{t}</span>
                        ))}
                      </div>

                      {/* Button */}
                      <button className="view-profile-btn mt-3">
                        View Profile
                      </button>

                    </div>
                  </div>
                ))}

              </div>

              {/* Load more */}
              <div className="text-center mt-4">
                <button className="load-more-btn">Load more caregivers</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

