// import React from "react";
// import '../assets/style.css';
// import LogoImage from '../assets/images/logo.png'

// export default function Header() {
//   return (
//     <header className="header">
//       <div className="container header-container d-flex align-items-center justify-content-between">

//         <div className="logo">
//             <img src={LogoImage} alt="Doctors" className="img-fluid" />
//         </div>

//         <nav className="nav-links d-flex align-items-center gap-3">
//           <div className="dropdown">
//             <button 
//               className="btn btn-light dropdown-toggle custom-btn" 
//               type="button" 
//               data-bs-toggle="dropdown" 
//               aria-expanded="false"
//             >
//               Find care
//             </button>
           
//           </div>

//           <div className="dropdown">
//             <button 
//               className="btn btn-light dropdown-toggle custom-btn" 
//               type="button" 
//               data-bs-toggle="dropdown" 
//               aria-expanded="false"
//             >
//               For caregivers
//             </button>
            
//           </div>

//           <a href="#" className="nav-link custom-link">Safety</a>
//           <a href="#" className="nav-link custom-link">Community</a>
//         </nav>

//         <div className="d-flex align-items-center gap-2">
//           <button className="btn sign-in-btn">Sign in</button>
//           <button className="btn join-now-btn">Join now</button>
//         </div>

//       </div>
//     </header>

    
//   );
// }

import React, { useState } from "react";
import '../assets/style.css';
import LogoImage from '../assets/images/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container d-flex align-items-center justify-content-between">

        {/* Logo */}
        <div className="logo">
          <img src={LogoImage} alt="Doctors" className="img-fluid" />
        </div>

        {/* Hamburger (mobile/tablet only) */}
        <div className="hamburger d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "bar rotate1" : "bar"}></span>
          <span className={menuOpen ? "bar fade" : "bar"}></span>
          <span className={menuOpen ? "bar rotate2" : "bar"}></span>
        </div>

        {/* Navigation + buttons */}
        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <nav className="nav-links d-flex align-items-center gap-3">
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle custom-btn" type="button">Find care</button>
            </div>
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle custom-btn" type="button">For caregivers</button>
            </div>
            <a href="#" className="nav-link custom-link">Safety</a>
            <a href="#" className="nav-link custom-link">Community</a>
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


