import React, { useState, useEffect } from "react";
import ProductCard from "@/components/molecules/ProductCard";
import { landingPageService } from "@/services/api/landingPageService";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { cn } from "@/utils/cn";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const loadProducts = async () => {
    setLoading(true);
    setError("");
    
    try {
      const data = await landingPageService.getProducts();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <Loading variant="section" />;
  }

  if (error) {
    return (
      <section className="py-20" id="products">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <Error 
            title="Products Information Unavailable"
            message={error}
            onRetry={loadProducts}
          />
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-20" id="products">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <Empty 
            icon="Package"
            title="No Products Available"
            message="We're currently updating our product showcase. Please check back soon."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="products">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />
      
      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative">
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
              Our <span className="gradient-text">AI-Powered</span> Solutions
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Discover our suite of intelligent tools designed to transform your business 
              processes with cutting-edge AI technology.
            </p>
          </div>

          {/* Products Grid */}
          <div className="space-y-32">
            {products.map((product, index) => (
              <div
                key={product.Id}
                className={cn(
                  "animate-in-view",
                  hasIntersected && "in-view"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <ProductCard
                  product={product}
                  index={index}
                  isReversed={index % 2 === 1}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={cn(
            "text-center mt-20 animate-in-view",
            hasIntersected && "in-view"
          )} style={{ transitionDelay: `${products.length * 200}ms` }}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Join thousands of businesses already using our AI-powered solutions 
                to streamline operations and drive growth.
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-blue/90 hover:to-accent-purple/90 text-white px-8 py-3 rounded-lg font-medium transition-all magnetic-btn shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;