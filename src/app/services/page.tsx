import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServicesGrid from "@/components/home/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | Meridian Logistics",
  description: "Core logistics services offered by Meridian Logistics.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Core Services" />
      <ServicesGrid />
    </>
  );
}
