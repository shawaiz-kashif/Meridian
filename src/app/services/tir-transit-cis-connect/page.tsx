import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { findService } from "@/lib/data";

const service = findService("tir-transit-cis-connect")!;

export const metadata: Metadata = {
  title: `${service.title} | Meridian Logistics`,
  description: service.description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={service.title}
      eyebrow="Cross-Border Road Transport"
      heroImage="/images/banner/CIS-Connect.png"
      bannerHasText
      contentImage="/images/pics/CIS-Connect-1280X500.png"
      intro="Accelerating international trade through secure TIR operations connecting Pakistan with China, Central Asia, CIS countries, and Europe."
      bulletsHeading="Benefits"
      simpleList={[
        "Internationally recognized customs security",
        "Reduced border delays",
        "Faster customs clearance",
        "Lower logistics costs",
        "Full IRU compliance",
        "Reliable cross-border transportation",
      ]}
    />
  );
}
