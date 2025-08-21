import React, { useEffect, useState } from "react";
import { landingPageService } from "@/services/api/landingPageService";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Loading from "@/components/ui/Loading";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import { cn } from "@/utils/cn";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const loadTestimonials = async () => {
    setLoading(true);
    setError("");
    
    try {
      const data = await landingPageService.getTestimonials();
      setTestimonials(data);
    } catch (err) {
      setError("Failed to load testimonials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return <Loading variant="section" />;
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <Error 
            title="Testimonials Unavailable"
            message={error}
            onRetry={loadTestimonials}
          />
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <Empty 
            icon="MessageSquare"
            title="No Testimonials Yet"
            message="We're collecting feedback from our amazing clients. Check back soon to see what they're saying!"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-dark-gray/20">
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
              What Our <span className="gradient-text">Founders</span> Say
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what non-technical founders say 
              about their experience building with Dreamware.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-5xl mx-auto">
            <div className="relative min-h-[400px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.Id}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  isActive={index === currentIndex}
                />
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-accent-blue scale-125" 
                      : "bg-medium-gray hover:bg-accent-blue/50"
                  )}
                />
              ))}
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-white/70">Successful Launches</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">90%</div>
                <div className="text-white/70">Client Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3x</div>
                <div className="text-white/70">Faster Time to Market</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;