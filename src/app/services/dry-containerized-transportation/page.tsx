import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Dry Containerized Transportation";
const description =
  "Standardized dry container transport for nationwide primary and secondary distribution.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      href="/services/dry-containerized-transportation"
      title={title}
      eyebrow="Nationwide Distribution"
      heroImage="/images/banner+img/Dry-Containerized-1.png"
      contentImage="/images/banner+img/Dry-Containerized-1280X500.png"
      bullets={[
        {
  label: "HIGH-CUBE 45FT FLEET",
  description:
    "Standardized, weather-proof containers designed for maximum cargo capacity and secure transportation.",
},
{
  label: "NATIONWIDE PRIMARY MOVEMENT",
  description:
    "Heavy-duty 18 and 22-wheeler fleet enabling efficient long-haul transportation between ports and industrial hubs.",
},
{
  label: "MILK-RUN & SECONDARY DISTRIBUTION",
  description:
    "Optimized multi-stop route planning for retail replenishment and reliable inter-city distribution.",
},
      ]}
    />
  );
}
