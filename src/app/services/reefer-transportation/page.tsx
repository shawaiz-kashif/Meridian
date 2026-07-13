import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Reefer Transportation";
const description =
  "Temperature-controlled reefer transport for perishable and sensitive cargo.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      href="/services/reefer-transportation"
      title={title}
      eyebrow="Temperature-Controlled Transit"
      heroImage="/images/ReeferHero.png"
      contentImage="/images/ReeferHero.png"
      bullets={[
        {
  label: "VALIDATION & VERIFICATION",
  description:
    "Fleet validated to maintain temperatures ranging from -35°C to +35°C for sensitive cargo.",
},
{
  label: "REAL-TIME THERMAL MONITORING",
  description:
    "Continuous temperature tracking with automated alerts to ensure cold chain integrity.",
},
{
  label: "PHARMA-GRADE LOGISTICS",
  description:
    "Validated reefer units purpose-built for the safe transportation of pharmaceuticals and vaccines.",
},
      ]}
    />
  );
}
