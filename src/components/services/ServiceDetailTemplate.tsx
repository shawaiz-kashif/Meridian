import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ServiceHero from "@/components/services/ServiceHero";
import MeridianValueProps from "@/components/services/MeridianValueProps";
import { serviceNavItems } from "@/lib/data";

interface Bullet {
  label: string;
  description: string;
}

interface RichSection {
  heading: string;
  paragraphs?: string[];
  bulletList?: Bullet[];
}

interface ServiceDetailTemplateProps {
  href: string;
  title: string;
  eyebrow: string;
  heroImage: string;
  contentImage: string;
  bullets?: Bullet[];
  richContent?: RichSection[];
}

/** Renders `**bold**` segments within a plain string as <strong>. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-extrabold text-navy-dark">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export default function ServiceDetailTemplate({
  href,
  title,
  eyebrow,
  heroImage,
  contentImage,
  bullets,
  richContent,
}: ServiceDetailTemplateProps) {
  return (
    <>
      <ServiceHero title={title} image={heroImage} />

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                {eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-dark md:text-3xl">
                {title}
              </h2>
              <hr className="mt-6 border-gray-200" />

              <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={contentImage}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 700px, 100vw"
                  className="object-cover"
                />
              </div>

              {richContent ? (
                <div className="mt-8 space-y-8">
                  {richContent.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-lg font-extrabold uppercase tracking-tight text-navy-dark">
                        {section.heading}
                      </h3>
                      {section.paragraphs?.map((paragraph, i) => (
                        <p
                          key={i}
                          className="mt-3 text-sm leading-relaxed text-gray-700"
                        >
                          <RichText text={paragraph} />
                        </p>
                      ))}
                      {section.bulletList && (
                        <ul className="mt-3 space-y-2">
                          {section.bulletList.map((bullet) => (
                            <li
                              key={bullet.label}
                              className="flex gap-2 text-sm leading-relaxed text-gray-700"
                            >
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red" />
                              <span>
                                <span className="font-extrabold text-navy-dark">
                                  {bullet.label}:
                                </span>{" "}
                                {bullet.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-8 space-y-5">
                  {bullets?.map((bullet) => (
                    <p key={bullet.label} className="text-sm leading-relaxed text-gray-700">
                      <span className="font-extrabold uppercase text-navy-dark">
                        {bullet.label}:
                      </span>{" "}
                      {bullet.description}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <aside>
              <h3 className="text-lg font-extrabold uppercase tracking-tight text-navy-dark">
                Services
              </h3>
              <ul className="mt-4 divide-y divide-gray-200 border-t border-gray-200">
                {serviceNavItems.map((item) => {
                  const isActive = item.href === href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block py-3 text-sm font-medium text-gray-600 transition-colors hover:text-red"
                      >
                        <span
                          className={
                            isActive
                              ? "border-b-2 border-navy-dark pb-1 text-navy-dark"
                              : undefined
                          }
                        >
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <MeridianValueProps />
    </>
  );
}
