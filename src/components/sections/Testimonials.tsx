"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useHasHover } from "@/hooks/useMediaQuery";

export function Testimonials() {
  const hasHover = useHasHover();

  return (
    <section className="texture-overlay bg-warm-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Guest Stories"
            title="What Our Guests Say"
            description="Heartfelt words from travellers who have experienced the magic of Seven Stones."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.15}>
              <motion.blockquote
                className="relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg shadow-earth-brown/5"
                whileHover={hasHover ? { y: -4 } : undefined}
                transition={{ duration: 0.3 }}
              >
                <Quote className="h-8 w-8 text-gold-accent/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-earth-brown/80 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={
                        i < testimonial.rating
                          ? "h-4 w-4 fill-gold-accent text-gold-accent"
                          : "h-4 w-4 text-gold-accent/35"
                      }
                    />
                  ))}
                </div>
                <footer className="mt-4 border-t border-sandstone pt-4">
                  <cite className="not-italic">
                    <p className="font-heading text-lg text-charcoal">
                      {testimonial.name}
                    </p>
                  </cite>
                </footer>
              </motion.blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
