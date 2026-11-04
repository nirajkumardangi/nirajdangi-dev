import { ImageResponse } from "next/og";
import { getProjectBySlug, projects } from "@/data/projects";

export const alt = "Project Case Study Preview | Niraj Kumar Dangi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectOGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project?.title ?? "Case Study";
  const vertical = project?.vertical ?? "Web Development";
  const tagline = project?.tagline ?? "Custom website engineered for enquiries";
  const status = project?.status ?? "Concept";

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
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.03em" }}>
              Niraj
            </span>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: "#5B5BD6",
              }}
            />
            <span style={{ fontSize: "20px", color: "#64748B", marginLeft: "12px", fontFamily: "monospace" }}>
              / work / {slug}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              border: status === "Live" ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(255,255,255,0.12)",
              backgroundColor: status === "Live" ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.05)",
              fontSize: "13px",
              fontFamily: "monospace",
              color: status === "Live" ? "#4ADE80" : "#94A3B8",
            }}
          >
            <span>{status.toUpperCase()}</span>
          </div>
        </div>

        {/* Middle Project Brief */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "920px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontFamily: "monospace",
              letterSpacing: "0.12em",
              color: "#5B5BD6",
              textTransform: "uppercase",
            }}
          >
            {vertical}
          </span>

          <h1
            style={{
              fontSize: "58px",
              fontWeight: "700",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: "24px",
              lineHeight: 1.45,
              color: "#9494A3",
              margin: 0,
            }}
          >
            {tagline}
          </p>
        </div>

        {/* Bottom Metadata */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontSize: "14px",
            fontFamily: "monospace",
            color: "#9494A3",
            position: "relative",
          }}
        >
          <span>Niraj Kumar Dangi · Ranchi, Jharkhand</span>
          <span>Fast on Mobile · Fixed Pricing · 100% Code Handover</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

