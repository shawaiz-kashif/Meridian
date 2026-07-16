import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Warehousing & 3PL/4PL Management";
const description =
  "Smart warehousing and inventory management to optimize SKU velocity and fulfillment.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      href="/services/warehousing-3pl-4pl-management"
      title={title}
      eyebrow="Smart Warehousing"
      heroImage="/images/banner/Warehousing.png"
      bannerHasText
      contentImage="/images/pics/Warehousing-1280X500.png"
      bullets={[
       {
  label: "INVENTORY DIAGNOSIS",
  description:
    "Comprehensive inventory analysis including stock aging and SKU velocity to improve cash flow and inventory efficiency.",
},
{
  label: "3PL & 4PL MODELS",
  description:
    "Scalable logistics solutions ranging from warehousing services to complete end-to-end supply chain management.",
},
{
  label: "YARD & DOCK MANAGEMENT",
  description:
    "Optimized trailer spotting and dock scheduling to reduce turnaround times and maximize operational efficiency.",
},
{
  label: "IOR (IMPORTER OF RECORD)",
  description:
    "End-to-end importer of record services, ensuring legal, regulatory, and tax compliance for seamless market entry.",
},
      ]}
    />
  );
}
