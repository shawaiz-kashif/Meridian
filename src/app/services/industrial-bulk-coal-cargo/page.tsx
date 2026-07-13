import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Industrial Bulk & Coal Cargo";
const description =
  "High-capacity bulk transport for coal and industrial commodities, from site to port.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      href="/services/industrial-bulk-coal-cargo"
      title={title}
      eyebrow="High-Capacity Bulk Transport"
      heroImage="/images/banner+img/Industrial-Bulk-Coal-Cargo.png"
      contentImage="/images/banner+img/Industrial-Bulk-Coal-Cargo-1280x500-1.png"
      bullets={[
        {
  label: "HIGH-VOLUME TRAILERS",
  description:
    "Specialized trailers for transporting coal, grains, and industrial raw materials with full compliance, on-time delivery, and end-to-end shipment visibility.",
},
{
  label: "PROJECT SITE DELIVERY",
  description:
    "Reliable bulk commodity transportation for energy, manufacturing, and large-scale industrial project sites.",
},
      ]}
    />
  );
}
