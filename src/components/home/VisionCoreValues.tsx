import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function VisionCoreValues() {
  return (
    <section className="bg-gray-section py-16 md:py-20">
      <Container>
        <SectionLabel eyebrow="Who We Are" title="Our Vision & Core Values" />
      </Container>

      <div className="mx-auto mt-12 max-w-[1680px] overflow-x-auto px-4 sm:px-6">
        <div className="min-w-[1240px] bg-white p-6 shadow-sm sm:p-10">
          <Image
            src="/images/Vision.png"
            alt="Vision: to be the most trusted and preferred supply chain partner, creating sustainable value through reliable, efficient, and transparent logistics solutions powered by exceptional people, world-class processes, and innovative technology. Core Values: Customer First, People Our Greatest Asset, Compliance & Accountability, Integrity & Honesty, Excellence Through Innovation."
            width={1600}
            height={458}
            className="h-auto w-full"
            sizes="1600px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
