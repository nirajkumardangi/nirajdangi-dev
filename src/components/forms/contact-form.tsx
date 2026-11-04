"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  enquirySchema,
  type EnquiryFormData,
  BUSINESS_TYPES,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
} from "@/lib/schemas/enquiry";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/analytics";
import { whatsappLink } from "@/lib/utils";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

interface ContactFormProps {
  initialService?: string;
}

export function ContactForm({ initialService }: ContactFormProps) {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submittedData, setSubmittedData] = React.useState<EnquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      businessType: "doctor",
      service: initialService ?? "website",
      budget: "standard",
      message: "",
      company_website: "",
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send enquiry. Please try again.");
      }

      // Track analytics
      trackFormSubmit({
        service: data.service,
        budget: data.budget,
        businessType: data.businessType,
        hasEmail: Boolean(data.email && data.email.length > 0),
      });

      setSubmittedData(data);
      setIsSuccess(true);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please message me directly on WhatsApp.";
      setSubmitError(errorMsg);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmitError(null);
    setSubmittedData(null);
    reset();
  };

  if (isSuccess && submittedData) {
    const serviceName =
      SERVICE_OPTIONS.find((s) => s.value === submittedData.service)?.label ||
      submittedData.service;
    const waFollowupMsg = `Hi Niraj, I just submitted an enquiry on your website for ${serviceName}. My name is ${submittedData.name}.`;

    return (
      <Card className="p-8 sm:p-10 border-[var(--color-border-md)] shadow-md bg-surface text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 animate-scale-in">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold px-2.5 py-1 rounded bg-accent/10 mb-2">
          ENQUIRY RECEIVED
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-3">
          Thank you, {submittedData.name}!
        </h3>

        <p className="text-sm sm:text-base text-muted text-pretty max-w-md mb-8 leading-relaxed">
          Your project brief has been received. I review every enquiry personally and will get back to you via WhatsApp within 24 hours.
        </p>

        {/* What Happens Next Steps */}
        <div className="w-full text-left bg-bg rounded-xl border border-[var(--color-border)] p-6 mb-8 flex flex-col gap-4">
          <h4 className="font-mono text-xs uppercase font-semibold text-ink tracking-wider">
            What happens next:
          </h4>
          <ol className="flex flex-col gap-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <span className="font-mono text-xs font-bold text-accent px-1.5 py-0.5 rounded bg-accent/10 shrink-0 mt-0.5">
                01
              </span>
              <span>
                I review your business details, target audience, and current friction points.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-xs font-bold text-accent px-1.5 py-0.5 rounded bg-accent/10 shrink-0 mt-0.5">
                02
              </span>
              <span>
                You get a direct WhatsApp message with a fixed-scope recommendation and delivery timeline.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-xs font-bold text-accent px-1.5 py-0.5 rounded bg-accent/10 shrink-0 mt-0.5">
                03
              </span>
              <span>
                No pressure or spam. We only start once you are 100% happy with the wireframe plan.
              </span>
            </li>
          </ol>
        </div>

        {/* Immediate WhatsApp Continuation */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <Button
            variant="whatsapp"
            size="lg"
            href={whatsappLink(waFollowupMsg)}
            onClick={() => trackWhatsAppClick("Enquiry Confirmation Screen", waFollowupMsg)}
            className="w-full sm:flex-1"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Continue on WhatsApp</span>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto"
          >
            <RotateCcw className="w-4 h-4 mr-1 text-muted" />
            <span>Send Another</span>
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8 lg:p-10 border-[var(--color-border-md)] shadow-md bg-surface">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Project enquiry form"
        className="flex flex-col gap-6"
      >
        {/* Honeypot field (hidden off-screen for spam bots) */}
        <div className="opacity-0 absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="company_website">Company Website</label>
          <input
            id="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company_website")}
          />
        </div>

        {/* Row 1: Name & WhatsApp Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-ink flex items-center justify-between">
              <span>Your Name <span className="text-accent">*</span></span>
              {errors.name && (
                <span className="text-xs text-red-600 font-normal">{errors.name.message}</span>
              )}
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Dr. Rohit Verma / Anita Sen"
              aria-invalid={Boolean(errors.name)}
              className={`w-full h-12 px-4 rounded-xl border bg-bg text-base text-ink placeholder:text-muted/60 transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.name ? "border-red-500 bg-red-50/20" : "border-[var(--color-border-md)]"
              }`}
              {...register("name")}
            />
          </div>

          {/* WhatsApp Number (type=tel, inputMode=tel, autocomplete=tel) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="whatsapp" className="text-sm font-semibold text-ink flex items-center justify-between">
              <span>WhatsApp Number <span className="text-accent">*</span></span>
              {errors.whatsapp && (
                <span className="text-xs text-red-600 font-normal">{errors.whatsapp.message}</span>
              )}
            </label>
            <input
              id="whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              aria-invalid={Boolean(errors.whatsapp)}
              className={`w-full h-12 px-4 rounded-xl border bg-bg text-base text-ink placeholder:text-muted/60 transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.whatsapp ? "border-red-500 bg-red-50/20" : "border-[var(--color-border-md)]"
              }`}
              {...register("whatsapp")}
            />
          </div>
        </div>

        {/* Row 2: Email (Optional) & Business Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-ink flex items-center justify-between">
              <span>Email Address <span className="text-xs font-normal text-muted">(Optional)</span></span>
              {errors.email && (
                <span className="text-xs text-red-600 font-normal">{errors.email.message}</span>
              )}
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              aria-invalid={Boolean(errors.email)}
              className={`w-full h-12 px-4 rounded-xl border bg-bg text-base text-ink placeholder:text-muted/60 transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.email ? "border-red-500 bg-red-50/20" : "border-[var(--color-border-md)]"
              }`}
              {...register("email")}
            />
          </div>

          {/* Business Type */}
          <div className="flex flex-col gap-2">
            <label htmlFor="businessType" className="text-sm font-semibold text-ink">
              Business / Profession <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <select
                id="businessType"
                className="w-full h-12 px-4 rounded-xl border border-[var(--color-border-md)] bg-bg text-base text-ink transition-all focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
                {...register("businessType")}
              >
                {BUSINESS_TYPES.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted">
                <span className="text-xs">▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Service & Estimated Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Service */}
          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="text-sm font-semibold text-ink">
              Service Needed <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                className="w-full h-12 px-4 rounded-xl border border-[var(--color-border-md)] bg-bg text-base text-ink transition-all focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
                {...register("service")}
              >
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted">
                <span className="text-xs">▼</span>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-2">
            <label htmlFor="budget" className="text-sm font-semibold text-ink">
              Target Budget <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <select
                id="budget"
                className="w-full h-12 px-4 rounded-xl border border-[var(--color-border-md)] bg-bg text-base text-ink transition-all focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
                {...register("budget")}
              >
                {BUDGET_OPTIONS.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted">
                <span className="text-xs">▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-ink flex items-center justify-between">
            <span>Project Details <span className="text-accent">*</span></span>
            {errors.message && (
              <span className="text-xs text-red-600 font-normal">{errors.message.message}</span>
            )}
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell me a bit about your business, current customer friction, and what features you are looking for..."
            aria-invalid={Boolean(errors.message)}
            className={`w-full p-4 rounded-xl border bg-bg text-base text-ink placeholder:text-muted/60 transition-all focus:outline-none focus:ring-2 focus:ring-accent resize-y min-h-[110px] ${
              errors.message ? "border-red-500 bg-red-50/20" : "border-[var(--color-border-md)]"
            }`}
            {...register("message")}
          />
          <p className="text-xs text-muted">
            Minimum 10 characters. Plain English or Hindi is completely fine.
          </p>
        </div>

        {/* Error Alert (Placed above submit button so it's clearly visible and doesn't get obscured) */}
        {submitError && (
          <div
            role="alert"
            className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold">Unable to submit form</p>
              <p className="text-xs mt-0.5">{submitError}</p>
            </div>
          </div>
        )}

        {/* Submit Button (Full-width on mobile, prevents double submit) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="w-full sm:w-auto min-w-[200px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Send Project Enquiry</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>

          <p className="font-mono text-xs text-muted text-center sm:text-right">
            ⚡ Direct engineer review · Reply &lt;24 hours
          </p>
        </div>
      </form>
    </Card>
  );
}

