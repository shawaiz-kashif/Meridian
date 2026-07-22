import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Cold Chain Warehousing";
const description =
  "Temperature-validated warehousing for pharma, perishables, and life sciences inventory.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={title}
      eyebrow="Life Sciences Storage"
      heroImage="/images/banner/Cold-Chain.png"
      bannerHasText
      contentImage="/images/pics/Cold-Chain-1280X500.png"
      richContent={[
        {
          heading: "The Standard in Thermal Preservation",
          paragraphs: [
            "In the global supply chain, thermal stability is the foundation of product safety. Meridian Logistics provides state-of-the-art Cold Chain Warehousing designed to preserve the quality, safety, and shelf life of temperature-sensitive goods. Our facilities are more than just storage spaces; they are validated environments engineered for absolute thermal consistency.",
          ],
        },
        {
          heading: "Sector-Specific Storage Solutions",
          paragraphs: [
            "We serve a diverse range of industries that require specialized environmental variables. Our facilities are optimized for:",
          ],
          bulletList: [
            {
              label: "Pharmaceuticals & Life Sciences",
              description:
                "Validated storage for vaccines, biologics, and sensitive medicines requiring strict GDP compliance.",
            },
            {
              label: "Fresh & Perishable Produce",
              description:
                "Post-harvest cooling and storage to maximize the shelf life of fruits and vegetables.",
            },
            {
              label: "Dairy & Confectionery",
              description: "Consistent chilled environments to maintain texture, flavor, and safety.",
            },
            {
              label: "Frozen Goods & Protein",
              description: "Deep-freeze solutions for meat, poultry, and processed frozen food items.",
            },
            {
              label: "Specialized Chemicals",
              description:
                "Climate-controlled housing for industrial chemicals and volatile materials requiring stable temperatures.",
            },
          ],
        },
        {
          heading: "The Thermal Matrix: Validated Temperature Zones",
          paragraphs: [
            "Meridian Logistics operates multi-zone facilities to accommodate a broad spectrum of thermal requirements:",
          ],
          bulletList: [
            {
              label: "Ambient Control (15°C to 25°C)",
              description:
                "Ideal for general pharmaceuticals, specialized electronics, and high-value dry goods.",
            },
            {
              label: "Chilled Environment (2°C to 8°C)",
              description:
                "Optimized for fresh dairy, clinical trial samples, and temperature-sensitive biologics.",
            },
            {
              label: "Frozen Storage (-18°C or below)",
              description:
                "Deep-freeze capabilities for the long-term preservation of frozen food chains and industrial applications.",
            },
          ],
        },
        {
          heading: "Infrastructure Excellence: The Meridian Advantage",
          paragraphs: [
            "Our cold storage infrastructure is built on the pillars of redundancy and technical vigilance:",
          ],
          bulletList: [
            {
              label: "Advanced Refrigeration Systems",
              description:
                "High-efficiency cooling units designed for uniform temperature distribution across all racking levels.",
            },
            {
              label: "24/7 IoT Monitoring & Alarms",
              description:
                "Every zone is fitted with digital sensors that provide real-time data logging. Any thermal excursion triggers immediate automated alerts to our Control Tower.",
            },
            {
              label: "Insulated High-Performance Infrastructure",
              description:
                "Specialized thermal cladding and air-lock loading docks to prevent temperature loss during transit and handling.",
            },
            {
              label: "Power Redundancy",
              description:
                "Continuous operations are guaranteed through industrial-grade backup power systems, ensuring zero downtime in the event of grid failure.",
            },
            {
              label: "Specialized Cold Storage Racking",
              description:
                "Optimized airflow configurations within our racking systems to ensure every pallet receives consistent cooling.",
            },
            {
              label: "Hygienic & HSE-Compliant Operations",
              description:
                "Our warehouses adhere to strict international safety and hygiene protocols, ensuring a contamination-free environment for food and pharma-grade goods.",
            },
          ],
        },
      ]}
    />
  );
}
