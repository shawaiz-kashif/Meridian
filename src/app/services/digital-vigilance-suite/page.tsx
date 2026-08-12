import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { findService } from "@/lib/data";

const service = findService("digital-vigilance-suite")!;

export const metadata: Metadata = {
  title: `${service.title} | Meridian Logistics`,
  description: service.description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={service.title}
      eyebrow="Real-Time Visibility"
      heroImage="/images/banner/The-Digital-Vigilance-Suite.png"
      bannerHasText
      contentImage="/images/pics/The-Digital-Vigilance-Suite-1280X500.png"
      bullets={[
        {
          label: "Integrated Control Tower",
          description: "A centralized hub providing a 360-degree view of all active shipments.",
        },
        {
          label: "IoT & Sensor Integration",
          description:
            "Real-time data on location, door-open alerts, and impact sensors for high-value cargo.",
        },
        {
          label: "Vigilance (Dual Dashcams)",
          description:
            "Enhanced security via inward and outward-facing live camera streams to ensure driver safety and cargo integrity.",
        },
        {
          label: "Predictive ETA",
          description:
            "AI-driven analytics to provide accurate arrival windows, accounting for traffic and border delays.",
        },
      ]}
    />
  );
}
