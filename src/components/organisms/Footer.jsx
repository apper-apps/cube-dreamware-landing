import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-dark-gray border-t border-medium-gray/30">
      <div className="container mx-auto px-5 sm:px-10 lg:px-20">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center mr-4">
                  <ApperIcon name="Zap" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Dreamware</span>
              </div>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                AI-powered development platform helping non-technical founders 
                build and launch successful products faster than ever before.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-medium-gray hover:bg-accent-blue rounded-lg flex items-center justify-center transition-colors"
                >
                  <ApperIcon name="Twitter" size={18} className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-medium-gray hover:bg-accent-blue rounded-lg flex items-center justify-center transition-colors"
                >
                  <ApperIcon name="Linkedin" size={18} className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-medium-gray hover:bg-accent-blue rounded-lg flex items-center justify-center transition-colors"
                >
                  <ApperIcon name="Github" size={18} className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-medium-gray hover:bg-accent-blue rounded-lg flex items-center justify-center transition-colors"
                >
                  <ApperIcon name="Youtube" size={18} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="text-white/70 hover:text-accent-blue transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("process")}
                    className="text-white/70 hover:text-accent-blue transition-colors"
                  >
                    Process
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("industries")}
                    className="text-white/70 hover:text-accent-blue transition-colors"
                  >
                    Industries
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("contact")}
                    className="text-white/70 hover:text-accent-blue transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-semibold mb-6">Our Products</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-accent-blue transition-colors"
                  >
                    Integrately
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-accent-blue transition-colors"
                  >
                    Apper.io
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-accent-blue transition-colors"
                  >
                    AutoTester.ai
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-accent-blue transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-medium-gray/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} Dreamware. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-white/60 hover:text-accent-blue text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-accent-blue text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-accent-blue text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>

            {/* Back to Top */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-medium-gray hover:bg-accent-blue rounded-lg flex items-center justify-center transition-colors group"
            >
              <ApperIcon name="ArrowUp" size={18} className="text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;