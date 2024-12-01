import React from "react";

// Card Component
export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
}

// CardContent Component
export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default {
  Card,
  CardContent,
};
