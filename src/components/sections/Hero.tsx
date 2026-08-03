"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronDown, CalendarCheck } from "lucide-react";
import Image from "next/image";
import { BOOKING_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldAccentLine } from "@/components/ui/GoldAccentLine";
import { Logo } from "@/components/ui/Logo";
import { useMediaQuery, useSmoothScrollEffects } from "@/hooks/useMediaQuery";

export function Hero() {
  const enableScrollEffects = useSmoothScrollEffects();
  const enableMobileZoom = useMediaQuery(
    "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
  );
  const { scrollY } = useScroll();

  const rawImageY = useTransform(scrollY, [0, 600], [0, 80]);
  const rawOpacity = useTransform(scrollY, [0, 400], [1, 0.5]);
  const rawImageScale = useTransform(
    scrollY,
    [0, 260, 620],
    [1.02, 1.1, 1.04],
  );
  const imageY = useSpring(rawImageY, { stiffness: 80, damping: 28, mass: 0.4 });
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 28, mass: 0.4 });
  const imageScale = useSpring(rawImageScale, {
    stiffness: 72,
    damping: 26,
    mass: 0.35,
  });

  const imageMotionStyle = enableScrollEffects
    ? { y: imageY }
    : enableMobileZoom
      ? { scale: imageScale }
      : undefined;

  // Smooth scrolling is disabled globally on mobile, so drive it here instead.
  const handleExploreClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("accommodation");
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden md:min-h-[105vh]">
      <motion.div
        className="absolute inset-0 origin-center transform-gpu"
        style={imageMotionStyle}
      >
        {/* Mobile: peacock hero */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/hero.jpg"
            alt="Peacock at Seven Stones Resort"
            fill
            priority
            className="object-cover object-center brightness-[0.72]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/65 via-charcoal/50 to-charcoal/75" />
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>

        {/* Desktop: original sunset hero */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=85"
            alt="Golden African sunset over the bushveld"
            fill
            priority
            className="object-cover brightness-[0.8]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/42 to-charcoal/78" />
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-24 text-center sm:px-8"
        style={enableScrollEffects ? { opacity } : undefined}
      >
        <FadeIn delay={0.2}>
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-gold-accent">
            Welcome to
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex w-full flex-col items-center px-1 sm:px-0">
            <h1 className="sr-only">Seven Stones Resort, Spa & Adventure</h1>
            <Logo
              variant="light"
              size="hero"
              priority
              className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
            />
            <GoldAccentLine className="mt-6 sm:mt-8" />
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:mt-10 sm:text-xl">
            A destination where every stay is designed for comfort, relaxation
            and lasting memories.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={BOOKING_URL} external variant="primary" size="lg">
              <CalendarCheck className="h-5 w-5" />
              Book Your Stay
            </Button>
            <Button
              href="#accommodation"
              variant="outline"
              size="lg"
              className="hidden sm:inline-flex"
            >
              Explore the Lodge
            </Button>

            <motion.a
              href="#accommodation"
              onClick={handleExploreClick}
              className="mt-2 inline-flex items-center justify-center p-3 text-white/80 sm:hidden"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-label="Explore the lodge"
            >
              <ChevronDown className="h-7 w-7" />
            </motion.a>
          </div>
        </FadeIn>
      </motion.div>

      <motion.a
        href="#accommodation"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to explore"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
}
