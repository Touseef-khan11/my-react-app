import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

// Pages
import Community from './pages/Community';
import FindCare from './pages/FindCare';
import PageCaregivers from './pages/PageCaregivers';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';

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
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/style.css';
import './assets/modern-auth.css';

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
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/findcare" element={<FindCare />} />
          <Route path="/pagecaregivers" element={<PageCaregivers />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
