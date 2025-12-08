import React from "react";
import SeekImg from '../assets/images/forcaregivers/seekingspecial.png';
import NannyImg from '../assets/images/forcaregivers/nannyneeded.png';
import ExpImg from '../assets/images/forcaregivers/experiencedcare.png';
import SchoolImg from '../assets/images/forcaregivers/aftershcool.png';
import PetImg from '../assets/images/forcaregivers/weekendpet.png';






export default function CaregiversListing() {

    // ✅ JOB DATA WITH DIFFERENT IMAGES
    const jobData = [
        {
            id: 1,
            image: SeekImg ,
            type: "PART-TIME",
            price: "$15 – $25/hr",
            title: "Seeking a Special Needs Caregiver With Autism Experience",
            location: "Navarre, FL",
            desc: "Looking for a caring and patient person to assist with a lovely special needs daughter…",
            tags: ["Autism Support", "Special Needs"]
        },
        {
            id: 2,
            image: NannyImg,
            type: "FULL-TIME",
            price: "$22 – $28/hr",
            title: "Nanny Needed For 2 Children In Portland",
            location: "Portland, OR",
            desc: "We need someone who can help with light housekeeping and homework support…",
            tags: ["Nanny", "Light Housekeeping"]
        },
        {
            id: 3,
            image: ExpImg,
            type: "PART-TIME",
            price: "$20 – $30/hr",
            title: "Experienced Senior Care Provider Wanted",
            location: "Austin, TX",
            desc: "Looking for compassionate senior care assistance for daily activities…",
            tags: ["Senior Care", "Companionship"]
        },
        {
            id: 4,
            image: SchoolImg,
            type: "PART-TIME",
            price: "$18 – $22/hr",
            title: "After School Sitter for 8yo",
            location: "Chicago, IL",
            desc: "Need someone to help with after school routine and homework…",
            tags: ["After School", "Homework Help"]
        },
        {
            id: 5,
            image: PetImg,
            type: "ONE-TIME",
            price: "$50 – $75/hr",
            title: "Weekend Pet Sitter for 2 Dogs",
            location: "Seattle, WA",
            desc: "Need a sitter for two golden retrievers for the weekend…",
            tags: ["Pet Sitting", "Dog Care"]
        }
    ];

    return (
        <>
            <section className="job-section py-5">
                <div className="container">
                    <div className="row g-4">

                        {/* LEFT FILTERS */}
                        <div className="col-lg-3">
                            <div className="filter-box p-3">
                                <h6 className="fw-bold mb-3">Filters</h6>

                                <p className="filter-title">Job Type</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Full-time</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Part-time</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">One-time</label>
                                </div>

                                <p className="filter-title mt-3">Service</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Child Care</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Senior Care</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Special Needs</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Pet Care</label>
                                </div>
                            </div>
                        </div>

                        {/* CENTER JOB LIST */}
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold">New Jobs in Your Area</h5>
                                <span className="sorted-text">Sorted by: <b>Relevance</b></span>
                            </div>

                            {/* JOB CARDS FROM DATA */}
                            {jobData.map((job) => (
                                <div className="job-card p-3 mb-3 d-flex gap-3" key={job.id}>
                                    <img src={job.image} alt="job" className="job-img" />

                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between">
                                            <span className="badge bg-light text-success fw-semibold">
                                                {job.type}
                                            </span>
                                            <p className="price-text">{job.price}</p>
                                        </div>

                                        <h6 className="fw-bold job-title">{job.title}</h6>

                                        <p className="job-meta">
                                            <i className="bi bi-geo-alt"></i> {job.location} &nbsp; ● &nbsp;
                                            <i className="bi bi-clock"></i> Starts ASAP
                                        </p>

                                        <p className="job-desc">{job.desc}</p>

                                        <div className="d-flex gap-2 flex-wrap">
                                            {job.tags.map((tag, i) => (
                                                <span className="tag" key={i}>{tag}</span>
                                            ))}
                                        </div>

                                        <div className="text-end mt-2">
                                            <a href="#" className="details-link">See details ›</a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* PAGINATION */}
                            <nav className="mt-4">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">…</a></li>
                                    <li className="page-item"><a className="page-link" href="#">8</a></li>
                                </ul>
                            </nav>
                        </div>

                        {/* RIGHT HOW IT WORKS BOX */}
                        <div className="col-lg-3">
                            <div className="how-box p-4">
                                <h6 className="fw-bold mb-4">How it works</h6>

                                <div className="how-step">
                                    <span className="step-number">1</span>
                                    <p>Create a profile & build a professional caregiver profile.</p>
                                </div>

                                <div className="how-step">
                                    <span className="step-number">2</span>
                                    <p>Search for jobs & apply to positions posted by local families.</p>
                                </div>

                                <div className="how-step">
                                    <span className="step-number">3</span>
                                    <p>Get hired & start earning helping families in your area.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
