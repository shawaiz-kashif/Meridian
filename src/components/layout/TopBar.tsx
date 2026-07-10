import Container from "@/components/ui/Container";
import { globalPresence, socialLinks } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="hidden border-b border-gray-100 bg-white md:block">
      <Container className="flex items-center justify-between py-2 text-xs text-gray-500">
        <p>
          Global Presence:{" "}
          {globalPresence.map((place, index) => (
            <span key={place}>
              <span className="text-gray-600">{place}</span>
              {index < globalPresence.length - 1 && (
                <span className="mx-2 text-gray-300">|</span>
              )}
            </span>
          ))}
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-300 transition-colors hover:text-red"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
