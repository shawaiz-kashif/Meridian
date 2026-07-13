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
      href="/services/specialized-mining-logistics"
      title={service.title}
      eyebrow="Pit-To-Port Support"
      heroImage="/images/coalhero6.jpg"
      contentImage="/images/coalhero6.jpg"
      richContent={[
        {
          heading: "Project Spotlight: SECMC Thar Coal Block II",
          paragraphs: [
            "Meridian Logistics is proud to manage the critical supply chain operations at SECMC Thar Coal Block II—Pakistan's largest open-pit coal mine. This project represents a vital node in unlocking indigenous energy potential, and our role is to ensure the heartbeat of the nation's power supply never stops.",
          ],
        },
        {
          heading: "Operational Excellence: 24/7 Uninterrupted Haulage",
          paragraphs: [
            "We manage a high-performance logistics ecosystem designed for zero downtime. Our operations are engineered to meet the massive demand of Independent Power Producers (IPPs) with surgical precision.",
          ],
          bulletList: [
            {
              label: "Dynamic Fleet Management",
              description:
                "We maintain a dedicated fleet of 43 heavy-duty dumpers, with the capacity to scale fleet size dynamically based on daily dispatch requirements.",
            },
            {
              label: "Continuous Life-Cycle",
              description:
                "Our operations run 24 hours a day, 7 days a week, ensuring a constant, uninterrupted coal supply chain.",
            },
            {
              label: "High-Frequency Logistics",
              description:
                "We successfully manage 900 daily round trips, moving coal from silos to power plants with systematic efficiency.",
            },
            {
              label: "Specialized Workforce",
              description:
                "A dedicated team of 225 professionals operates on-site, managing complex logistics, mechanical maintenance, and ground coordination.",
            },
          ],
        },
        {
          heading: "Technical Vigilance & Safety",
          paragraphs: [
            'Mining environments demand the highest tiers of safety and technological integration. Meridian Logistics implements a "Zero-Harm" policy supported by smart infrastructure.',
          ],
          bulletList: [
            {
              label: "RFID Smart Scanning",
              description:
                "Every truck in our fleet is equipped with RFID scanning devices. These integrate seamlessly with weighbridge platform readers to automate data collection, ensure weight accuracy, and eliminate manual loopholes.",
            },
            {
              label: "HSE Compliance",
              description:
                "We have achieved full HSE (Health, Safety, and Environment) compliance through the rigorous implementation of international safety protocols and consistent third-party audits.",
            },
            {
              label: "Environmental Stewardship",
              description:
                "To manage the impact of heavy traffic, we conduct continuous road maintenance. Our water sprinklers operate round-the-clock to suppress road dust, protecting both our machinery and the local environment.",
            },
          ],
        },
        {
          heading: "Driving Social Impact: Women Empowerment",
          paragraphs: [
            "At the heart of the Thar project is a commitment to social transformation. Meridian Logistics is a pioneer in gender inclusivity within the heavy industrial sector.",
          ],
          bulletList: [
            {
              label: "Breaking Barriers",
              description:
                "We are proud to employ female dumper truck drivers, proving that precision and skill in mining logistics know no gender.",
            },
            {
              label: "Inclusion in Action",
              description:
                "By providing specialized training and a safe, professional environment, we are helping reshape the future of the industrial workforce in Pakistan.",
            },
          ],
        },
      ]}
    />
  );
}
