import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Exhibition & Event Logistics";
const description =
  "End-to-end logistics for exhibitions, trade shows, and time-sensitive event cargo.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      href="/services/exhibition-event-logistics"
      title={title}
      eyebrow="Time-Sensitive Event Cargo"
      heroImage="/images/banner+img/Exhibition-Event-Logistics-1.png"
      contentImage="/images/banner+img/Exhibition-Event-Logistics-1280X500.png"
      bullets={[
        {
  label: "FLAWLESS EXECUTION",
  description:
    "Time-critical exhibition logistics with on-site storage, positioning, and seamless event delivery.",
},
{
  label: "INSTALLATION SERVICES",
  description:
    "Professional on-site teams for the safe unpacking and installation of sensitive exhibition materials.",
},
{
  label: "SITE MANAGEMENT",
  description:
    "Comprehensive traffic control and venue coordination to ensure timely setup and teardown operations.",
},
      ]}
    />
  );
}
