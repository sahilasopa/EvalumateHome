import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PainPoints from "./components/PainPoints";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Incubated from "./components/IncubatedAt";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Incubated />
      <Features />
      <PainPoints />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
