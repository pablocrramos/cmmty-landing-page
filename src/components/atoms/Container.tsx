import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto py-16 sm:py-20 md:py-28 ${className}`}>
      {children}
    </div>
  );
}
