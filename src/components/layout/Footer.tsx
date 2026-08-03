import { MapPin, Mail, Phone } from "lucide-react";
import { WhatsAppIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { BOOKING_URL, LODGE, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo
              variant="light"
              size="lg"
              className="h-[4.75rem] sm:h-[5.25rem] md:h-24"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A sanctuary of calm along the Vaal, where luxury meets nature.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={LODGE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-gold-accent"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-gold-accent"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-accent" />
                <span>{LODGE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-accent" />
                <a
                  href={`tel:${LODGE.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold-accent"
                >
                  {LODGE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-accent" />
                <a
                  href={`mailto:${LODGE.email}`}
                  className="transition-colors hover:text-gold-accent"
                >
                  {LODGE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-gold-accent" />
                <a
                  href={LODGE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-accent"
                >
                  {LODGE.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Book Your Escape
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Reserve your stay through Booking.com for the best rates and
              flexible cancellation options.
            </p>
            <Button
              href={BOOKING_URL}
              external
              variant="primary"
              size="md"
              className="mt-6"
            >
              Book on Booking.com
            </Button>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs text-white/40">
            &copy; {currentYear} {LODGE.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
