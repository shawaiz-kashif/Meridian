import Container from "@/components/ui/Container";

const coreValues = [
  {
    number: "01",
    title: "Customer First",
    description:
      "We place our customers at the center of everything we do, consistently striving to understand, anticipate, and exceed their expectations.",
  },
  {
    number: "02",
    title: "People, Our Greatest Asset",
    description:
      "We respect, value, and care for our people, fostering a culture of empowerment, collaboration, growth, and mutual respect.",
  },
  {
    number: "03",
    title: "Compliance & Accountability",
    description:
      "We conduct our business in full compliance with all applicable laws, regulations, and ethical standards, ensuring accountability in every action.",
  },
  {
    number: "04",
    title: "Integrity & Honesty",
    description:
      "We uphold the highest standards of integrity, honesty, and transparency in all our dealings with customers, employees, partners, shareholders, and communities.",
  },
  {
    number: "05",
    title: "Excellence Through Innovation",
    description:
      "We continuously improve our processes and embrace technology and innovation to deliver superior supply chain solutions and sustainable value.",
  },
];

export default function AboutContent() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          About Us
        </p>
        <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-dark md:text-3xl">
          Reliability At Scale
        </h2>
        <hr className="mt-6 border-gray-200" />
        <p className="mt-6 text-base leading-relaxed text-gray-700">
          Meridian Logistics stands as a trusted partner for outsourcing and managing complex
          supply chains. We operate with a &ldquo;Digital First&rdquo; culture, ensuring that
          every movement is tracked, every asset is optimized, and every delivery is secure.
        </p>

        <h3 className="mt-12 text-xl font-extrabold uppercase tracking-tight text-navy-dark">
          Vision
        </h3>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          To be the most trusted supply chain partner, delivering reliable, efficient, and
          transparent logistics solutions through empowered people, optimized processes, and
          seamless technology integration.
        </p>

        <h3 className="mt-12 text-xl font-extrabold uppercase tracking-tight text-navy-dark">
          Core Values
        </h3>
      </Container>

      <Container>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map(({ number, title, description }) => (
            <div key={number} className="border border-gray-200 bg-white p-6">
              <span className="text-sm font-extrabold text-red">{number}</span>
              <h4 className="mt-3 text-base font-extrabold uppercase leading-snug text-navy-dark">
                {title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
