import React, { useState } from "react";
import "../assets/style.css";
import HealthcareImg from '../assets/images/community/Healthcarep.png';
import ContinueeduImg from '../assets/images/community/continuingeducation.png';
import HealthfairImg from '../assets/images/community/communityhealthfair.png';




const eventsData = [
  {
    title: "Healthcare Professionals Networking Event",
    description:
      "Join fellow healthcare professionals for an evening of networking, learning, and community building.",
    date: "March 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Downtown Conference Center",
    attendees: 150,
    image: HealthcareImg,
  },
  {
    title: "Continuing Education Workshop",
    description:
      "Enhance your skills with our comprehensive continuing education program led by industry experts.",
    date: "March 22, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Medical Training Center",
    attendees: 80,
    image: ContinueeduImg,
  },
  {
    title: "Community Health Fair",
    description:
      "Volunteer with us to provide health screenings and education to our local community.",
    date: "April 5, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "City Park Pavilion",
    attendees: 300,
    image: HealthfairImg,
  },
];

const tabs = ["Success Stories", "Community Events", "Resources"];

export default function CommunityEvents() {
  const [activeTab, setActiveTab] = useState("Community Events");

  return (
    <section className="tabssection">
      <div className="container py-5">
        {/* Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-5">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Community Events Content */}
        {activeTab === "Community Events" && (
          <div>
            <h1 className="text-center fw-bold mb-2">Upcoming Community Events</h1>
            <p className="text-center text-muted mb-5">
              Connect with fellow healthcare professionals, learn new skills, and
              give back to the community
            </p>

            <div className="row g-4">
              {eventsData.map((event, index) => (
                <div className="col-12" key={index}>
                  <div className="card event-card shadow-sm rounded-3">
                    <div className="row g-0 align-items-center">
                      <div className="col-md-4">
                        <img
                          src={event.image}
                          className="img-fluid rounded-start"
                          alt={event.title}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h4 className="card-title fw-bold">{event.title}</h4>
                            <span className="badge communitybadge">
                              {event.attendees} attending
                            </span>
                          </div>
                          <p className="card-text mb-3">{event.description}</p>
                          <ul className="list-unstyled eventslist  mb-3 text-muted">
                            <li>📅 {event.date}</li>
                            <li>⏰ {event.time}</li>
                            <li>📍 {event.location}</li>
                          </ul>
                          <button className="btn join-now-btn">Register Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
