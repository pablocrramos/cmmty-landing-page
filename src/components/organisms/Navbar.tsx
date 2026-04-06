"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // On non-home pages the navbar is always opaque
  const transparent = isHome && atTop;

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const isAtTop = currentY < 10;
      const isScrollingUp = currentY < lastScrollY.current;

      setAtTop(isAtTop);
      setVisible(isAtTop || isScrollingUp);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
        transparent ? "bg-transparent" : "bg-white shadow-sm",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" aria-label="CM Digital inicio">
            <Logo
              variant={transparent ? "dark-bg" : "light-bg"}
              className="h-7"
            />
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "font-heading text-[1rem] font-normal tracking-tight transition-colors",
                    transparent
                      ? "text-white/90 hover:text-white"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <Button
            size="sm"
            className={"font-normal"}
            render={<a href="/contacto" />}
          >
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
          {mobileOpen ? (
            <XIcon
              className={cn(
                "size-6",
                transparent ? "text-white" : "text-foreground",
              )}
            />
          ) : (
            <ListIcon
              className={cn(
                "size-6",
                transparent ? "text-white" : "text-foreground",
              )}
            />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-64 border-t" : "max-h-0",
          transparent
            ? "border-white/20 bg-black/40 backdrop-blur-sm"
            : "border-border bg-white",
        )}
      >
        <ul className="flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "font-sans text-base font-medium",
                  transparent ? "text-white" : "text-foreground",
                )}
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
