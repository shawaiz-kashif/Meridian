import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Warehousing";
const description =
  "Transforming conventional warehousing into a smart, digitally connected supply chain through world-class infrastructure, advanced Warehouse Management Systems (WMS), optimized processes, and experienced logistics professionals.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={title}
      eyebrow="Intelligent Warehousing Solutions"
      heroImage="/images/banner/Warehousing.png"
      bannerHasText
      contentImage="/images/pics/Warehousing-1280X500.png"
      intro={[
        "Transforming conventional warehousing into a smart, digitally connected supply chain through world-class infrastructure, advanced Warehouse Management Systems (WMS), optimized processes, and experienced logistics professionals.",
        "Our scalable warehousing solutions deliver complete inventory visibility, operational efficiency, and seamless order fulfillment, enabling customers to reduce costs, improve service levels, and optimize working capital.",
      ]}
      bullets={[
        {
          label: "Inventory Optimization",
          description:
            "Advanced inventory planning and analytics to improve stock accuracy, increase inventory turnover, reduce ageing inventory, and optimize working capital.",
        },
        {
          label: "Warehousing & Distribution",
          description: "Comprehensive warehousing services including:",
          subItems: [
            "Ambient Warehousing",
            "Dedicated & Multi-user Warehousing",
            "Temperature-Controlled Warehousing",
            "Cold Storage Facilities",
            "Cross Docking",
            "Nationwide Distribution",
            "Value Added Services (VAS)",
          ],
        },
      ]}
    />
  );
}
