import React from "react";


export default function FaqsSection() {
  return (
    <div className="faq-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="accordion" id="faqAccordion">

          {/* FAQ Item 1 */}
          <div className="accordion-item faq-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button collapsed faq-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer1"
              >
                How do I know the caregivers are safe?
              </button>
            </h2>
            <div
              id="answer1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                All caregivers go through background checks, identity verification,
                and safety screening before joining our platform.
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="accordion-item faq-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed faq-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer2"
              >
                What is the average rate for a nanny?
              </button>
            </h2>
            <div
              id="answer2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Rates vary based on experience, location, and hours required.
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="accordion-item faq-item">
            <h2 className="accordion-header" id="faq3">
              <button
                className="accordion-button collapsed faq-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer3"
              >
                Can I interview caregivers before hiring?
              </button>
            </h2>
            <div
              id="answer3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, you can interview and select the caregiver you feel
                comfortable with.
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="accordion-item faq-item">
            <h2 className="accordion-header" id="faq4">
              <button
                className="accordion-button collapsed faq-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#answer4"
              >
                Is background check included?
              </button>
            </h2>
            <div
              id="answer4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, all caregivers must clear a complete background screening.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
