import React from "react";

interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const TextBlock: React.FC<TextBlockProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`font-heading max-w-3xl text-3xl font-medium ${className}`}>
      {children}
    </div>
  );
};
