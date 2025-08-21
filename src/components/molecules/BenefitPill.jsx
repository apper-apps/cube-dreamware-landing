import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const BenefitPill = ({ icon, text, className }) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-3 bg-dark-gray/50 border border-medium-gray/50 rounded-full px-6 py-3 text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-dark-gray/70 hover:border-accent-blue/30 hover:scale-105",
      className
    )}>
      <div className="w-5 h-5 text-accent-blue flex-shrink-0">
        <ApperIcon name={icon} size={20} />
      </div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default BenefitPill;