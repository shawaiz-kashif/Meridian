import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { findService } from "@/lib/data";

const service = findService("specialized-mining-logistics")!;

export const metadata: Metadata = {
  title: `${service.title} | Meridian Logistics`,
  description: service.description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={service.title}
      eyebrow="High-Performance Mining Supply Chain"
      heroImage="/images/banner/Industrial-Bulk-Coal-Cargo.png"
      bannerHasText
      contentImage="/images/pics/Industrial-Bulk-Coal-Cargo-1280x500.png"
      intro="Supporting mining and energy sectors through continuous logistics operations, specialized fleets, and dedicated workforce management."
      bulletsHeading="Key Capabilities"
      simpleList={[
        "24/7 uninterrupted logistics operations",
        "Dedicated fleet of heavy-duty dumpers",
        "Scalable transportation capacity",
        "900+ daily operational trips",
        "225+ trained logistics professionals",
        "Zero-downtime supply chain management for Independent Power Producers (IPPs)",
      ]}
    />
  );
}
