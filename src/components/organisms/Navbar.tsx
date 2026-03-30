"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" aria-label="CM Digital inicio">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-sans text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button size="sm" render={<a href="#contacto" />}>
            Cotiza ahora
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-border overflow-hidden border-t transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-64" : "max-h-0 border-t-0",
        )}
      >
        <ul className="flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground font-sans text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              size="sm"
              className="w-full"
              render={<a href="#contacto" />}
              onClick={() => setMobileOpen(false)}
            >
              Cotiza ahora
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
