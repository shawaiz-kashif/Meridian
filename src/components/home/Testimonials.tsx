import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials, stats } from "@/lib/data";

export default function Testimonials() {
  return (
    <section>
      <div className="relative overflow-hidden bg-red py-20">
        <Image
          src="/images/hero3.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-red-dark/90 to-red/80"
          aria-hidden="true"
        />
        <Container className="relative">
          <SectionLabel eyebrow="Testimonials" title="What Our Clients Say" light />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map(({ quote, role, company }) => (
              <div key={role} className="flex flex-col">
                <div className="flex-1 bg-white/15 p-6 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-white">{quote}</p>
                </div>
                <div className="flex items-stretch">
                  <span className="w-2 bg-navy" aria-hidden="true" />
                  <div className="bg-white px-4 py-3">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-navy-dark">
                      {role}
                    </p>
                    <p className="text-xs text-gray-500">{company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-navy">
        <Container>
          <div className="grid divide-y divide-white/10 py-10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-6 py-6 text-center first:pt-0 sm:py-0">
                <p className="text-4xl font-extrabold text-white">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
