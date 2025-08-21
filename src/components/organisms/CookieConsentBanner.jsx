import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show banner after a brief delay to ensure smooth page load
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    hideBanner();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    hideBanner();
  };

  const hideBanner = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 transition-all duration-300",
      isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
    )}>
      <div className="container mx-auto max-w-4xl">
        <div className="glass border border-medium-gray/30 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Cookie Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                <ApperIcon name="Cookie" size={20} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
                We use cookies to enhance your experience
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                We use cookies and similar technologies to provide, protect and improve our services and to personalize content. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReject}
                className="w-full sm:w-auto border-medium-gray text-gray-300 hover:text-white hover:border-gray-300 transition-colors"
              >
                Reject
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="w-full sm:w-auto bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-blue/90 hover:to-accent-purple/90"
              >
                Accept All
              </Button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={hideBanner}
            className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
            aria-label="Close cookie banner"
          >
            <ApperIcon name="X" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;