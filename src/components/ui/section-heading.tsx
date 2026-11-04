import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: React.ReactNode;
  sub?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  headingAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  heading,
  sub,
  align = "left",
  className,
  headingAs: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "font-sans font-semibold text-ink text-balance",
          Tag === "h1"
            ? "text-h1 tracking-[-0.04em] leading-[1.02]"
            : "text-h2 tracking-[-0.02em] leading-[1.1]"
        )}
      >
        {heading}
      </Tag>
      {sub && (
        <p
          className={cn(
            "text-muted text-pretty",
            "text-base md:text-lg",
            "max-w-prose",
            align === "center" && "mx-auto"
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
