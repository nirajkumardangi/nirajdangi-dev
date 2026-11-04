"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  quickEnquirySchema,
  type QuickEnquiryFormData,
  SERVICE_OPTIONS,
} from "@/lib/schemas/enquiry";
import { Button } from "@/components/ui/button";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/analytics";
import { whatsappLink } from "@/lib/utils";
import { CheckCircle2, Loader2, ArrowRight, MessageCircle } from "lucide-react";

export function QuickEnquiry() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submittedData, setSubmittedData] = React.useState<QuickEnquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuickEnquiryFormData>({
    resolver: zodResolver(quickEnquirySchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      service: "website",
      message: "Quick enquiry from homepage CTA",
      company_website: "",
    },
  });

  const onSubmit = async (data: QuickEnquiryFormData) => {
    setSubmitError(null);

    try {
      const payload = {
        name: data.name,
        whatsapp: data.whatsapp,
        businessType: "other",
        service: data.service ?? "website",
        budget: "standard",
        message: data.message && data.message.length >= 10 ? data.message : "Quick callback request for website enquiry",
        company_website: data.company_website,
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit. Please try WhatsApp.");
      }

      trackFormSubmit({
        service: data.service,
        hasEmail: false,
      });

      setSubmittedData(data);
      setIsSuccess(true);
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error ? err.message : "Submission failed. Please connect on WhatsApp."
      );
    }
  };

  if (isSuccess && submittedData) {
    const waMsg = `Hi Niraj, I just requested a quick quote. My name is ${submittedData.name}.`;

    return (
      <div className="w-full bg-surface border border-accent/20 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h4 className="font-bold text-ink text-base">Request Received!</h4>
        <p className="text-xs text-muted max-w-sm">
          Thanks {submittedData.name}. I will message you back on WhatsApp ({submittedData.whatsapp}) within 24 hours.
        </p>
        <div className="flex items-center gap-3 mt-2 w-full max-w-xs">
          <Button
            variant="whatsapp"
            size="sm"
            href={whatsappLink(waMsg)}
            onClick={() => trackWhatsAppClick("Quick Enquiry Success", waMsg)}
            className="w-full text-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat Now</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsSuccess(false);
              reset();
            }}
            className="text-xs text-muted"
          >
            Reset
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-xl mx-auto flex flex-col gap-3"
    >
      {/* Honeypot field (hidden for spam bots) */}
      <div className="opacity-0 absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="quick_company_website">Company Website</label>
        <input
          id="quick_company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        <div>
          <label htmlFor="quick-name" className="sr-only">Your Name</label>
          <input
            id="quick-name"
            type="text"
            placeholder="Your Name *"
            autoComplete="name"
            className={`w-full h-11 px-3.5 rounded-xl border bg-surface text-base sm:text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.name ? "border-red-500" : "border-[var(--color-border-md)]"
            }`}
            {...register("name")}
          />
          {errors.name && (
            <span className="text-[11px] text-red-600 block mt-1">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="quick-whatsapp" className="sr-only">WhatsApp Number</label>
          <input
            id="quick-whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="WhatsApp Number *"
            className={`w-full h-11 px-3.5 rounded-xl border bg-surface text-base sm:text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.whatsapp ? "border-red-500" : "border-[var(--color-border-md)]"
            }`}
            {...register("whatsapp")}
          />
          {errors.whatsapp && (
            <span className="text-[11px] text-red-600 block mt-1">{errors.whatsapp.message}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <label htmlFor="quick-service" className="sr-only">Service</label>
          <div className="relative">
            <select
              id="quick-service"
              className="w-full h-11 px-3.5 rounded-xl border border-[var(--color-border-md)] bg-surface text-base sm:text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
              {...register("service")}
            >
              {SERVICE_OPTIONS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-muted text-xs">
              ▼
            </div>
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
          className="w-full h-11 text-sm shrink-0"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </>
          )}
        </Button>
      </div>

      {submitError && (
        <p className="text-xs text-red-600 text-center font-medium mt-1">
          {submitError}
        </p>
      )}
    </form>
  );
}

