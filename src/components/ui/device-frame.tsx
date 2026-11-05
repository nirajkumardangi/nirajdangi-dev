import { cn } from "@/lib/utils";
import Image from "next/image";

interface DeviceFrameProps {
  type: "browser" | "phone";
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function DeviceFrame({
  type,
  src,
  alt,
  className,
  width = 1280,
  height = 800,
}: DeviceFrameProps) {
  if (type === "browser") {
    return (
      <div
        className={cn(
          "rounded-lg overflow-hidden border border-[var(--color-border-md)] shadow-lg bg-surface",
          className
        )}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-surface">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" aria-hidden="true" />
          <div className="flex-1 ml-2 h-6 rounded bg-[rgba(10,10,20,0.06)] max-w-xs" aria-hidden="true" />
        </div>
        {/* Screenshot */}
        <div className="relative overflow-hidden" style={{ aspectRatio: `${width}/${height}` }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            unoptimized={src.endsWith(".svg")}
            priority
          />
        </div>
      </div>
    );
  }

  // Phone frame
  return (
    <div
      className={cn(
        "relative mx-auto rounded-[2.5rem] border-[6px] border-ink shadow-lg bg-surface overflow-hidden",
        "w-[260px]",
        className
      )}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-ink rounded-b-2xl z-raised" aria-hidden="true" />
      {/* Screen */}
      <div className="relative overflow-hidden rounded-[2rem]" style={{ aspectRatio: "9/19.5" }}>
        <Image src={src} alt={alt} fill className="object-cover object-top" />
      </div>
    </div>
  );
}

/** Placeholder frame used when no screenshot is available yet */
export function DeviceFramePlaceholder({
  type,
  label,
  className,
}: {
  type: "browser" | "phone";
  label?: string;
  className?: string;
}) {
  if (type === "browser") {
    return (
      <div
        className={cn(
          "rounded-lg overflow-hidden border border-[var(--color-border-md)] shadow-lg bg-surface",
          className
        )}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-surface">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" aria-hidden="true" />
          <div className="flex-1 ml-2 h-6 rounded bg-[rgba(10,10,20,0.06)] max-w-xs" aria-hidden="true" />
        </div>
        <div className="bg-[rgba(10,10,20,0.03)] flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
          <p className="font-mono text-[10px] tracking-widest uppercase text-muted">
            {label ?? "Screenshot pending"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative mx-auto rounded-[2.5rem] border-[6px] border-ink shadow-lg bg-surface overflow-hidden w-[260px]",
        className
      )}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-ink rounded-b-2xl z-raised" aria-hidden="true" />
      <div
        className="bg-[rgba(10,10,20,0.03)] flex items-center justify-center rounded-[2rem]"
        style={{ aspectRatio: "9/19.5" }}
      >
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted text-center px-4">
          {label ?? "Screenshot pending"}
        </p>
      </div>
    </div>
  );
}
