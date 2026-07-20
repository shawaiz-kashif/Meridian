import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import Nav from "@/components/layout/Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container className="flex h-28 items-center">
        <Logo />
      </Container>
      <Nav />
    </header>
  );
}
