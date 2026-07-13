import { ClipboardCheck, Globe2, ShieldCheck, Truck } from "lucide-react";
import Container from "@/components/ui/Container";

const values = [
  {
    icon: ShieldCheck,
    heading: "Digital Vigilance",
    subheading: "24/7 Digital Vigilance",
    description:
      "Experience total transparency with our IoT-powered Control Tower. We provide real-time GPS tracking and live dual-dashcam feeds to ensure your cargo is always within sight.",
  },
  {
    icon: Truck,
    heading: "Asset-Backed Scale",
    subheading: "Robust Infrastructure",
    description:
      "With a modern fleet of 250+ vehicles and standardized weather-proof containers, we offer the capacity and reliability needed for high-volume nationwide distribution.",
  },
  {
    icon: Globe2,
    heading: "Regional Connectivity",
    subheading: "Strategic Global Access",
    description:
      "Master the complexities of the Central Asian corridor. Our CIS Connect service ensures seamless cross-border transit to land-locked markets through expert route management.",
  },
  {
    icon: ClipboardCheck,
    heading: "Certified Compliance",
    subheading: "Uncompromising Standards",
    description:
      "From GDP-compliant cold chains to ISO-certified operations, we adhere to the highest international safety standards to guarantee the integrity of every shipment.",
  },
];

export default function MeridianValueProps() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <Container>
        <h2 className="text-2xl font-extrabold uppercase tracking-tight text-navy-dark md:text-3xl">
          What You Get With <span className="text-red">Meridian Logistics.</span>
        </h2>
        <hr className="mt-6 border-gray-200" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map(({ icon: Icon, heading, subheading, description }) => (
            <div key={heading} className="border border-gray-200 bg-gray-section p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold uppercase tracking-tight text-navy-dark">
                {heading}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-400">
                {subheading}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
