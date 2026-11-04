"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[var(--color-accent-fg)] font-semibold shadow-accent " +
    "hover:bg-accent-hover active:scale-[0.98] " +
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 " +
    "disabled:opacity-40 disabled:pointer-events-none",
  secondary:
    "bg-surface text-ink border border-[var(--color-border-md)] shadow-sm " +
    "hover:border-[var(--color-ink)]/20 hover:shadow-md active:scale-[0.98] " +
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 " +
    "disabled:opacity-40 disabled:pointer-events-none",
  ghost:
    "bg-transparent text-ink " +
    "hover:bg-[rgba(10,10,20,0.05)] dark:hover:bg-white/5 active:bg-[rgba(10,10,20,0.08)] dark:active:bg-white/10 active:scale-[0.98] " +
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 " +
    "disabled:opacity-40 disabled:pointer-events-none",
  whatsapp:
    "bg-whatsapp text-[#052e16] font-semibold " +
    "hover:bg-whatsapp-hover active:scale-[0.98] " +
    "focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 " +
    "disabled:opacity-40 disabled:pointer-events-none",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-[44px] sm:min-h-0 sm:h-9 px-4 text-sm gap-1.5 rounded-md",
  md: "h-11 px-5 text-sm gap-2 rounded-md",
  lg: "h-[52px] px-7 text-base gap-2.5 rounded-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium",
      "transition-all duration-[200ms] ease-out-expo",
      "select-none cursor-pointer whitespace-nowrap",
      "min-w-[44px]", // tap target
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={classes} role="button">
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
