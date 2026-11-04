"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  spotlight?: boolean; // cursor-follow spotlight on desktop
  as?: React.ElementType;
}

export function Card({ children, className, spotlight = false, as: Tag = "div" }: CardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!spotlight || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      cardRef.current.style.setProperty("--spotlight-x", `${x}%`);
      cardRef.current.style.setProperty("--spotlight-y", `${y}%`);
    },
    [spotlight]
  );

  const handleMouseLeave = React.useCallback(() => {
    if (!spotlight || !cardRef.current) return;
    cardRef.current.style.removeProperty("--spotlight-x");
    cardRef.current.style.removeProperty("--spotlight-y");
  }, [spotlight]);

  return (
    <Tag
      ref={cardRef as React.Ref<HTMLDivElement>}
      onMouseMove={spotlight ? handleMouseMove : undefined}
      onMouseLeave={spotlight ? handleMouseLeave : undefined}
      className={cn(
        "relative overflow-hidden rounded-lg bg-surface",
        "border border-[var(--color-border)] shadow-sm",
        "transition-all duration-[400ms] ease-out-expo",
        "hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-border-md)]",
        spotlight && [
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]",
          "before:opacity-0 hover:before:opacity-100",
          "before:transition-opacity before:duration-300",
          "before:bg-[radial-gradient(400px_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),rgba(91,91,214,0.08),transparent_70%)]",
          "@media(hover:none){before:hidden}", // disable on touch devices
        ],
        className
      )}
    >
      {children}
    </Tag>
  );
}
