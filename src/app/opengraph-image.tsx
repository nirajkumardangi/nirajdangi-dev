import { ImageResponse } from "next/og";

export const alt = "Niraj Kumar Dangi — Websites for Doctors, Creators & Event Brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0A0A0F",
          color: "#FAFAF9",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-0.03em" }}>Niraj</span>
            <div style={{ width: "8px", height: "8px", borderRadius: "9999px", backgroundColor: "#5B5BD6" }} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.12)",
              backgroundColor: "rgba(255,255,255,0.05)",
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#94A3B8",
            }}
          >
            <span>RANCHI, JHARKHAND · WEB &amp; AI</span>
          </div>
        </div>

        {/* Middle Core Pitch */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "14px", fontFamily: "monospace", letterSpacing: "0.1em", color: "#5B5BD6", textTransform: "uppercase" }}>
              STUDIO PRECISION V2
            </span>
          </div>

          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            Websites for doctors, creators and event brands, designed to get enquiries.
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.5,
              color: "#9494A3",
              margin: 0,
            }}
          >
            Fast on budget Android phones, clear in Hindi or English, and built to keep forever.
          </p>
        </div>

        {/* Bottom Trust Indicators */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontSize: "15px",
            fontFamily: "monospace",
            color: "#9494A3",
            position: "relative",
          }}
        >
          <span>1 Live Project in Ranchi</span>
          <span>·</span>
          <span>&lt;24h WhatsApp Response</span>
          <span>·</span>
          <span>Fixed Pricing</span>
          <span>·</span>
          <span>100% Code Handover</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
