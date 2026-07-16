import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import AboutContent from "@/components/about/AboutContent";
import LogisticStats from "@/components/about/LogisticStats";

export const metadata: Metadata = {
  title: "About Us | Meridian Logistics",
  description:
    "Meridian Logistics stands as a trusted partner for outsourcing and managing complex supply chains, operating with a Digital First culture.",
};

export default function AboutUsPage() {
  return (
    <>
      <ServiceHero title="About Us" image="/images/pics/About-Us.png" />
      <AboutContent />
      <LogisticStats />
    </>
  );
}
