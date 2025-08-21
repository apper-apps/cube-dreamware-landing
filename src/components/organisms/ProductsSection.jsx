import React, { useEffect, useState } from "react";
import { landingPageService } from "@/services/api/landingPageService";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Loading from "@/components/ui/Loading";
import ProductCard from "@/components/molecules/ProductCard";
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
    <section className="py-20 bg-gradient-to-br from-midnight via-dark-gray to-midnight relative overflow-hidden" id="products">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-purple/5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
        <div 
          ref={ref}
          className={cn(
            "text-center mb-16 animate-in-view section-reveal",
            hasIntersected && "in-view revealed"
          )}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">AI-Powered Products</span>
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
    </section>
  );
};

export default ProductsSection;