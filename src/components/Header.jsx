import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LogoImage from "../assets/images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setUserDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container header-container d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={LogoImage} alt="Care Platform" className="img-fluid" />
          </Link>
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
              <Link to="/findcare">
                <button className="btn btn-light dropdown-toggle custom-btn">Find care</button>
              </Link>
            </div>

            <div className="dropdown">
              <Link to="/pagecaregivers">
                <button className="btn btn-light dropdown-toggle custom-btn">For Caregivers</button>
              </Link>
            </div>

            <Link to="/safety" className="nav-link custom-link">Safety</Link>
            <Link to="/community" className="nav-link custom-link">Community</Link>
          </nav>

          <div className="d-flex align-items-center gap-2 right-buttons">
            {isAuthenticated ? (
              <div className="user-dropdown-wrapper">
                <button 
                  className="btn user-profile-btn d-flex align-items-center gap-2"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  <div className="user-avatar-small">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span className="d-none d-md-inline">{user?.name}</span>
                  <i className={`bi bi-chevron-${userDropdownOpen ? 'up' : 'down'}`}></i>
                </button>
                
                {userDropdownOpen && (
                  <div className="user-dropdown-menu">
                    <div className="user-dropdown-header">
                      <div className="user-info">
                        <strong>{user?.name}</strong>
                        <small className="text-muted d-block">{user?.email}</small>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <Link to="/profile" className="dropdown-item" onClick={() => setUserDropdownOpen(false)}>
                      <i className="bi bi-person me-2"></i>
                      My Profile
                    </Link>
                    <Link to="/bookings" className="dropdown-item" onClick={() => setUserDropdownOpen(false)}>
                      <i className="bi bi-calendar-check me-2"></i>
                      My Bookings
                    </Link>
                    <Link to="/messages" className="dropdown-item" onClick={() => setUserDropdownOpen(false)}>
                      <i className="bi bi-chat-dots me-2"></i>
                      Messages
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn sign-in-btn">Sign in</button>
                </Link>
                <Link to="/signup">
                  <button className="btn join-now-btn">Join now</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
