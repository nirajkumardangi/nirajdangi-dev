import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <div className="py-20 md:py-28 animate-pulse" aria-label="Loading page content">
      <Container>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {/* Eyebrow skeleton */}
          <div className="h-4 w-32 bg-[var(--color-border)] rounded-md" />

          {/* Heading skeleton */}
          <div className="flex flex-col gap-3">
            <div className="h-12 w-3/4 bg-[var(--color-border)] rounded-xl" />
            <div className="h-12 w-1/2 bg-[var(--color-border)] rounded-xl" />
          </div>

          {/* Subheading skeleton */}
          <div className="h-6 w-2/3 bg-[var(--color-border)]/60 rounded-md" />

          {/* CTAs skeleton */}
          <div className="flex gap-4 pt-4">
            <div className="h-11 w-44 bg-[var(--color-border)] rounded-md" />
            <div className="h-11 w-36 bg-[var(--color-border)]/60 rounded-md" />
          </div>

          {/* Preview frame skeleton */}
          <div className="mt-8 h-96 w-full rounded-2xl border border-[var(--color-border)] bg-surface/50" />
        </div>
      </Container>
    </div>
  );
}

