import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Ocean Freight";
const description =
  "Full-container and LCL ocean freight solutions across major global trade lanes.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      href="/services/ocean-freight"
      title={title}
      eyebrow="Global Trade Lanes"
      heroImage="/images/banner/OCEAN-Freight.png"
      bannerHasText
      contentImage="/images/pics/OCEAN-Freight-1280X500.png"
      bullets={[
        {
          label: "FCL (FULL CONTAINER LOAD)",
          description:
            "Strategic alliances with premier carriers (Maersk, MSC, CMA CGM) ensuring space allocation during peak seasons.",
        },
        {
          label: "LCL (LESS-THAN-CONTAINER LOAD)",
          description:
            "In-house consolidation services for smaller volumes, reducing transit costs without compromising safety.",
        },
        {
          label: "BREAK-BULK & RO-RO",
          description:
            "Specialized handling for non-containerized cargo, vehicles, and heavy machinery.",
        },
        {
          label: "REEFER & CLIMATE CONTROL",
          description:
            "Integrated cold chain for ocean transit, maintaining strict thermal parameters for perishables and chemicals.",
        },
        {
          label: "PORT-TO-DOOR TRANSPARENCY",
          description:
            "End-to-end management including drayage, port handling, and final delivery.",
        },
      ]}
    />
  );
}
