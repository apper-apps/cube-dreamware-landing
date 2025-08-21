import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "@/components/pages/LandingPage";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CookieConsentBanner from "@/components/organisms/CookieConsentBanner";
function App() {
const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setShowContent(true);
      // Start fade out after content is ready
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 2500); // Show loading for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <div 
        className={`min-h-screen bg-midnight font-inter transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      {showContent && <CookieConsentBanner />}
    </>
  );
}

export default App;