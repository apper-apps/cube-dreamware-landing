import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import NavigationLink from "@/components/molecules/NavigationLink";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { landingPageService } from "@/services/api/landingPageService";

const Navigation = () => {
  const [navigationItems, setNavigationItems] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const loadNavigation = async () => {
      try {
        const items = await landingPageService.getNavigation();
        setNavigationItems(items);
      } catch (error) {
        console.error("Failed to load navigation:", error);
      }
    };

    loadNavigation();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass border-b border-medium-gray/30" : "bg-transparent"
      )}>
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center mr-3">
                <ApperIcon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">Dreamware</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <NavigationLink 
                  key={item.Id} 
                  href={item.href}
                  isActive={item.isActive}
                >
                  {item.label}
                </NavigationLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button onClick={scrollToContact} size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent-blue transition-colors"
            >
              <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden transition-all duration-300",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div 
          className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={cn(
          "absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-dark-gray border-l border-medium-gray transform transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center mr-3">
                  <ApperIcon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">Dreamware</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-accent-blue transition-colors"
              >
                <ApperIcon name="X" size={24} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-6 mb-8">
              {navigationItems.map((item) => (
                <NavigationLink 
                  key={item.Id} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg"
                >
                  {item.label}
                </NavigationLink>
              ))}
            </div>

            {/* Mobile CTA */}
            <Button 
              onClick={scrollToContact} 
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;