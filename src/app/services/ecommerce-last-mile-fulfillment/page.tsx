import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "E-Commerce & Last-Mile Fulfillment";
const description =
  "Order fulfillment and last-mile delivery built for e-commerce volume and speed.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      href="/services/ecommerce-last-mile-fulfillment"
      title={title}
      eyebrow="Built For E-Commerce Speed"
      heroImage="/images/banner+img/ECOM-1.png"
      contentImage="/images/banner+img/ECOM-1280X500.png"
      bullets={[
        {
  label: "BESPOKE FULFILLMENT CENTERS",
  description:
    "Customized picking, packing, and kitting solutions designed for high-volume e-commerce fulfillment.",
},
{
  label: "REVERSE LOGISTICS",
  description:
    "Streamlined returns and exchange management to enhance customer satisfaction and protect brand reputation.",
},
      ]}
    />
  );
}
