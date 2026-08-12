import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

const title = "Expo Logistics";
const description =
  "Delivering complete logistics support for exhibitions, trade shows, conferences, and corporate events.";

export const metadata: Metadata = {
  title: `${title} | Meridian Logistics`,
  description,
};

export default function Page() {
  return (
    <ServiceDetailTemplate
      title={title}
      eyebrow="Exhibition & Event"
      heroImage="/images/banner/Exhibition-Event-Logistics.png"
      bannerHasText
      contentImage="/images/pics/Exhibition-Event-Logistics-1280X500.png"
      intro="Delivering complete logistics support for exhibitions, trade shows, conferences, and corporate events."
      simpleList={[
        "Time-critical transportation",
        "Customs clearance",
        "On-site delivery and positioning",
        "Professional unpacking and installation",
        "Event logistics coordination",
        "Dismantling and return logistics",
      ]}
    />
  );
}
