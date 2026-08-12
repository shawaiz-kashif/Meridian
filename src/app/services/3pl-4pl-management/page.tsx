import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "3PL/4PL Management";
const description =
  "Scalable third-party and fourth-party logistics models, from warehousing services to complete end-to-end supply chain management.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={title}
      eyebrow="Scalable Contract Logistics"
      heroImage="/images/banner/Warehousing.png"
      bannerHasText
      contentImage="/images/pics/Warehousing-1280X500.png"
      bullets={[
        {
          label: "3PL & 4PL Services",
          description:
            "Integrated third-party and fourth-party logistics solutions ranging from warehouse operations to complete end-to-end supply chain outsourcing.",
        },
        {
          label: "Yard & Dock Management",
          description:
            "Optimized dock scheduling, vehicle movement planning, gate management, and yard operations to maximize warehouse productivity and reduce turnaround time.",
        },
        {
          label: "Importer of Record (IOR)",
          description:
            "Regulatory compliance and import management services enabling international companies to enter local markets seamlessly.",
        },
      ]}
    />
  );
}
