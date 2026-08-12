import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/SocialIcons";
import type {
  NavItem,
  SocialLink,
  ServiceItem,
  Testimonial,
  StatItem,
  FaqItem,
  Partner,
  FooterLink,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", subtitle: "Main page", href: "/" },
  { label: "Services", subtitle: "Core Services", href: "/services" },
  { label: "About Us", subtitle: "Our Features", href: "/about-us" },
  { label: "Contact Us", subtitle: "Contact Info", href: "/contact-us" },
];

export const globalPresence = ["Karachi", "Faisalabad", "Lahore", "CIS Region"];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
];

export const services: ServiceItem[] = [
  {
    slug: "global-freight-management",
    title: "International Freight Management",
    description:
      "Integrated Air and Ocean freight solutions with priority space and door-to-port transparency.",
    icon: "/images/icons/air-freight.png",
    subServices: [
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Ocean Freight", href: "/services/ocean-freight" },
    ],
  },
  {
    slug: "inland-powerhouse",
    title: "In-Land Powerhouse",
    description:
      "High-capacity 45ft standardized fleet for nationwide primary and secondary distribution.",
    icon: "/images/icons/road-freight.png",
    subServices: [
      {
        title: "Road Transportation",
        href: "/services/dry-containerized-transportation",
      },
      { title: "Reefer Transportation", href: "/services/reefer-transportation" },
    ],
  },
  {
    slug: "integrated-contract-logistics",
    title: "Integrated Solutions & Contract Logistics",
    description:
      "Smart warehousing and inventory diagnosis to optimize SKU velocity and fulfillment.",
    icon: "/images/icons/warehousing.png",
    subServices: [
      { title: "Warehousing", href: "/services/warehousing" },
      { title: "3PL/4PL Management", href: "/services/3pl-4pl-management" },
      { title: "Expo Logistics", href: "/services/exhibition-event-logistics" },
      { title: "Cold Chain Solutions", href: "/services/cold-chain-warehousing" },
    ],
  },
  {
    slug: "pharma-temperature-controlled",
    title: "Pharma & Temperature Controlled Logistics",
    description:
      "Zero-deviation temperature control (-35°C to +35°C) with real-time thermal monitoring for life sciences.",
    icon: "/images/icons/cold-chain.png",
  },
  {
    slug: "tir-transit-cis-connect",
    title: "TIR Regional Connectivity",
    description:
      "Accelerating international trade through secure TIR operations connecting Pakistan with China, Central Asia, CIS countries, and Europe.",
    icon: "/images/icons/ocean-freight.png",
  },
  {
    slug: "specialized-project-logistics",
    title: "Project Logistics",
    description:
      "Engineering specialized logistics solutions for complex industrial projects requiring meticulous planning and execution.",
    icon: "/images/icons/project-logistics.png",
  },
  {
    slug: "digital-vigilance-suite",
    title: "Technology",
    description:
      "Real-time visibility powered by dual dashcam monitoring, predictive ETA analytics, and geo-fencing across every shipment.",
    icon: "/images/icons/expo-logistics.png",
  },
  {
    slug: "specialized-mining-logistics",
    title: "Mining Logistics",
    description:
      "Supporting mining and energy sectors through continuous logistics operations, specialized fleets, and dedicated workforce management.",
    icon: "/images/icons/mining-logistics.png",
  },
];

export function findService(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}

export const whyMeridianPillars = [
  "Digitally Enabled",
  "Asset Optimized",
  "Customer First",
  "Industry Specialists",
  "Operational Excellence",
  "Future Ready",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Meridian Logistics has redefined our supply chain resilience. Their digital control tower provides the end-to-end transparency we need for high-stakes regional transits.",
    role: "Director of Supply Chain",
    company: "Global Manufacturing Firm",
  },
  {
    quote:
      "In the pharmaceutical sector, precision is non-negotiable. Meridian's validated cold chain and 24/7 thermal alerts ensure our life-saving products reach their destination with total integrity.",
    role: "Head of Operations",
    company: "Regional Healthcare Group",
  },
  {
    quote:
      "Meridian's robust fleet and mastery of the CIS corridors have been instrumental in our regional expansion. Their ability to manage complex transit with total visibility is unmatched.",
    role: "Logistics Manager",
    company: "Industrial Export Multinational",
  },
];

export const stats: StatItem[] = [
  { value: "43+", label: "Modern Fleet Vehicles" },
  { value: "45+", label: "Countries Reached" },
  { value: "24hrs", label: "Vigilance Monitoring" },
  { value: "100%", label: "GDP Compliance" },
];

export const faqs: FaqItem[] = [
  {
    question: "How can I monitor my shipment's status in real-time?",
    answer:
      "Use our Digital Control Tower portal. By entering your tracking ID, you gain 24/7 access to live GPS location, dual-dashcam feeds (for high-value transit), and predictive ETA metrics powered by our IoT vigilance suite.",
  },
  {
    question: "What temperature ranges do you support for pharma and perishables?",
    answer:
      "Our cold chain fleet maintains validated temperature ranges from -35°C to +35°C with continuous thermal monitoring and automated deviation alerts across the entire transit.",
  },
  {
    question: "Do you provide end-to-end handling for the CIS and Central Asian regions?",
    answer:
      "Yes. Our TIR Regional Connectivity corridors offer seamless cross-border transitions to Uzbekistan, Kazakhstan, and beyond, with full documentation and customs support handled in-house.",
  },
];

export const partners: Partner[] = [
  { name: "SECMC", logo: "/images/partners/partner3.png" },
  { name: "PPL", logo: "/images/partners/partner2.png" },
  { name: "Delivery Hero", logo: "/images/partners/partner1.png" },
];

export const footerLinks: FooterLink[] = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "SRO Compliance", href: "#" },
  { label: "Tracking Portal", href: "#" },
];
