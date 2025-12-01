import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./PricingSection.css"; 


export default function PricingSection() {
  return (
    <section className="pricing-section py-5">
      <div className="container text-center">

        {/* Heading */}
        <p className="text-success fw-semibold mb-1">
          <i className="bi bi-card-checklist me-1"></i> Membership Plans
        </p>

        <h2 className="fw-bold mb-2">Choose the plan that's right for you</h2>

        <p className="text-muted mb-5">
          From basic browsing to premium features, we have a plan that fits your family's
          needs and budget.
        </p>

        <div className="row justify-content-center g-4">

          {/* Basic Plan */}
          <div className="col-md-4">
            <div className="price-card">
              <h5 className="fw-bold mb-1">Basic</h5>
              <p className="text-muted">Perfect for getting started</p>
              <h2 className="fw-bold mb-3">Free</h2>

              <button className="btn btn-light w-100 mb-4 fw-semibold shadow-sm">
                Get started
              </button>

              <ul className="list-unstyled text-start px-3">
                <li><i className="check bi bi-check-circle-fill"></i> Browse caregiver profiles</li>
                <li><i className="check bi bi-check-circle-fill"></i> Read reviews and ratings</li>
                <li><i className="check bi bi-check-circle-fill"></i> Basic messaging</li>
                <li><i className="check bi bi-check-circle-fill"></i> Safety center access</li>
              </ul>
            </div>
          </div>

          {/* Premium (Highlighted) */}
          <div className="col-md-4">
            <div className="price-card highlighted">
              <span className="popular-badge">Most Popular</span>

              <h5 className="fw-bold mt-3">Premium</h5>
              <p className="text-muted">Most popular choice for families</p>

              <h2 className="fw-bold mb-3">
                $39 <span className="fs-5 text-muted">/month</span>
              </h2>

              <button className="btn servicebtn text-white w-100 mb-4 fw-semibold">
                Start free trial
              </button>

              <ul className="list-unstyled text-start px-3">
                <li><i className="check bi bi-check-circle-fill"></i> Everything in Basic</li>
                <li><i className="check bi bi-check-circle-fill"></i> Unlimited messaging</li>
                <li><i className="check bi bi-check-circle-fill"></i> Background check access</li>
                <li><i className="check bi bi-check-circle-fill"></i> Priority customer support</li>
                <li><i className="check bi bi-check-circle-fill"></i> Advanced search filters</li>
                <li><i className="check bi bi-check-circle-fill"></i> Booking protection</li>
              </ul>
            </div>
          </div>

          {/* Premium Plus */}
          <div className="col-md-4">
            <div className="price-card">
              <h5 className="fw-bold mb-1">Premium Plus</h5>
              <p className="text-muted">Complete peace of mind</p>

              <h2 className="fw-bold mb-3">
                $59 <span className="fs-5 text-muted">/month</span>
              </h2>

              <button className="btn btn-primary-light w-100 mb-4 fw-semibold">
                Contact sales
              </button>

              <ul className="list-unstyled text-start px-3">
                <li><i className="check bi bi-check-circle-fill"></i> Everything in Premium</li>
                <li><i className="check bi bi-check-circle-fill"></i> Backup care guarantee</li>
                <li><i className="check bi bi-check-circle-fill"></i> Insurance coverage</li>
                <li><i className="check bi bi-check-circle-fill"></i> Dedicated account manager</li>
                <li><i className="check bi bi-check-circle-fill"></i> Emergency support</li>
                <li><i className="check bi bi-check-circle-fill"></i> Family activity planning</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Icons */}
        <div className="row mt-5 justify-content-center g-4">
          <div className="col-md-3">
            <div className="info-box">
              <i className="bi bi-shield-check text-success fs-2"></i>
              <p className="fw-bold mt-2">Money-back guarantee</p>
              <p className="text-muted small">30-day satisfaction guarantee</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="info-box">
              <i className="bi bi-headset text-primary fs-2"></i>
              <p className="fw-bold mt-2">24/7 support</p>
              <p className="text-muted small">Always here when you need us</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="info-box">
              <i className="bi bi-shield-lock text-purple fs-2"></i>
              <p className="fw-bold mt-2">Secure & safe</p>
              <p className="text-muted small">Your data is always protected</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
