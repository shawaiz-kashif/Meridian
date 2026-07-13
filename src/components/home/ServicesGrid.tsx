import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";

export default function ServicesGrid() {
  return (
    <section className="bg-gray-section py-20">
      <Container>
        <SectionLabel eyebrow="Services" title="What We Can Do For You" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ slug, title, description, icon, subServices }) => {
            const cardClassName =
              "group flex flex-col border border-gray-200 bg-white p-8 text-navy-dark transition-colors duration-300 hover:bg-navy hover:text-white";
            const content = (
              <>
                <div className="relative h-10 w-10">
                  <Image
                    src={icon}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain object-left transition-all duration-300 group-hover:invert"
                  />
                </div>
                <h3 className="mt-5 text-lg font-extrabold uppercase leading-snug">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-white/75">
                  {description}
                </p>
              </>
            );

            if (subServices && subServices.length > 0) {
              return (
                <div key={slug} className={cardClassName}>
                  {content}
                </div>
              );
            }

            return (
              <Link key={slug} href={`/services/${slug}`} className={cardClassName}>
                {content}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
