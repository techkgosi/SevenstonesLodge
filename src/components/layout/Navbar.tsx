"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ease-out",
          scrolled ? "glass shadow-sm" : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={cn(
            "mx-auto flex min-h-[4.25rem] max-w-7xl items-center justify-between px-6 py-3 transition-[padding] duration-500 ease-out sm:min-h-0 lg:px-8",
            scrolled ? "sm:py-3.5" : "sm:py-5 lg:py-6",
          )}
        >
          <Link
            href="/"
            className="group block max-w-[calc(100%-3rem)] shrink-0 sm:max-w-[min(48%,13rem)] md:max-w-[min(42%,15rem)] lg:max-w-none"
            aria-label="Seven Stones — Home"
          >
            <Logo
              variant={scrolled ? "dark" : "light"}
              size="nav"
              priority
              className="max-w-full object-contain object-left"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-gold-accent",
                  scrolled ? "text-earth-brown" : "text-white/90",
                )}
              >
                {link.label}
              </a>
            ))}
            <Button href={BOOKING_URL} external size="sm" variant="primary">
              Book Your Stay
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "rounded-lg p-2 lg:hidden",
              scrolled ? "text-charcoal" : "text-white",
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gold-accent shadow-[0_2px_8px_rgba(184,144,82,0.4)] transition-opacity duration-500 ease-out sm:h-[2px]",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          aria-hidden
        />
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[min(320px,85vw)] flex-col bg-warm-ivory p-8 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex items-start justify-between gap-4">
                <Logo
                  variant="dark"
                  size="lg"
                  className="h-[6rem] w-auto max-w-[calc(100%-3rem)] object-contain object-left"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="shrink-0 rounded-lg p-2 text-charcoal"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-2xl text-charcoal transition-colors hover:text-bush-green"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-sandstone/70 p-3.5 text-earth-brown shadow-sm transition-colors hover:bg-gold-accent hover:text-white"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a
                  href={SOCIAL_LINKS[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-sandstone/70 p-3.5 text-earth-brown shadow-sm transition-colors hover:bg-gold-accent hover:text-white"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                </a>
              </div>

              <div className="mt-auto">
                <Button
                  href={BOOKING_URL}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Book Your Stay
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
