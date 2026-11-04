import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  dark?: boolean;
}

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
  dark = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-36",
        dark ? "bg-dark-bg text-white" : "bg-bg",
        className
      )}
    >
      {children}
    </Tag>
  );
}
