import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import HeaderInfo from "@/components/layout/HeaderInfo";
import TopBar from "@/components/layout/TopBar";
import Nav from "@/components/layout/Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <TopBar />
      <Container className="flex h-28 items-center justify-between">
        <Logo />
        <div className="flex items-center gap-8">
          <HeaderInfo icon="clock" eyebrow="24/7" label="Mehran Logistics" />
          <HeaderInfo
            icon="pin"
            eyebrow="Mehran Logistics Centre"
            label="NC-119 Deh Tore"
          />
        </div>
      </Container>
      <Nav />
    </header>
  );
}
