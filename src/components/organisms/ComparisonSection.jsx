import React, { useEffect, useState } from "react";
import { landingPageService } from "@/services/api/landingPageService";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import ComparisonRow from "@/components/molecules/ComparisonRow";
import Card from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const ComparisonSection = () => {
  const [comparisonData, setComparisonData] = useState([]);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const loadComparisonData = async () => {
    setLoading(true);
    setError("");
    
    try {
      const data = await landingPageService.getComparisonData();
      setComparisonData(data);
    } catch (err) {
      setError("Failed to load comparison data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComparisonData();
  }, []);

  if (loading) {
    return <Loading variant="section" />;
  }

  if (error) {
    return (
      <section className="py-20" id="services">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <Error 
            title="Comparison Data Unavailable"
            message={error}
            onRetry={loadComparisonData}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32" id="services">
      <div className="container mx-auto px-5 sm:px-10 lg:px-20">
        <div 
          ref={ref}
          className={cn(
            "animate-in-view",
            hasIntersected && "in-view"
          )}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Founders Really Want —{" "}
              <span className="gradient-text">And How Dreamware Delivers It</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Compare traditional development approaches with our AI-powered solution
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto">
            <Card variant="glass" className="overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 pb-6 mb-6 border-b border-medium-gray/50">
                <div className="text-white/70 font-medium">Feature</div>
                <div className="text-center text-white/70 font-medium">Traditional</div>
                <div className="text-center text-white/70 font-medium">Freelancers</div>
                <div className="text-center font-semibold">
                  <span className="gradient-text">Dreamware AI</span>
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-0">
                {comparisonData.map((row, index) => (
                  <div
                    key={row.Id}
                    className={cn(
                      "animate-in-view",
                      hasIntersected && "in-view"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <ComparisonRow
                      feature={row.feature}
                      traditional={row.traditional}
                      freelancer={row.freelancer}
                      dreamware={row.dreamware}
                    />
                  </div>
                ))}
              </div>

              {/* Highlight Box */}
              <div className="mt-8 pt-8 border-t border-medium-gray/30">
                <div className="bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 border border-accent-blue/30 rounded-lg p-6 text-center">
                  <p className="text-white font-medium text-lg">
                    🎯 <strong>Why Choose Dreamware?</strong> We combine the reliability of traditional development 
                    with the speed of AI and the cost-effectiveness of modern tools.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;