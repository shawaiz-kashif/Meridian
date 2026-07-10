import { ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const officeAddress =
  "Mehran Logistics Centre, NC-119 Deh Tore Superhighway, Near Toll Plaza, Karachi, Pakistan";
const officeCoords = { lat: 24.983414755391493, lng: 67.23020548836247 };

const details = [
  { icon: MapPin, label: "Location", value: "Mehran Logistics Centre, Karachi" },
  {
    icon: Mail,
    label: "Email",
    value: "info@meridianlogistics.com.pk",
    href: "mailto:info@meridianlogistics.com.pk",
  },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9:00am–5:30pm (PKT)" },
];

export default function ContactDetails() {
  return (
    <section className="bg-gray-section pb-16 md:pb-24">
      <Container>
        <div className="grid gap-5 sm:grid-cols-3">
          {details.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-4 border border-gray-200 bg-white p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red text-white">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-sm text-gray-500">{label}</p>
                {href ? (
                  <a href={href} className="font-bold text-navy-dark hover:text-red">
                    {value}
                  </a>
                ) : (
                  <p className="font-bold text-navy-dark">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid overflow-hidden border border-gray-200 bg-white lg:grid-cols-2">
          <div className="p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Location
            </p>
            <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-navy-dark md:text-3xl">
              Office Address
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-gray-600">
              Visit our head office — centrally located near the Karachi port
              corridor and easy to reach from the Superhighway.
            </p>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Head Office — Karachi, Pakistan
              </p>
              <p className="mt-2 max-w-xs font-bold text-navy-dark">{officeAddress}</p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${officeCoords.lat},${officeCoords.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-navy px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-dark"
            >
              Get Directions
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="relative min-h-[320px]">
            <iframe
              title="Mehran Logistics Centre location"
              src={`https://www.google.com/maps?q=${officeCoords.lat},${officeCoords.lng}&z=16&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-navy-dark shadow-sm backdrop-blur-sm">
              <MapPin size={16} className="text-red" /> Mehran Logistics Centre
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
