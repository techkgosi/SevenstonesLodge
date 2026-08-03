"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { LODGE, BOOKING_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-bush-green" />
      <div
        className="absolute inset-0 scale-110 opacity-[0.07] blur-md"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-charcoal/25 backdrop-blur-[2px]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact Us"
            description="Have a question or special request? Reach out — we'd love to hear from you."
            light
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 space-y-5">
            <a
              href={`tel:${LODGE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal/25 p-5 backdrop-blur-md transition-colors hover:bg-charcoal/35"
            >
              <div className="rounded-xl bg-gold-accent/20 p-3">
                <Phone className="h-6 w-6 text-gold-accent" />
              </div>
              <div>
                <p className="text-sm text-white/70">Phone</p>
                <p className="font-medium text-white">{LODGE.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${LODGE.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal/25 p-5 backdrop-blur-md transition-colors hover:bg-charcoal/35"
            >
              <div className="rounded-xl bg-gold-accent/20 p-3">
                <Mail className="h-6 w-6 text-gold-accent" />
              </div>
              <div>
                <p className="text-sm text-white/70">Email</p>
                <p className="font-medium text-white">{LODGE.email}</p>
              </div>
            </a>

            <a
              href={LODGE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal/25 p-5 backdrop-blur-md transition-colors hover:bg-charcoal/35"
            >
              <div className="rounded-xl bg-gold-accent/20 p-3">
                <WhatsAppIcon className="h-6 w-6 text-gold-accent" />
              </div>
              <div>
                <p className="text-sm text-white/70">WhatsApp</p>
                <p className="font-medium text-white">{LODGE.whatsapp}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal/25 p-5 backdrop-blur-md">
              <div className="rounded-xl bg-gold-accent/20 p-3">
                <MapPin className="h-6 w-6 text-gold-accent" />
              </div>
              <div>
                <p className="text-sm text-white/70">Address</p>
                <p className="font-medium text-white">{LODGE.address}</p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <Button href={BOOKING_URL} external variant="primary" size="lg">
                Book on Booking.com
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
