"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { navItems, services } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="relative border-t border-gray-100 bg-white">
      <Container>
        <div className="flex items-center justify-between md:hidden">
          <span className="py-4 text-sm font-semibold text-navy-dark">Menu</span>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="p-4 text-navy-dark"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-12 lg:gap-20`}
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const isServices = item.href === "/services";

            return (
              <li
                key={item.href}
                className="border-t border-gray-100 md:border-t-0"
                onMouseEnter={isServices ? () => setServicesOpen(true) : undefined}
                onMouseLeave={isServices ? () => setServicesOpen(false) : undefined}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-0 py-3 md:px-0"
                >
                  <span
                    className={`mb-2 block h-0.5 w-8 ${
                      isActive ? "bg-navy-dark" : "bg-red"
                    }`}
                  />
                  <span
                    className={`block text-sm font-bold uppercase tracking-wide ${
                      isActive ? "text-navy-dark" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="block text-xs text-gray-400">{item.subtitle}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>

      <div
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
        className={`absolute inset-x-0 top-full z-40 hidden border-t border-white/10 bg-navy-dark shadow-2xl transition-all duration-200 md:block ${
          servicesOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <Container className="grid gap-10 py-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Core Services
            </p>
            <ul className="mt-4 divide-y divide-white/10">
              {services.map(({ title, icon }) => (
                <li key={title}>
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="group/item flex items-center gap-3 py-3"
                  >
                    <span className="relative h-[18px] w-[18px] shrink-0">
                      <Image
                        src={icon}
                        alt=""
                        fill
                        sizes="18px"
                        className="object-contain invert transition-opacity duration-200 opacity-60 group-hover/item:opacity-100"
                      />
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover/item:text-red">
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              onClick={() => setServicesOpen(false)}
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-red hover:text-red-dark"
            >
              View All Services
              <ChevronRight size={14} />
            </Link>
          </div>
          <div className="relative hidden overflow-hidden rounded-sm md:block">
            <Image
              src="/images/warehouseHero.png"
              alt="Meridian Logistics warehouse operations"
              fill
              sizes="480px"
              className="object-cover"
            />
          </div>
        </Container>
      </div>
    </nav>
  );
}
