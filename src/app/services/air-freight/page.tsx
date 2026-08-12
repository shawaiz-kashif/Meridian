import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Air Freight";
const description =
  "Delivering speed, reliability, and complete visibility for time-critical shipments across the globe.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={title}
      eyebrow="Global Air Freight Solutions"
      heroImage="/images/banner/Air-Frieght.png"
      bannerHasText
      contentImage="/images/pics/Air-Frieght-1280X500.png"
      intro="Delivering speed, reliability, and complete visibility for time-critical shipments across the globe. Our extensive airline partnerships and experienced logistics professionals ensure your cargo reaches its destination safely and on schedule."
      bullets={[
        {
          label: "Full & Part Charter",
          description:
            "Dedicated aircraft charter solutions for oversized cargo, urgent humanitarian relief, oil & gas equipment, and mission-critical deliveries with flexible scheduling.",
        },
        {
          label: "Intermodal Solutions",
          description:
            "Seamless Sea-Air and Air-Sea transportation strategies that optimize transit time while reducing logistics costs.",
        },
        {
          label: "Buyer's Consolidation",
          description:
            "Consolidate cargo from multiple suppliers into a single shipment, minimizing freight costs, simplifying customs clearance, and improving supply chain efficiency.",
        },
        {
          label: "Dangerous Goods (DGR) Handling",
          description:
            "Certified transportation of hazardous materials (Classes 1–9) in full compliance with IATA regulations, ensuring maximum safety and regulatory adherence.",
        },
      ]}
    />
  );
}
