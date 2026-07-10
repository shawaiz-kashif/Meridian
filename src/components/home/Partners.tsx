import Image from "next/image";
import Container from "@/components/ui/Container";
import { partners } from "@/lib/data";

export default function Partners() {
  return (
    <section className="bg-white py-16">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Partners
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partners.map(({ name, logo }) => (
            <div key={name} className="relative h-12 w-36">
              <Image
                src={logo}
                alt={name}
                fill
                sizes="144px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
