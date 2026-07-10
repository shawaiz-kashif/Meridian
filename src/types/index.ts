import type { ComponentType, SVGProps } from "react";

export type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  subtitle: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: SvgIcon;
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  role: string;
  company: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
