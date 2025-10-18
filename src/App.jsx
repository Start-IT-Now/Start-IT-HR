// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react"

import Header from "@/components/sitn/Header";
import Hero from "@/components/sitn/Hero";
import IntelligentSolutions from "@/components/sitn/IntelligentSolutions";
import KeyBenefits from "@/components/sitn/KeyBenefits";
import ProductFeatures from "@/components/sitn/ProductFeatures";
import EmployeeLifecycle from "@/components/sitn/EmployeeLifecycle";
import Personas from "@/components/sitn/Personas";
import Integrations from "@/components/sitn/AboutUs";
import Footer from "@/components/sitn/Footer";
import { Toaster } from "@/components/ui/toaster";

import { initGA, trackPageview } from "@/components/sitn/ga4";

// 🔹 GA listener for pageviews
function GAListener({ children }) {
  const location = useLocation();
  useEffect(() => {
    trackPageview(location.pathname);
  }, [location]);
  return children;
}

// 🔹 Apollo tracker (runs once on mount)
function ApolloTracker() {
  useEffect(() => {
    const n = Math.random().toString(36).substring(7);
    const script = document.createElement("script");
    script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${n}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.trackingFunctions) {
        window.trackingFunctions.onLoad({
          appId: "6735c9e7c6448804001de4ff",
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return null; // no visible UI
}

function AppContent() {
  const handleFeatureClick = () => {
    // Add custom GA tracking here if needed
  };

  return (
    <>
      <Helmet>
        <title>Start IT Now - HR Workflow Automation</title>
        <meta
          name="description"
          content="Adopting new technologies can feel overwhelming. At Start IT Now, we make your digital adoption journey smooth and strategic."
        />
      </Helmet>

      <div className="min-h-screen bg-[#0B0F29] text-white font-sans">
        <Header onFeatureClick={handleFeatureClick} />
        <main>
          <Hero onFeatureClick={handleFeatureClick} />
          <IntelligentSolutions onFeatureClick={handleFeatureClick} />
          <EmployeeLifecycle onFeatureClick={handleFeatureClick} />
          <KeyBenefits onFeatureClick={handleFeatureClick} />
          <ProductFeatures onFeatureClick={handleFeatureClick} />
          <Personas onFeatureClick={handleFeatureClick} />
          <Integrations onFeatureClick={handleFeatureClick} />
        </main>
        <Footer onFeatureClick={handleFeatureClick} />
        <Toaster />
      </div>
    </>
  );
}

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <GAListener>
          {/* 🔹 ApolloTracker runs globally once */}
          <ApolloTracker />
          <Analytics />
          <Routes>
            <Route path="*" element={<AppContent />} />
          </Routes>
        </GAListener>
      </Router>
    </HelmetProvider>
  );
}

export default App;
