import React from "react";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const ComparisonRow = ({ feature, traditional, freelancer, dreamware, type, value, className }) => {
  const CheckIcon = ({ value, isDreamware = false }) => {
    if (value) {
      return (
        <ApperIcon 
          name="Check" 
          size={20} 
          className={cn(
            isDreamware ? "text-accent-blue" : "text-green-500"
          )}
        />
      );
    }
    return <ApperIcon name="X" size={20} className="text-red-500" />;
  };

return (
    <div className={cn(
      "flex items-center justify-between p-3 rounded-lg transition-all duration-200",
      value ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20",
      type === "dreamware" && value && "bg-accent-blue/10 border-accent-blue/20",
      className
    )}>
      <div className={cn(
        "text-sm font-medium flex-1",
        type === "dreamware" ? "text-white" : "text-white/80"
      )}>
        {feature}
      </div>
      <div className="flex-shrink-0 ml-3">
        <CheckIcon value={value} isDreamware={type === "dreamware"} />
      </div>
    </div>
  );
};

export default ComparisonRow;