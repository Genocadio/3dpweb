import React from "react";

interface HighlightedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function HighlightedSection({ children, className = "" }: HighlightedSectionProps) {
  return (
    <div
      className={`bg-gradient-to-r from-primary/10 to-cyan-100/10 rounded-3xl shadow-lg border border-cyan-200/40 px-6 py-8 md:px-10 md:py-10 mb-12 flex flex-col items-center text-center ${className}`}
    >
      {children}
    </div>
  );
}
