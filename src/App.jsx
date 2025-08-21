import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "@/components/pages/LandingPage";

function App() {
  return (
    <div className="min-h-screen bg-midnight font-inter">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;