import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

export function Eyebrow({ children, className, as: Tag = "p" }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "font-mono text-[11px] tracking-[0.1em] uppercase text-muted leading-snug",
        className
      )}
    >
      {children}
    </Tag>
  );
}
