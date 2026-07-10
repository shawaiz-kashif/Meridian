import Image from "next/image";
import Container from "@/components/ui/Container";
import { whyMeridianPoints } from "@/lib/data";

export default function WhyMeridian() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Why Meridian
        </p>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <Image
              src="/images/controltower1.jpg"
              alt="Meridian Logistics control tower team monitoring live shipment dashboards"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-navy-dark md:text-3xl">
              The Meridian Control Tower
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We provide &ldquo;Total Visibility&rdquo; through an integrated
              digital culture. We eliminate supply chain blind spots through
              technical vigilance.
            </p>

            <ul className="mt-6 space-y-4">
              {whyMeridianPoints.map(({ title, description }) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red" />
                  <p className="text-sm leading-relaxed text-gray-600">
                    <span className="font-bold text-navy-dark">{title}:</span>{" "}
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
