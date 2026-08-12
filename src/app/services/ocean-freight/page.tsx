import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Ocean Freight";
const description =
  "Reliable international ocean transportation supported by strategic carrier partnerships, competitive pricing, and complete shipment visibility.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={title}
      eyebrow="End-to-End Ocean Freight Services"
      heroImage="/images/banner/OCEAN-Freight.png"
      bannerHasText
      contentImage="/images/pics/OCEAN-Freight-1280X500.png"
      intro="Reliable international ocean transportation supported by strategic carrier partnerships, competitive pricing, and complete shipment visibility from origin to destination."
      bullets={[
        {
          label: "Full Container Load (FCL)",
          description:
            "Guaranteed equipment availability and priority vessel space through long-term partnerships with leading global shipping lines.",
        },
        {
          label: "Less-than-Container Load (LCL)",
          description:
            "Cost-effective consolidation services for smaller shipments without compromising cargo safety or delivery schedules.",
        },
        {
          label: "Break Bulk & Ro-Ro",
          description:
            "Specialized handling for heavy machinery, project cargo, industrial equipment, vehicles, and oversized freight.",
        },
        {
          label: "Reefer & Temperature-Controlled Cargo",
          description:
            "Integrated cold-chain transportation maintaining precise temperature conditions for pharmaceuticals, food products, and sensitive chemicals.",
        },
        {
          label: "Door-to-Door Logistics",
          description:
            "Complete logistics management including customs clearance, port handling, inland transportation, and final delivery.",
        },
      ]}
    />
  );
}
