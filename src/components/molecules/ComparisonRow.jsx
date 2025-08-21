import React from "react";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const ComparisonRow = ({ feature, traditional, freelancer, dreamware, className }) => {
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
      "grid grid-cols-4 gap-4 py-4 border-b border-medium-gray/30 last:border-b-0",
      className
    )}>
      <div className="text-white font-medium">{feature}</div>
      <div className="flex justify-center">
        <CheckIcon value={traditional} />
      </div>
      <div className="flex justify-center">
        <CheckIcon value={freelancer} />
      </div>
      <div className="flex justify-center">
        <CheckIcon value={dreamware} isDreamware={true} />
      </div>
    </div>
  );
};

export default ComparisonRow;