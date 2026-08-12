import { Fragment } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ServiceHero from "@/components/services/ServiceHero";
import MeridianValueProps from "@/components/services/MeridianValueProps";

interface Bullet {
  label: string;
  description: string;
  subItems?: string[];
}

interface RichSection {
  heading: string;
  paragraphs?: string[];
  bulletList?: Bullet[];
}

interface ServiceDetailTemplateProps {
  title: string;
  eyebrow: string;
  heroImage: string;
  bannerHasText?: boolean;
  contentImage: string;
  intro?: string | string[];
  bulletsHeading?: string;
  bullets?: Bullet[];
  simpleList?: string[];
  richContent?: RichSection[];
}

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

function BulletList({ items }: { items: Bullet[] }) {
  return (
    <ul className="space-y-4">
      {items.map((bullet) => (
        <li key={bullet.label} className="flex gap-3 text-base leading-relaxed text-gray-700">
          <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-red" />
          <span>
            <span className="font-extrabold text-navy-dark">{bullet.label}:</span>{" "}
            {bullet.description}
            {bullet.subItems && (
              <ul className="mt-2 space-y-1.5">
                {bullet.subItems.map((sub) => (
                  <li key={sub} className="flex gap-2 text-sm leading-relaxed text-gray-600">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-gray-700">
          <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-red" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceDetailTemplate({
  title,
  eyebrow,
  heroImage,
  bannerHasText,
  contentImage,
  intro,
  bulletsHeading = "Services",
  bullets,
  simpleList,
  richContent,
}: ServiceDetailTemplateProps) {
  return (
    <>
      <ServiceHero title={title} image={heroImage} bannerHasText={bannerHasText} />

      <section className="bg-white py-16 md:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-navy-dark md:text-3xl">
            {title}
          </h2>
          <hr className="mt-6 border-gray-200" />

          {intro && (
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-gray-700">
              {(Array.isArray(intro) ? intro : [intro]).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={contentImage}
                  alt={title}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              {richContent ? (
                <div className="space-y-8">
                  {richContent.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-xl font-extrabold uppercase tracking-tight text-navy-dark">
                        {section.heading}
                      </h3>
                      {section.paragraphs?.map((paragraph, i) => (
                        <p key={i} className="mt-3 text-base leading-relaxed text-gray-700">
                          <RichText text={paragraph} />
                        </p>
                      ))}
                      {section.bulletList && (
                        <div className="mt-3">
                          <BulletList items={section.bulletList} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                (bullets || simpleList) && (
                  <div>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-navy-dark">
                      {bulletsHeading}
                    </h3>
                    <div className="mt-3">
                      {bullets ? (
                        <BulletList items={bullets} />
                      ) : (
                        simpleList && <SimpleList items={simpleList} />
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </Container>
      </section>

      <MeridianValueProps />
    </>
  );
}
