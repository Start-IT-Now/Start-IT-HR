import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/sitn/Header';
import Hero from '@/components/sitn/Hero';
import IntelligentSolutions from '@/components/sitn/IntelligentSolutions';
import KeyBenefits from '@/components/sitn/KeyBenefits';
import ProductFeatures from '@/components/sitn/ProductFeatures';
import EmployeeLifecycle from '@/components/sitn/EmployeeLifecycle';
import Personas from '@/components/sitn/Personas';
import AboutUs from '@/components/sitn/AboutUs';
import Footer from '@/components/sitn/Footer';

function App() {
  const handleFeatureClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! ",
    });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Start IT Now - HR Workflow Automation</title>
        <meta name="description" content="Adopting new technologies can feel overwhelming. At Start IT Now, we make your digital adoption journey smooth and strategic." />
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
    </HelmetProvider>
  );
}

export default App;