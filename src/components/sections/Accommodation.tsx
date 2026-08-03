"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ACCOMMODATIONS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useHasHover } from "@/hooks/useMediaQuery";

export function Accommodation() {
  const hasHover = useHasHover();

  return (
    <section id="accommodation" className="texture-overlay bg-warm-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Stay With Us"
            title="Refined Accommodation"
            description="Unwind in peaceful thatched chalets, where tranquil gardens and a sparkling pool await."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {ACCOMMODATIONS.map((room, index) => (
            <FadeIn key={room.id} delay={index * 0.15}>
              <motion.div
                whileHover={hasHover ? { y: -6 } : undefined}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/accommodation/${room.id}`}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-lg shadow-earth-brown/5 transition-shadow duration-500 hover:shadow-xl hover:shadow-earth-brown/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-accent focus-visible:ring-offset-2"
                >
                  <article>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-earth-brown md:backdrop-blur-sm">
                        {room.price}
                      </span>
                    </div>

                    <div className="p-7">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-2xl text-charcoal">
                          {room.name}
                        </h3>
                        <span className="flex items-center gap-1 text-sm text-sage-green">
                          <Users className="h-4 w-4" />
                          {room.guests}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-earth-brown/75">
                        {room.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {room.features.map((feature) => (
                          <li
                            key={feature}
                            className="rounded-full bg-sandstone/60 px-3 py-1 text-xs font-medium text-earth-brown"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <span className="-ml-4 mt-5 inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-earth-brown transition-colors group-hover:bg-sandstone/60">
                        <span className="underline decoration-earth-brown/40 underline-offset-4 transition-colors group-hover:decoration-earth-brown">
                          See more
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
