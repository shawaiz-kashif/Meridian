import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { findService } from "@/lib/data";

const service = findService("specialized-project-logistics")!;

export const metadata: Metadata = {
  title: `${service.title} | Meridian Logistics`,
  description: service.description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={service.title}
      eyebrow="Heavy Lift & Project Cargo"
      heroImage="/images/banner/Specialized-Projectt.png"
      bannerHasText
      contentImage="/images/pics/Specialized-Project-1280X500.png"
      intro="Engineering specialized logistics solutions for complex industrial projects requiring meticulous planning and execution."
      bullets={[
        {
          label: "Heavy Lift & OOG Cargo",
          description:
            "Safe transportation of oversized industrial equipment including turbines, transformers, generators, and heavy machinery.",
        },
        {
          label: "Route Engineering",
          description:
            "Comprehensive route surveys, bridge analysis, permit management, and feasibility assessments.",
        },
        {
          label: "Regulatory Expertise",
          description:
            "Professional guidance on Pakistan's SRO regulations, customs procedures, and duty exemption opportunities.",
        },
        {
          label: "Ship Chartering & Stevedoring",
          description:
            "Complete vessel chartering, cargo handling, port operations, and project cargo management.",
        },
      ]}
    />
  );
}
