"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log unexpected errors in non-production
    console.error("[Runtime Error Boundary]:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-24">
      <Container>
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6 p-8 sm:p-12 rounded-3xl border border-red-500/20 bg-surface shadow-md">
          <Eyebrow className="text-red-600">ERROR · APPLICATION EXCEPTION</Eyebrow>

          <h1 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Something broke{" "}
            <span className="font-serif italic font-normal text-accent">
              unexpectedly.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-muted text-pretty max-w-md leading-relaxed">
            A runtime error occurred while loading this view. You can retry the request or return to the home screen.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-2">
            <Button
              variant="primary"
              size="md"
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto"
            >
              <RotateCcw className="w-4 h-4 mr-1.5" />
              <span>Try Again</span>
            </Button>

            <Button
              variant="secondary"
              size="md"
              href="/"
              className="w-full sm:w-auto"
            >
              <Home className="w-4 h-4 mr-1.5 text-muted" />
              <span>Back to Home</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

