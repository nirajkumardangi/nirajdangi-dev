import * as React from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // ms
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  className,
}: RevealProps) {
  return (
    <div
      className={className}
      style={{
        animation: `revealFadeUp 400ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`,
      }}
    >
      {children}
    </div>
  );
}
