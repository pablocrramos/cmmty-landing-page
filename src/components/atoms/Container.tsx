import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-2 sm:pt-20 sm:pb-14 md:pt-24 md:pb-16 ${className}`}
    >
      {children}
    </div>
  );
}
