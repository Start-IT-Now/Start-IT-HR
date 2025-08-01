import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/sitn/Header';
import Hero from '@/components/sitn/Hero';
import IntelligentSolutions from '@/components/sitn/IntelligentSolutions';
import KeyBenefits from '@/components/sitn/KeyBenefits';
import ProductFeatures from '@/components/sitn/ProductFeatures';
import EmployeeLifecycle from '@/components/sitn/EmployeeLifecycle';
import Personas from '@/components/sitn/Personas';
import AboutUs from '@/components/sitn/AboutUs';
import Footer from '@/components/sitn/Footer';

import { initGA, trackPageview } from '@/components/sitn/ga4';

// Component to handle GA tracking on route change
function GAListener({ children }) {
  const location = useLocation();

  useEffect(() => {
    trackPageview(location.pathname);
  }, [location]);

  return children;
}

function AppContent() {
  const handleFeatureClick = () => {
    // Example custom event tracking
    // ReactGA.event({ category: 'Feature', action: 'Click', label: 'Feature Section' });
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
          <Hero />
          <IntelligentSolutions onFeatureClick={handleFeatureClick} />
          <KeyBenefits onFeatureClick={handleFeatureClick} />
          <ProductFeatures onFeatureClick={handleFeatureClick} />
          <EmployeeLifecycle onFeatureClick={handleFeatureClick} />
          <Personas onFeatureClick={handleFeatureClick} />
          <AboutUs onFeatureClick={handleFeatureClick} />
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
          <Routes>
            {/* You can add routes if you want, or just render main app */}
            <Route path="*" element={<AppContent />} />
          </Routes>
        </GAListener>
      </Router>
    </HelmetProvider>
  );
}

export default App;
