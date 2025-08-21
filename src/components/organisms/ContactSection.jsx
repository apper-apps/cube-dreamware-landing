import React from "react";
import ContactForm from "@/components/molecules/ContactForm";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const ContactSection = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const handleFormSuccess = () => {
    // Additional success handling if needed
    console.log("Contact form submitted successfully!");
  };

  return (
    <section 
      className="py-20 lg:py-32 bg-gradient-to-br from-dark-gray via-midnight to-dark-gray relative overflow-hidden" 
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
        <div 
          ref={ref}
          className={cn(
            "animate-in-view",
            hasIntersected && "in-view"
          )}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's transform your ideas into{" "}
              <span className="gradient-text">action</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Take the first step and start building your product today. 
              No technical background required – we handle everything.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* Contact Form */}
            <div className={cn(
              "animate-in-view",
              hasIntersected && "in-view"
            )} style={{ transitionDelay: "200ms" }}>
              <div className="bg-dark-gray/50 backdrop-blur-sm border border-medium-gray/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Start Your Journey Today
                </h3>
                <ContactForm onSuccess={handleFormSuccess} />
              </div>
            </div>

            {/* Trust Indicators & Benefits */}
            <div className={cn(
              "space-y-8 animate-in-view",
              hasIntersected && "in-view"
            )} style={{ transitionDelay: "400ms" }}>
              {/* Main CTA Message */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 bg-accent-blue/10 border border-accent-blue/20 rounded-full px-6 py-3 mb-6">
                  <ApperIcon name="Zap" size={20} className="text-accent-blue" />
                  <span className="text-accent-blue font-medium">Ready to Get Started?</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Schedule Your Free Consultation
                </h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  In just 30 minutes, we'll discuss your idea, show you what's possible, 
                  and create a roadmap for your success.
                </p>
              </div>

              {/* Trust Points */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                  </div>
                  <span className="text-white/80">Full ownership of your product and code</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                  </div>
                  <span className="text-white/80">Simple, transparent process from start to finish</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                  </div>
                  <span className="text-white/80">24/5 support after launch to ensure your success</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-dark-gray/30 border border-medium-gray/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Prefer to Talk Directly?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ApperIcon name="Mail" size={18} className="text-accent-blue" />
                    <span className="text-white/80">hello@dreamware.ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ApperIcon name="Phone" size={18} className="text-accent-blue" />
                    <span className="text-white/80">+1 (555) 123-DREAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ApperIcon name="Clock" size={18} className="text-accent-blue" />
                    <span className="text-white/80">Available 9 AM - 6 PM EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;