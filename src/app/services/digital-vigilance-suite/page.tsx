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
      href="/services/digital-vigilance-suite"
      title={service.title}
      eyebrow="Real-Time Visibility"
      heroImage="/images/banner+img/The-Digital-Vigilance-Suite-1.png"
      contentImage="/images/banner+img/The-Digital-Vigilance-Suite-1280X500.png"
      bullets={[
        {
  label: "INTEGRATED CONTROL TOWER",
  description:
    "Centralized logistics visibility platform providing a 360-degree view of active shipments and operations.",
},
{
  label: "IOT & SENSOR INTEGRATION",
  description:
    "Real-time cargo monitoring through location tracking, door-open alerts, and impact sensors for high-value shipments.",
},
{
  label: "VIGILANCE (DUAL DASHCAMS)",
  description:
    "Enhanced fleet security with inward and outward-facing live camera monitoring to protect drivers and cargo integrity.",
},
{
  label: "PREDICTIVE ETA",
  description:
    "AI-powered analytics delivering accurate arrival predictions by accounting for traffic, border delays, and route conditions.",
},
      ]}
    />
  );
}
