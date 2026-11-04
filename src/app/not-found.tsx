import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-24">
      <Container>
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6 p-8 sm:p-12 rounded-3xl border border-[var(--color-border-md)] bg-surface shadow-md">
          <Eyebrow>404 · ERROR</Eyebrow>

          <h1 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            Lost in the{" "}
            <span className="font-serif italic font-normal text-accent">
              code.
            </span>
          </h1>

          <p className="text-base text-muted text-pretty max-w-md leading-relaxed">
            The page you are looking for does not exist or has been relocated. Return to the selected projects or reach out directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-2">
            <Button variant="primary" size="md" href="/" className="w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span>Back to Home</span>
            </Button>

            <Button
              variant="whatsapp"
              size="md"
              href={whatsappLink("Hi Niraj, I encountered a missing link on your website.")}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 mr-1.5 fill-white" />
              <span>Message on WhatsApp</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
