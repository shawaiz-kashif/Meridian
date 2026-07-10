import Container from "@/components/ui/Container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
}

export default function PageHero({ eyebrow, title }: PageHeroProps) {
  return (
    <section className="bg-navy-dark py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-red">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
          {title}
        </h1>
      </Container>
    </section>
  );
}
