import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import CommunityEvents from "../components/CommunityEvents"; // Make sure this path is correct

export default function Community() {
    return (
        <>
            {/* <Header /> */}

            {/* First Section */}
            <div className="healthcare-section d-flex justify-content-center align-items-center text-center text-white">
                <div className="container content-box p-5">
                    <div className="row d-flex text-center justify-content-center">
                        <h1 className="section-title mb-3">Our Healthcare Community</h1>
                        <p className="section-subtitle tex-width mb-5">
                            Join thousands of healthcare professionals who are making a
                            difference every day. Share stories, connect with peers, and grow
                            together.
                        </p>
                    </div>

                    <div className="row stats-row">
                        <div className="col-md-4 mb-4">
                            <div className="stat-card p-4">
                                <h3 className="stat-value">5,000+</h3>
                                <p className="stat-label">Active Healthcare Professionals</p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="stat-card p-4">
                                <h3 className="stat-value">250+</h3>
                                <p className="stat-label">Healthcare Facilities</p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="stat-card p-4">
                                <h3 className="stat-value">98%</h3>
                                <p className="stat-label">Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community Events Section */}
            <CommunityEvents />



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


            {/* <Footer /> */}
        </>
    );
}
