import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
import "./assets/style.css";

function App() {
  return (

    <>
      <Header />
      <HomeBanner />
      <CareSection />
      <CaregiverSlider />
      <SafetySection />
      <JoinHealth />
      <PricingSection />
      <ServiceSection />
      <ServiceInfo />
      <Footer />





    </>


  )
}

export default App
