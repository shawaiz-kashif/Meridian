import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Road Transportation";
const description =
  "Comprehensive domestic transportation solutions supported by modern fleets, experienced drivers, GPS tracking, and optimized route planning.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={title}
      eyebrow="Reliable Road Freight Across Pakistan"
      heroImage="/images/banner/Road-Transport.png"
      bannerHasText
      contentImage="/images/pics/Road-Transport-1280X500.png"
      intro="Comprehensive domestic transportation solutions supported by modern fleets, experienced drivers, GPS tracking, and optimized route planning."
      bullets={[
        {
          label: "High-Cube Fleet",
          description:
            "Modern weatherproof container fleet ensuring maximum cargo protection, security, and utilization.",
        },
        {
          label: "Primary Transportation",
          description:
            "Heavy-duty 18-wheel and 22-wheel transportation connecting ports, warehouses, manufacturing facilities, and distribution centers nationwide.",
        },
        {
          label: "Secondary Distribution",
          description:
            "Customized milk-run operations and multi-drop distribution designed to improve delivery efficiency while reducing transportation costs.",
        },
      ]}
    />
  );
}
