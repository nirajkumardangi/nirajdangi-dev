import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  enquirySchema,
  BUSINESS_TYPES,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
} from "@/lib/schemas/enquiry";

// Simple in-memory rate limiting map
// Key: IP string, Value: { count: number, resetTime: number }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 submissions
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many submissions received from this network. Please reach out directly on WhatsApp.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request JSON
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request payload" },
        { status: 400 }
      );
    }

    // 3. Honeypot check (Spam bot detection)
    if (body.company_website && String(body.company_website).trim().length > 0) {
      // Silently accept without sending email
      console.warn(`[Spam Bot Neutralized] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json({
        success: true,
        message: "Your enquiry has been received.",
      });
    }

    // 4. Validate using shared Zod schema
    const validation = enquirySchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: "Validation failed. Please check the form fields.",
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Resolve human-readable labels
    const businessLabel =
      BUSINESS_TYPES.find((b) => b.value === data.businessType)?.label ||
      data.businessType;
    const serviceLabel =
      SERVICE_OPTIONS.find((s) => s.value === data.service)?.label ||
      data.service;
    const budgetLabel =
      BUDGET_OPTIONS.find((b) => b.value === data.budget)?.label ||
      data.budget;

    const sanitizedPhone = data.whatsapp.replace(/\D/g, "");
    const waDeepLink = `https://wa.me/${sanitizedPhone}`;
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const apiKey = process.env.RESEND_API_KEY;
    const targetEmail =
      process.env.CONTACT_EMAIL || "nirajkrdangi@gmail.com";

    // 5. Send Email via Resend if API key is provided
    if (apiKey && apiKey.trim().length > 0 && !apiKey.startsWith("re_xxx")) {
      const resend = new Resend(apiKey);

      const htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #FAFAF9; padding: 40px 20px; color: #0B0B0F;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid rgba(10,10,20,0.08); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
            
            <div style="background-color: #0B0B0F; padding: 24px 32px; color: #ffffff;">
              <span style="font-family: monospace; font-size: 11px; letter-spacing: 0.1em; color: #5B5BD6; text-transform: uppercase;">NIRAJ.ONLINE ENQUIRY</span>
              <h1 style="margin: 8px 0 0; font-size: 22px; font-weight: 700;">New Project Enquiry from ${data.name}</h1>
            </div>

            <div style="padding: 32px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #5C5C66; width: 35%;">Client Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 15px; font-weight: 600; color: #0B0B0F;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #5C5C66;">WhatsApp Number:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 15px; font-weight: 600; color: #0B0B0F;">
                    <a href="${waDeepLink}" style="color: #25D366; text-decoration: none; font-weight: bold;">${data.whatsapp} ↗ (Open WhatsApp)</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #5C5C66;">Email Address:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 14px; color: #0B0B0F;">
                    ${data.email ? `<a href="mailto:${data.email}" style="color: #5B5BD6; text-decoration: none;">${data.email}</a>` : '<span style="color: #8C8C99; font-style: italic;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #5C5C66;">Business Vertical:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 14px; color: #0B0B0F;">${businessLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #5C5C66;">Requested Service:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 14px; color: #5B5BD6; font-weight: 600;">${serviceLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #5C5C66;">Target Budget:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-size: 14px; color: #0B0B0F;">${budgetLabel}</td>
                </tr>
              </table>

              <div style="background-color: #FAFAF9; border: 1px solid #f0f0f2; border-radius: 10px; padding: 18px; margin-bottom: 24px;">
                <p style="margin: 0 0 6px; font-size: 11px; font-family: monospace; text-transform: uppercase; color: #5C5C66; letter-spacing: 0.05em;">Project Brief / Message:</p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #0B0B0F; white-space: pre-wrap;">${data.message}</p>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="${waDeepLink}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply on WhatsApp Now</a>
              </div>
            </div>

            <div style="background-color: #f7f7f8; padding: 16px 32px; border-top: 1px solid #f0f0f2; font-size: 11px; color: #8C8C99; font-family: monospace;">
              Received at ${timestamp} (IST) · IP: ${ip} · niraj.online lead capture
            </div>
          </div>
        </div>
      `;

      const fromAddress =
        process.env.RESEND_FROM_EMAIL ||
        (process.env.RESEND_FROM_DOMAIN
          ? `Niraj Kumar Dangi <hello@${process.env.RESEND_FROM_DOMAIN}>`
          : "niraj.online Enquiries <onboarding@resend.dev>");

      const { data: resendData, error: resendError } = await resend.emails.send({
        from: fromAddress,
        to: targetEmail,
        subject: `[New Enquiry] ${data.name} — ${businessLabel}`,
        html: htmlBody,
      });

      if (resendError) {
        console.error("[Resend Error]:", resendError);
      } else {
        console.log(`[Resend Delivered to ${targetEmail}]:`, resendData?.id);
      }

      // Optional auto-reply to client (only active if custom verified domain is set)
      if (
        data.email &&
        data.email.trim().length > 0 &&
        process.env.RESEND_FROM_DOMAIN
      ) {
        try {
          await resend.emails.send({
            from: `Niraj Kumar Dangi <hello@${process.env.RESEND_FROM_DOMAIN}>`,
            to: data.email,
            subject: `Enquiry received — niraj.online`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #FAFAF9; padding: 30px 16px; color: #0B0B0F;">
                <div style="max-width: 520px; margin: 0 auto; background: #ffffff; border: 1px solid rgba(10,10,20,0.08); border-radius: 12px; padding: 28px;">
                  <h2 style="font-size: 20px; font-weight: 700; margin-top: 0; color: #0B0B0F;">Hi ${data.name},</h2>
                  <p style="font-size: 15px; line-height: 1.6; color: #5C5C66;">
                    Thank you for reaching out regarding <strong>${serviceLabel}</strong>. I've received your requirements and will review them carefully.
                  </p>
                  <p style="font-size: 15px; line-height: 1.6; color: #5C5C66;">
                    You will get a direct WhatsApp reply with a recommended scope and fixed price within <strong>24 hours</strong>.
                  </p>
                  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f0f0f2;">
                    <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0B0B0F;">Niraj Kumar Dangi</p>
                    <p style="margin: 2px 0 0; font-size: 12px; color: #8C8C99;">Software Engineer · Ranchi, Jharkhand</p>
                  </div>
                </div>
              </div>
            `,
          });
        } catch (autoErr) {
          console.warn("[Auto-reply not delivered]:", autoErr);
        }
      }
    } else {
      // In dev or test mode when RESEND_API_KEY is not provisioned
      console.log(`[DEV / Simulated Lead Dispatch]
        Name: ${data.name}
        WhatsApp: ${data.whatsapp}
        Email: ${data.email || "N/A"}
        Business: ${businessLabel}
        Service: ${serviceLabel}
        Budget: ${budgetLabel}
        Message: ${data.message}
        IP: ${ip}
        Time: ${timestamp}
      `);
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully.",
    });
  } catch (error) {
    console.error("[POST /api/enquiry Internal Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
