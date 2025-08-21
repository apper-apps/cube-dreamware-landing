import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const IndustryCard = ({ name, icon, description, className, delay = 0 }) => {
  return (
    <Card
      variant="glass"
      className={cn(
        "group cursor-pointer animate-in-view hover:border-accent-blue/50 text-center",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <ApperIcon name={icon} size={32} className="text-accent-blue" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">
        {name}
      </h3>
      <p className="text-white/70 leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

export default IndustryCard;