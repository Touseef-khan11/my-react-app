import React from "react";
import '../assets/style.css';
import FooterLogo from '../assets/images/footerlogo.png';
import GoogleImg from '../assets/images/google.png';
import AppleImg from '../assets/images/apple.png';




// import BannerImage from '../assets/images/banner-background.png'; // replace with your uploaded image

export default function Footer() {
    return (
        <>
            {/* Top Newsletter Section */}
            < section className="newsletter-section d-flex flex-column justify-content-center text-center py-5" >
                <h2 className="text-white fw-semibold mb-2">
                    Stay connected with CareConnect
                </h2>
                <p className="text-white-50 mb-4">
                    Get the latest tips, resources, and updates delivered to your inbox
                </p>

                <div className="d-flex justify-content-center newsletter-input-wrapper">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="form-control newsletter-input"
                    />
                    <button className="btn btn-light newsletter-btn">Subscribe</button>
                </div>
            </section >
            <footer className="footer bg-dark text-light">
                <div className="container py-5">

                    {/* Top section */}
                    <div className="row border-row mb-5">

                        {/* Logo and description */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="logo ">
                                <img src={FooterLogo} alt="Doctors" className="img-fluid mb-4" />
                            </div>
                            <p className="footer-desc">
                                Connecting families with trusted, background-checked caregivers in your community.
                            </p>
                            <div className="d-flex gap-2 mt-3 social-icons">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        {/* Footer Columns */}
                        <div className="col-lg-2 col-md-6 mb-4">
                            <h6 className="footer-title mb-4">Find care</h6>
                            <ul className="list-unstyled footer-links ">
                                <li>Child care</li>
                                <li>Senior care</li>
                                <li>Pet care</li>
                                <li>Housekeeping</li>
                                <li>Tutoring</li>
                                <li>Special needs care</li>
                                <li>Nanny services</li>
                                <li>Babysitters</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4">
                            <h6 className="footer-title mb-4">For caregivers</h6>
                            <ul className="list-unstyled footer-links">
                                <li>Find jobs</li>
                                <li>Caregiver resources</li>
                                <li>Background checks</li>
                                <li>Safety tips</li>
                                <li>Success stories</li>
                                <li>Training programs</li>
                                <li>Community support</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4">
                            <h6 className="footer-title mb-4">Company</h6>
                            <ul className="list-unstyled footer-links">
                                <li>About us</li>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>Blog</li>
                                <li>Safety</li>
                                <li>Trust & safety</li>
                                <li>Community guidelines</li>
                                <li>Help center</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <h6 className="footer-title mb-4">Support</h6>
                            <ul className="list-unstyled footer-links">
                                <li>Help center</li>
                                <li>Contact us</li>
                                <li>Safety center</li>
                                <li>Community guidelines</li>
                                <li>Terms of service</li>
                                <li>Privacy policy</li>
                                <li>Cookie policy</li>
                            </ul>
                        </div>

                    </div>

                    <hr className="footer-divider" />

                    {/* App download section */}
                    <div className="text-center my-4 py-3">
                        <h4 className="mb-2 careconnecttext">Get the CareConnect app</h4>
                        <p className="mb-3 careconnecttextsub ">Find and book care on the go</p>
                        <div className="d-flex justify-content-center gap-2 app-buttons">
                            <a href="#" className="btn app-store-btn">
                                <img src={GoogleImg} alt="Google" className="" />

                            </a>
                            <a href="#" className="btn google-play-btn">
                                <img src={AppleImg} alt="Apple" className="" />
                            </a>
                        </div>
                    </div>

                    <hr className="footer-dividerr" />

                    {/* Bottom section */}
                    <div className="footer-col d-flex justify-content-between small pt-3 pb-2 bottom-footer flex-wrap">
                        <div className="footertext">© 2025 TempsCare. All rights reserved.</div>
                        <div className="footertext d-flex gap-3 flex-wrap">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <span>Powered by Convexds</span>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}