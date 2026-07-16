import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { findService } from "@/lib/data";

const service = findService("pharma-temperature-controlled")!;

export const metadata: Metadata = {
  title: `${service.title} | Meridian Logistics`,
  description: service.description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      href="/services/pharma-temperature-controlled"
      title={service.title}
      eyebrow="Life Sciences & Cold Chain"
      heroImage="/images/banner/Pharma-Temperature-Controlled.png"
      bannerHasText
      contentImage="/images/pics/Pharma-Temperature-Controlled-1280X500.png"
      bullets={[
        {
  label: "ZERO-DEVIATION COLD CHAIN",
  description:
    "Validated cold chain solutions ensuring product integrity from manufacturer to end-user for life sciences and perishables.",
},
{
  label: "TECHNICAL RANGE",
  description:
    "Precision temperature control from Ultra-Low (-30°C) to Ambient (15°C–25°C) for pharmaceuticals and biologics.",
},
{
  label: "IOT THERMAL MONITORING",
  description:
    "Real-time temperature monitoring with automated alerts and continuous data logging for GDP-compliant transportation.",
},
{
  label: "SPECIALIZED HANDLING",
  description:
    "Dedicated logistics expertise for vaccines, clinical trials, biologics, and high-value perishable products.",
},
      ]}
    />
  );
}
