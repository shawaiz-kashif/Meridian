import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ServiceHero from "@/components/services/ServiceHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Us | Meridian Logistics",
  description: "Get in touch with Meridian Logistics for a tailored shipping quote.",
};

export default function ContactUsPage() {
  return (
    <>
      <ServiceHero title="Contact Us" image="/images/pics/Contact-Us.png" />
      <section className="bg-gray-section pb-8 pt-12 md:pt-16">
        <Container>
          <ContactForm />
        </Container>
      </section>
      <ContactDetails />
    </>
  );
}
