import React, { useState } from "react";
import Link from "next/link";
import LogoImage from "../assets/images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container d-flex align-items-center justify-content-between">

        {/* Logo */}
        <div className="logo">
          <img src={LogoImage} alt="Doctors" className="img-fluid" />
        </div>

        {/* Hamburger */}
        <div className="hamburger d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "bar rotate1" : "bar"}></span>
          <span className={menuOpen ? "bar fade" : "bar"}></span>
          <span className={menuOpen ? "bar rotate2" : "bar"}></span>
        </div>

        {/* Nav */}
        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <nav className="nav-links d-flex align-items-center gap-3">

            <div className="dropdown">
              <Link href="/findcare">
                <button className="btn btn-light dropdown-toggle custom-btn">Find care</button>
              </Link>
            </div>

            <div className="dropdown">
              <Link href="/pagecaregivers">
                <button className="btn btn-light dropdown-toggle custom-btn">For Caregivers</button>
              </Link>
            </div>

            <Link href="/safety" className="nav-link custom-link">Safety</Link>
            <Link href="/community" className="nav-link custom-link">Community</Link>

          </nav>

          <div className="d-flex align-items-center gap-2 right-buttons">
            <button className="btn sign-in-btn">Sign in</button>
            <button className="btn join-now-btn">Join now</button>
          </div>
        </div>

      </div>
    </header>
  );
}
