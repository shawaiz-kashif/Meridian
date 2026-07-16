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
      href="/services/specialized-project-logistics"
      title={service.title}
      eyebrow="Engineering-Led Heavy-Lift"
      heroImage="/images/banner/Specialized-Projectt.png"
      bannerHasText
      contentImage="/images/pics/Specialized-Project-1280X500.png"
      bullets={[
        {
  label: "OOG & HEAVY-LIFT",
  description:
    "Engineering-driven transportation solutions for oversized and heavy cargo including turbines, boilers, and industrial equipment.",
},
{
  label: "ROUTE SURVEYS & FEASIBILITY",
  description:
    "Comprehensive route assessments covering roads, bridges, and infrastructure to ensure safe heavy-lift operations.",
},
{
  label: "SRO EXPERTISE (678 & 575)",
  description:
    "Specialized support with Pakistan’s SRO frameworks, enabling duty exemptions and regulatory compliance for clients.",
},
{
  label: "SHIP CHARTERING & STEVEDORING",
  description:
    "Direct vessel chartering and efficient port-side cargo handling solutions for dry bulk and project shipments.",
},
      ]}
    />
  );
}
