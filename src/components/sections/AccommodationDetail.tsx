"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  CalendarCheck,
  Coffee,
  Flame,
  Home,
  Sofa,
  Sparkles,
  Trees,
  Users,
  UtensilsCrossed,
  Wifi,
  Wind,
} from "lucide-react";
import type { AmenityIcon } from "@/lib/constants";
import { ACCOMMODATIONS, BOOKING_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldAccentLine } from "@/components/ui/GoldAccentLine";

const amenityIcons: Record<
  AmenityIcon,
  React.ComponentType<{ className?: string }>
> = {
  bed: BedDouble,
  users: Users,
  bath: Bath,
  wind: Wind,
  coffee: Coffee,
  trees: Trees,
  flame: Flame,
  sofa: Sofa,
  utensils: UtensilsCrossed,
  wifi: Wifi,
  sparkles: Sparkles,
  home: Home,
};

type Room = (typeof ACCOMMODATIONS)[number];

export function AccommodationDetail({ room }: { room: Room }) {
  const otherRooms = ACCOMMODATIONS.filter((item) => item.id !== room.id);

  return (
    <main className="bg-warm-ivory">
      <section className="relative flex min-h-[52vh] items-end overflow-hidden pb-12 pt-28 sm:min-h-[48vh] sm:pb-14 md:min-h-[42vh] md:pb-12 lg:min-h-[38vh] lg:pb-14 lg:pt-32">
        <Image
          src={room.image}
          alt={room.name}
          fill
          priority
          className="object-cover brightness-[0.72]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/35 to-charcoal/80" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/#accommodation"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to accommodation
            </Link>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-accent">
              {room.details.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              {room.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
              {room.details.headline}
            </p>
            <GoldAccentLine className="mt-6" />
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-warm-ivory px-4 py-2 font-medium text-charcoal shadow-md">
                <Users className="h-4 w-4 text-bush-green" />
                Sleeps {room.guests}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-accent px-4 py-2 font-semibold text-white shadow-md shadow-gold-accent/30">
                {room.price}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage-green">
              About this stay
            </p>
            <h2 className="mt-3 font-heading text-3xl text-charcoal sm:text-4xl">
              A closer look at {room.name}
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gold-accent" />
            <p className="mt-6 text-base leading-relaxed text-earth-brown/85 sm:text-lg">
              {room.details.longDescription}
            </p>
            <p className="mt-4 text-base leading-relaxed text-earth-brown/75">
              {room.description}
            </p>
            <Button
              href={BOOKING_URL}
              external
              variant="primary"
              size="lg"
              className="mt-10"
            >
              <CalendarCheck className="h-5 w-5" />
              Book on Booking.com
            </Button>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl bg-sandstone/50 p-8">
              <h3 className="font-heading text-2xl text-charcoal">
                Room highlights
              </h3>
              <ul className="mt-6 space-y-5">
                {room.details.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity.icon];
                  return (
                    <li key={amenity.label} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-bush-green/10">
                        <Icon className="h-5 w-5 text-bush-green" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">
                          {amenity.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-earth-brown/75">
                          {amenity.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-sandstone/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage-green">
              Photo gallery
            </p>
            <h2 className="mt-3 font-heading text-3xl text-charcoal sm:text-4xl">
              More from {room.name}
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gold-accent" />
          </FadeIn>

          <div
            className={`mt-12 grid gap-4 ${
              room.details.gallery.length === 2
                ? "mx-auto max-w-4xl sm:grid-cols-2"
                : "sm:grid-cols-3"
            }`}
          >
            {room.details.gallery.map((src, index) => (
              <FadeIn key={src} delay={index * 0.06}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={src}
                    alt={`${room.name} photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes={
                      room.details.gallery.length === 2
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, 33vw"
                    }
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl text-charcoal sm:text-4xl">
              Explore other stays
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-gold-accent" />
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {otherRooms.map((other, index) => (
              <FadeIn key={other.id} delay={index * 0.1}>
                <Link
                  href={`/accommodation/${other.id}`}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-lg shadow-earth-brown/5 transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={other.image}
                      alt={other.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div>
                      <h3 className="font-heading text-2xl text-charcoal">
                        {other.name}
                      </h3>
                      <p className="mt-1 text-sm text-earth-brown/70">
                        {other.price}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-earth-brown">
                      See more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
