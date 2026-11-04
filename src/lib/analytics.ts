/**
 * GA4 / Web Analytics helper.
 * Safe for SSR and resilient when ad-blockers or disabled gtag scripts are present.
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEventType =
  | "form_submit"
  | "whatsapp_click"
  | "call_click"
  | "nav_click"
  | "service_select";

interface FormSubmitParams {
  service?: string;
  budget?: string;
  businessType?: string;
  hasEmail?: boolean;
}

interface WhatsAppClickParams {
  location: string;
  message?: string;
}

interface CallClickParams {
  location: string;
}

/**
 * Generic safe event dispatcher
 */
export function trackEvent(
  action: AnalyticsEventType | string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }

  // Also log in development for debugging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${action}:`, params);
  }
}

/**
 * Track successful form submission
 */
export function trackFormSubmit(params: FormSubmitParams): void {
  trackEvent("form_submit", {
    event_category: "Lead Capture",
    event_label: params.service ?? "General Enquiry",
    ...params,
  });
}

/**
 * Track clicks on WhatsApp conversion buttons
 */
export function trackWhatsAppClick(location: string, message?: string): void {
  const params: WhatsAppClickParams = { location };
  if (message) params.message = message;

  trackEvent("whatsapp_click", {
    event_category: "Conversion",
    event_label: location,
    ...params,
  });
}

/**
 * Track direct phone call clicks
 */
export function trackCallClick(location: string): void {
  const params: CallClickParams = { location };

  trackEvent("call_click", {
    event_category: "Conversion",
    event_label: location,
    ...params,
  });
}
