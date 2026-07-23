import Container from "@/components/ui/Container";
import { footerLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="mb-4 border-b-2 border-red pb-2 text-sm font-bold uppercase tracking-widest">
            About
          </h3>
          <p className="text-sm leading-relaxed text-white/70">
            Meridian Logistics is a performance-driven partner bridging global
            maritime routes with land-locked markets and nationwide distribution.
          </p>
        </div>

        <div>
          <h3 className="mb-4 border-b-2 border-red pb-2 text-sm font-bold uppercase tracking-widest">
            Links
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            {footerLinks.map((link) => (
              <li key={link.label} className="border-b border-white/10 pb-3">
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 border-b-2 border-red pb-2 text-sm font-bold uppercase tracking-widest">
            Contact
          </h3>
          <div className="space-y-4 text-sm leading-relaxed text-white/70">
            <p>
              <span className="font-bold text-white">Head Office:</span> Mehran Logistics
              Center | NC-119 Deh Tore Superhighway, Near Toll Plaza Karachi | Pakistan
              <br />
              <a
                href="tel:+923008230190"
                className="text-white/70 transition-colors hover:text-white"
              >
                +92 300 8230190
              </a>
            </p>
            <p>
              <span className="font-bold text-white">Regional Office:</span> Mezzanine
              Floor Munawar Tower II, Broadway Commercial, DHA Phase 8, Lahore | Pakistan.
              <br />
              <a
                href="tel:+923334446941"
                className="text-white/70 transition-colors hover:text-white"
              >
                +92 333 4446941
              </a>
            </p>
            <p>
              <span className="font-bold text-white">Branch Office:</span> Faisalabad,
              Sialkot, Multan
            </p>
          </div>
          <a
            href="mailto:info@meridianlogistics.com.pk"
            className="mt-4 inline-block text-sm text-white/70 transition-colors hover:text-white"
          >
            info@meridianlogistics.com.pk
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 md:flex-row">
          <p>Copyright: © 2026 Meridian Logistics. Precision and Power in Every Mile.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/60 transition-colors hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
