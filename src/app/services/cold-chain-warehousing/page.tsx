import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Cold Chain Solutions";
const description =
  "Protecting product integrity through validated cold chain infrastructure, temperature-controlled warehousing, real-time monitoring, and strict compliance with international quality standards.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={title}
      eyebrow="Temperature-Controlled Logistics"
      heroImage="/images/banner/Cold-Chain.png"
      bannerHasText
      contentImage="/images/pics/Cold-Chain-1280X500.png"
      intro="Protecting product integrity through validated cold chain infrastructure, temperature-controlled warehousing, real-time monitoring, and strict compliance with international quality standards."
      bullets={[
        {
          label: "Validation & Qualification",
          description:
            "Temperature-controlled fleet validated to maintain conditions ranging from -35°C to +35°C, supported by documented qualification and validation protocols.",
        },
        {
          label: "Cold Storage & Warehousing",
          description:
            "Modern temperature-controlled storage facilities for Frozen (-25°C to -18°C), Chilled (+2°C to +8°C), and Controlled Ambient (+15°C to +25°C) products, ensuring product integrity, regulatory compliance, and inventory visibility.",
        },
        {
          label: "Real-Time Monitoring",
          description:
            "Continuous IoT-enabled temperature and humidity monitoring with automated alerts, remote visibility, and complete audit trails.",
        },
        {
          label: "Pharmaceutical & Healthcare Logistics",
          description:
            "Validated transportation and storage solutions for vaccines, biologics, pharmaceuticals, diagnostics, clinical supplies, and other temperature-sensitive healthcare products.",
        },
        {
          label: "Regulatory Compliance",
          description:
            "Operations aligned with international Good Distribution Practice (GDP), quality assurance standards, and customer-specific compliance requirements.",
        },
      ]}
    />
  );
}
