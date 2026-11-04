import * as React from "react";

interface StaggerProps {
  children: React.ReactNode;
  staggerMs?: number;
  className?: string;
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function Stagger({
  children,
  className,
}: StaggerProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <div
      className={className}
      style={{
        animation: "revealFadeUp 400ms cubic-bezier(0.22, 1, 0.36, 1) both",
      }}
    >
      {children}
    </div>
  );
}
