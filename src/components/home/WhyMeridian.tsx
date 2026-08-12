import Image from "next/image";
import Container from "@/components/ui/Container";
import { whyMeridianPillars } from "@/lib/data";

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
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              {whyMeridianPillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red" />
                  <span className="text-sm font-bold uppercase tracking-wide text-navy-dark">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xl font-extrabold uppercase leading-snug tracking-tight text-navy-dark md:text-2xl">
              Connecting Businesses.
              <br />
              Empowering Supply Chains.
              <br />
              <span className="text-red">Delivering Logistics Without Limits.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
