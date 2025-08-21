import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  className,
  icon = "Inbox",
  title = "Nothing here yet",
  message = "This section is empty right now, but we're working on adding great content.",
  action,
  actionLabel = "Get Started"
}) => {
  return (
    <div className={cn("bg-dark-gray/30 border border-medium-gray/50 rounded-xl p-12 text-center", className)}>
      <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <ApperIcon name={icon} size={40} className="text-accent-blue" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-white/70 mb-8 leading-relaxed max-w-md mx-auto">{message}</p>
      {action && (
        <button
          onClick={action}
          className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-colors magnetic-btn"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default Empty;