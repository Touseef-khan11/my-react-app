// import { useState } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from "./components/Header";
// import HomeBanner from "./components/HomeBanner";
// import CareSection from "./components/CareSection";
// import CaregiverSlider from "./components/CaregiverSlider";
// import SafetySection from "./components/SafetySection";
// import JoinHealth from "./components/JoinHealth";
// import PricingSection from "./components/PricingSection";
// import ServiceSection from "./components/ServiceSection";
// import ServiceInfo from "./components/ServiceInfo";
// import Community from './pages/Community';
// import Footer from "./components/Footer";

// import "./assets/style.css";

// function App() {
//   const [showCommunity, setShowCommunity] = useState(false);

//   return (
//     <>
//       <Header />

//       {showCommunity ? (
//         <Community />
//       ) : (
//         <>
//           <HomeBanner />
//           <CareSection />
//           <CaregiverSlider />
//           <SafetySection />
//           <JoinHealth />
//           <PricingSection />
//           <ServiceSection />
//           <ServiceInfo />
//         </>
//       )}

//       <Footer />

//       <div style={{ textAlign: 'center', margin: '20px' }}>
//         <button onClick={() => setShowCommunity(!showCommunity)}>
//           {showCommunity ? "Go to Home" : "Go to Community"}
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Community from './pages/Community';
import FindCare from './pages/FindCare';
import PageCaregivers from './pages/PageCaregivers';



// Components
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import CareSection from "./components/CareSection";
import CaregiverSlider from "./components/CaregiverSlider";
import SafetySection from "./components/SafetySection";
import JoinHealth from "./components/JoinHealth";
import PricingSection from "./components/PricingSection";
import ServiceSection from "./components/ServiceSection";
import ServiceInfo from "./components/ServiceInfo";
import Footer from "./components/Footer";

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

function Home() {
  return (
    <>
      <HomeBanner />
      <CareSection />
      <CaregiverSlider />
      <SafetySection />
      <JoinHealth />
      <PricingSection />
      <ServiceSection />
      <ServiceInfo />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/FindCare" element={<FindCare />} />
        <Route path="/PageCaregivers" element={<PageCaregivers />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

