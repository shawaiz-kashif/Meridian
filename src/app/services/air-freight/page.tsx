import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Air Freight";
const description =
  "Priority air freight capacity with door-to-port transparency for time-critical shipments.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={title}
      eyebrow="Priority & Specialized Uplift"
      heroImage="/images/banner/Air-Frieght.png"
      bannerHasText
      contentImage="/images/pics/Air-Frieght-1280X500.png"
      bullets={[
        {
          label: "Full & Part Charter",
          description:
            "Bespoke aircraft chartering for out-of-gauge (OOG) cargo or urgent humanitarian aid.",
        },
        {
          label: "On-Board Courier (OBC)",
          description:
            "Hand-carry services for high-value, time-critical documents or components.",
        },
        {
          label: "Intermodal Solutions",
          description: "Sea-Air and Air-Sea combinations to balance cost-efficiency with speed.",
        },
        {
          label: "Buyer's Consolidation",
          description:
            "Aggregating shipments from multiple suppliers into a single air-waybill to optimize landing costs.",
        },
        {
          label: "Hazardous & DGR Handling",
          description:
            "Specialized transport for Class 1–9 dangerous goods with IATA-certified handling.",
        },
      ]}
    />
  );
}
