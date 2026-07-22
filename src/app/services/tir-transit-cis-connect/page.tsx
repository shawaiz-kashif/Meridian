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
      eyebrow="Central Asian Corridors"
      heroImage="/images/banner/CIS-Connect.png"
      bannerHasText
      contentImage="/images/pics/CIS-Connect-1280X500.png"
      richContent={[
        {
          heading: "Strategic Road Transport. Seamless Cross-Border Transitions.",
          paragraphs: [
            "Meridian Logistics provides a premier **TIR-enabled** pipeline connecting global maritime hubs to the high-growth markets of Central Asia. By leading with the **TIR (International Road Transport)** system, we eliminate the traditional bottlenecks of regional trade, offering a secure and accelerated route to Uzbekistan, Kazakhstan, Turkmenistan, Tajikistan, and Kyrgyzstan.",
          ],
        },
        {
          heading: "The Power of TIR: International Road Transport Excellence",
          paragraphs: [
            'In a region where border delays can halt commerce, the **TIR system** is our most powerful tool. As a licensed operator, Meridian Logistics utilizes this international customs transit framework to provide a "Sealed and Secure" passage across multiple frontiers.',
          ],
          bulletList: [
            {
              label: "TIR Sealed Security",
              description:
                "Goods move under a secure, internationally recognized customs seal from the point of origin to the final destination, minimizing the risk of cargo tampering.",
            },
            {
              label: "Minimal Border Intervention",
              description:
                "By utilizing the International Road Transport Union (IRU) standards, our fleet bypasses exhaustive customs checks at each border, drastically reducing transit times.",
            },
            {
              label: "Cost Efficiency",
              description:
                "Simplified procedures and reduced idle time at frontiers translate directly into lower landing costs for your cargo.",
            },
            {
              label: "Global Compliance",
              description:
                "Our operations are fully compliant with TIR Carnet protocols, facilitating smooth transit across Pakistan, China, the CIS region, and Europe.",
            },
          ],
        },
        {
          heading: "CIS Connect: Reaching The Heart Of Central Asia",
          paragraphs: [
            "While TIR is the engine, CIS Connect is the destination. We serve as the vital bridge between the Port of Karachi / Port Qasim and the land-locked economies of the Commonwealth of Independent States.",
            "**The Afghan Transit Corridor** We specialize in the Afghan Transit Corridor, leveraging the shortest land routes through Afghanistan to move cargo swiftly into Central Asia. This corridor is managed with high-level coordination to ensure safety and speed.",
            "**Multi-Modal Transshipment** For complex routes, we offer integrated Sea-to-Road and Road-to-Rail solutions. This agility allows us to navigate diverse terrains while maintaining the cost-benefits of a multimodal strategy.",
            "**Documentary Mastery** Navigating regional trade requires more than just trucks. Our experts handle the complete regulatory trail, from TIR Carnets and specialized permits to complex regional customs brokerage, ensuring your cargo stays in motion.",
          ],
        },
        {
          heading: "Operational Highlights & Specializations",
          bulletList: [
            {
              label: "Project Cargo & Heavy-Lift",
              description:
                "Dedicated expertise in moving heavy machinery and oversized equipment for the energy, oil, and mining sectors active in the CIS region.",
            },
            {
              label: "Reverse Logistics",
              description:
                "Facilitating the flow of agricultural exports and industrial raw materials from Central Asian markets back to global consumers.",
            },
            {
              label: "IoT Vigilance & Security",
              description:
                "All TIR transits are monitored via our Digital Control Tower. High-value shipments are supported by GPS-tracked convoys and dedicated security escorts across remote corridors.",
            },
          ],
        },
        {
          heading: "Why Meridian For TIR & CIS Logistics?",
          bulletList: [
            {
              label: "Local Intelligence",
              description:
                "Deep-rooted partnerships with authorities and regional logistics players within each member state ensure on-the-ground control.",
            },
            {
              label: "End-to-End Transparency",
              description:
                "Despite the geographic challenges, our IoT-enabled tracking ensures you have real-time visibility into every milestone, from the port to the final warehouse.",
            },
          ],
        },
      ]}
    />
  );
}
