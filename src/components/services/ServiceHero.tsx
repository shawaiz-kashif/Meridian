import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface ServiceHeroProps {
  title: string;
  image: string;
}

export default function ServiceHero({ title, image }: ServiceHeroProps) {
  return (
    <section className="relative h-[280px] overflow-hidden md:h-[360px]">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/20 to-navy-dark/50"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col justify-end">
        <Container className="flex flex-wrap items-end justify-between gap-4 pb-8">
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          <p className="text-sm text-white/80">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / {title}
          </p>
        </Container>
      </div>
    </section>
  );
}
