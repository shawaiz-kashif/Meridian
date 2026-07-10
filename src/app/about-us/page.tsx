import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WhyMeridian from "@/components/home/WhyMeridian";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "About Us | Meridian Logistics",
  description: "Learn about Meridian Logistics and the Meridian Control Tower.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Our Features" />
      <WhyMeridian />
      <Testimonials />
    </>
  );
}
