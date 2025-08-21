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
        <div ref={ref} className={cn("animate-in-view", hasIntersected && "in-view")}>
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">What Founders Really Want —{" "}
                    <span className="gradient-text">And How Dreamware Delivers It</span>
                </h2>
                <p
                    className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">See how Dreamware AI delivers what founders truly need for successful software development
                                </p>
            </div>
            {/* Comparison Table */}
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">What Founders Really Want — And How{" "}
                        <span className="gradient-text">Dreamware Delivers It</span>
                    </h2>
                </div>
                {/* Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {/* Traditional Development Card */}
                    <Card
                        variant="glass"
                        className={cn("animate-in-view border-medium-gray/50", hasIntersected && "in-view")}
                        style={{
                            transitionDelay: "0ms"
                        }}>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-white mb-2">Traditional Development</h3>
                            <p className="text-white/60 text-sm">Large agencies & enterprise teams</p>
                        </div>
                        <div className="space-y-4">
                            {comparisonData.map(row => <ComparisonRow
                                key={`traditional-${row.Id}`}
                                feature={row.feature}
                                value={row.traditional}
                                type="traditional" />)}
                        </div>
                    </Card>
                    {/* Freelancers/Agencies Card */}
                    <Card
                        variant="glass"
                        className={cn("animate-in-view border-medium-gray/50", hasIntersected && "in-view")}
                        style={{
                            transitionDelay: "200ms"
                        }}>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-white mb-2">Freelancers/Agencies</h3>
                            <p className="text-white/60 text-sm">Independent contractors & small teams</p>
                        </div>
                        <div className="space-y-4">
                            {comparisonData.map(row => <ComparisonRow
                                key={`freelancer-${row.Id}`}
                                feature={row.feature}
                                value={row.freelancer}
                                type="freelancer" />)}
                        </div>
                    </Card>
                    {/* Dreamware AI Card */}
                    <Card
                        variant="glass"
                        className={cn(
                            "animate-in-view border-accent-blue/50 bg-gradient-to-b from-accent-blue/5 to-accent-purple/5 relative",
                            hasIntersected && "in-view"
                        )}
                        style={{
                            transitionDelay: "400ms",
                            boxShadow: "0 0 30px rgba(14, 165, 233, 0.15)"
                        }}>
                        {/* Glow effect */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-xl blur-xl -z-10"></div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold gradient-text mb-2">Dreamware AI</h3>
                            <p className="text-white/80 text-sm font-medium">AI-powered development platform</p>
                        </div>
                        <div className="space-y-4">
                            {comparisonData.map(row => <ComparisonRow
                                key={`dreamware-${row.Id}`}
                                feature={row.feature}
                                value={row.dreamware}
                                type="dreamware" />)}
                        </div>
                    </Card>
                </div>
                {/* Bottom CTA */}
                <div
                    className={cn("text-center animate-in-view", hasIntersected && "in-view")}
                    style={{
                        transitionDelay: "600ms"
                    }}>
                    <Card variant="gradient" className="max-w-4xl mx-auto border-accent-blue/30">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">🚀 Ready to Experience the Dreamware Advantage?
                                                  </h3>
                            <p className="text-white/80 mb-6 text-lg">Join successful founders who've transformed their development process with AI-powered solutions
                                                  </p>
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById("contact");

                                    if (contactSection) {
                                        contactSection.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                        });
                                    }
                                }}
                                className="bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-blue/90 hover:to-accent-purple/90 text-white px-8 py-4 rounded-lg font-medium transition-all magnetic-btn shadow-lg hover:shadow-xl text-lg">Start Your Project Today
                                                  </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default ComparisonSection;