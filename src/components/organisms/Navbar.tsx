"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "/empresa", label: "Empresa" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < 10 || currentY < lastScrollY.current);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
        /* Mobile: solid white bar */
        "bg-white shadow-sm md:bg-transparent md:shadow-none",
      )}
    >
      {/* Desktop: floating island */}
      <div className="hidden md:flex md:justify-center md:px-6 md:pt-4">
        <nav className="flex h-14 w-full max-w-3xl items-center justify-between rounded-2xl bg-white px-3 pl-6 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-8">
            <Link href="/" aria-label="CM Digital inicio">
              <Logo variant="light-bg" className="h-6" />
            </Link>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-heading text-muted-foreground hover:text-foreground text-[0.9rem] font-normal tracking-tight transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Button size="sm" render={<a href="/contacto" />}>
            Cotiza ahora
          </Button>
        </nav>
      </div>

      {/* Mobile: full-width bar */}
      <nav className="flex h-16 items-center justify-between px-4 md:hidden">
        <Link href="/" aria-label="CM Digital inicio">
          <Logo variant="light-bg" className="h-7" />
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <XIcon className="text-foreground size-6" />
          ) : (
            <ListIcon className="text-foreground size-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-border overflow-hidden bg-white transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-64 border-t" : "max-h-0",
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
              render={<a href="/contacto" />}
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
