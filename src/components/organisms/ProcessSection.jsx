import React, { useState, useEffect } from "react";
import ProcessStep from "@/components/molecules/ProcessStep";
import { landingPageService } from "@/services/api/landingPageService";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { cn } from "@/utils/cn";

const ProcessSection = () => {
  const [processSteps, setProcessSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const loadProcessSteps = async () => {
    setLoading(true);
    setError("");
    
    try {
      const steps = await landingPageService.getProcessSteps();
      setProcessSteps(steps);
    } catch (err) {
      setError("Failed to load process steps. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProcessSteps();
  }, []);

  if (loading) {
    return <Loading variant="section" />;
  }

  if (error) {
    return (
      <section className="py-20" id="process">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <Error 
            title="Process Information Unavailable"
            message={error}
            onRetry={loadProcessSteps}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-dark-gray/20" id="process">
      <div className="container mx-auto px-5 sm:px-10 lg:px-20">
        <div 
          ref={ref}
          className={cn(
            "animate-in-view",
            hasIntersected && "in-view"
          )}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              From Idea to Launch in{" "}
              <span className="gradient-text">Simple Steps</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our proven 7-step process takes you from concept to a fully launched product, 
              with AI assistance every step of the way.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.Id}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === processSteps.length - 1}
                delay={index * 200}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className={cn(
            "text-center mt-16 animate-in-view",
            hasIntersected && "in-view"
          )} style={{ transitionDelay: `${processSteps.length * 200}ms` }}>
            <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Take the first step today with a free consultation. We'll help you understand 
                exactly how your idea can become reality.
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-colors magnetic-btn"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;