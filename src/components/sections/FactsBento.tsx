"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section } from "@/components/atoms/Section";
import { Container } from "../atoms/Container";

// ─── Constants ────────────────────────────────────────────────────────────────

const GLOW_COLOR = "192, 24, 38"; // #c01826 — brand red
const PARTICLE_COUNT = 12;
const SPOTLIGHT_RADIUS = 300;
const MOBILE_BREAKPOINT = 768;

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "25 años", description: "Creciendo en la industria de impresión." },
  { value: "9,000+", description: "Equipos instalados en todo México." },
  { value: "Top 10", description: "Mayor rendimiento por Ricoh en 2009." },
];

const partnerLogos = [
  { src: "/assets/svgs/logos/aliados/ricoh.svg", alt: "Ricoh" },
  { src: "/assets/svgs/logos/aliados/zebra.svg", alt: "Zebra" },
  { src: "/assets/svgs/logos/aliados/lenovo.svg", alt: "Lenovo" },
  { src: "/assets/svgs/logos/aliados/sharp.svg", alt: "Sharp" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function createParticleElement(x: number, y: number): HTMLDivElement {
  const el = document.createElement("div");
  el.className = "facts-particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${GLOW_COLOR}, 1);
    box-shadow: 0 0 6px rgba(${GLOW_COLOR}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
}

function updateCardGlowProperties(
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number,
) {
  const rect = card.getBoundingClientRect();
  card.style.setProperty(
    "--glow-x",
    `${((mouseX - rect.left) / rect.width) * 100}%`,
  );
  card.style.setProperty(
    "--glow-y",
    `${((mouseY - rect.top) / rect.height) * 100}%`,
  );
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// ─── ParticleCard ─────────────────────────────────────────────────────────────

function ParticleCard({
  children,
  className,
  style,
  disableAnimations = false,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableAnimations?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticleElement(Math.random() * width, Math.random() * height),
    );
    particlesInitialized.current = true;
  }, []);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();

    memoizedParticles.current.forEach((particle, index) => {
      const id = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" },
        );
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);
      timeoutsRef.current.push(id);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const el = cardRef.current;

    const onEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
    };
    const onLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
    };
    const onClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDist = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height),
      );
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDist * 2}px;
        height: ${maxDist * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle,
          rgba(${GLOW_COLOR}, 0.25) 0%,
          rgba(${GLOW_COLOR}, 0.12) 30%,
          transparent 70%
        );
        left: ${x - maxDist}px;
        top: ${y - maxDist}px;
        pointer-events: none;
        z-index: 1000;
      `;
      el.appendChild(ripple);
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        },
      );
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("click", onClick);

    return () => {
      isHoveredRef.current = false;
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("click", onClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations]);

  return (
    <div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      style={style}
    >
      {children}
    </div>
  );
}

// ─── GlobalSpotlight ──────────────────────────────────────────────────────────

function GlobalSpotlight({
  gridRef,
  disableAnimations = false,
}: {
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
}) {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current) return;

    const spotlight = document.createElement("div");
    spotlight.style.cssText = `
      position: fixed;
      width: 700px;
      height: 700px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${GLOW_COLOR}, 0.10) 0%,
        rgba(${GLOW_COLOR}, 0.05) 20%,
        rgba(${GLOW_COLOR}, 0.02) 40%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const onMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;
      const section = gridRef.current.closest(".facts-bento-grid");
      const rect = section?.getBoundingClientRect();
      const inside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll(".facts-card");

      if (!inside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        cards.forEach((c) =>
          (c as HTMLElement).style.setProperty("--glow-intensity", "0"),
        );
        return;
      }

      const proximity = SPOTLIGHT_RADIUS * 0.5;
      const fadeDistance = SPOTLIGHT_RADIUS * 0.75;
      let minDist = Infinity;

      cards.forEach((card) => {
        const cardEl = card as HTMLElement;
        const r = cardEl.getBoundingClientRect();
        const dist = Math.max(
          0,
          Math.hypot(
            e.clientX - (r.left + r.width / 2),
            e.clientY - (r.top + r.height / 2),
          ) -
            Math.max(r.width, r.height) / 2,
        );
        minDist = Math.min(minDist, dist);

        const intensity =
          dist <= proximity
            ? 1
            : dist <= fadeDistance
              ? (fadeDistance - dist) / (fadeDistance - proximity)
              : 0;
        updateCardGlowProperties(
          cardEl,
          e.clientX,
          e.clientY,
          intensity,
          SPOTLIGHT_RADIUS,
        );
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDist <= proximity
          ? 0.8
          : minDist <= fadeDistance
            ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gridRef.current
        ?.querySelectorAll(".facts-card")
        .forEach((c) =>
          (c as HTMLElement).style.setProperty("--glow-intensity", "0"),
        );
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations]);

  return null;
}

// ─── FactsBento ───────────────────────────────────────────────────────────────

export function FactsBento() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();

  const cardClass =
    "facts-card flex flex-col justify-between rounded-[0.38rem] p-7 bg-white border border-[#dde2e5] transition-all duration-300 ease-in-out hover:-translate-y-0.5";

  const cardStyle = {
    "--glow-x": "50%",
    "--glow-y": "50%",
    "--glow-intensity": "0",
    "--glow-radius": "200px",
  } as React.CSSProperties;

  return (
    <Section variant="light-gray">
      <>
        <style>{`
          .facts-card {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
          }
          .facts-card::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 2px;
            background: radial-gradient(
              var(--glow-radius) circle at var(--glow-x) var(--glow-y),
              rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.65)) 0%,
              rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.3)) 30%,
              transparent 60%
            );
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
                          linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box,
                  linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            z-index: 1;
          }
          .facts-card:hover {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06),
                        0 0 24px rgba(${GLOW_COLOR}, 0.08);
          }
        `}</style>

        <GlobalSpotlight gridRef={gridRef} disableAnimations={isMobile} />

        <Container>
          <div
            ref={gridRef}
            className="facts-bento-grid grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Row 1 — stat cards */}
            {stats.map((stat, i) => (
              <ParticleCard
                key={stat.value}
                className={cn(
                  cardClass,
                  "min-h-44",
                  i === 2 && "sm:col-span-2 lg:col-span-1",
                )}
                style={cardStyle}
                disableAnimations={isMobile}
              >
                <span className="font-heading text-4xl leading-none font-bold lg:text-5xl">
                  {stat.value}
                </span>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </ParticleCard>
            ))}

            {/* Row 2 — wide card: aliados */}
            <ParticleCard
              className={cn(cardClass, "sm:col-span-2 lg:col-span-2")}
              style={cardStyle}
              disableAnimations={isMobile}
            >
              <p className="max-w-lg text-base leading-snug font-medium">
                Contamos con los mejores aliados tecnológicos en la industria.
              </p>
              <div className="mt-8 grid grid-cols-4 gap-3">
                {partnerLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="border-border flex items-center justify-center rounded-lg border bg-[#fbfbfb] p-4"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={32}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </ParticleCard>

            {/* Row 2 — narrow card: value prop */}
            <ParticleCard
              className={cn(cardClass, "min-h-44 sm:col-span-2 lg:col-span-1")}
              style={cardStyle}
              disableAnimations={isMobile}
            >
              <p className="text-base leading-snug font-medium">
                Simplificamos tus espacios, así tú solo te preocupas por lo
                importante.
              </p>
            </ParticleCard>
          </div>
        </Container>
      </>
    </Section>
  );
}
