import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto py-14 sm:py-16 md:py-20 ${className}`}>
      {children}
    </div>
  );
}
