"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-warm-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="left" className="hidden lg:block">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-earth-brown/10">
                <Image
                  src="/about-garden.jpg"
                  alt="Garden seating beneath the trees at Seven Stones"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 aspect-square w-48 overflow-hidden rounded-2xl shadow-xl shadow-earth-brown/20">
                <Image
                  src="/about-peacock.jpg"
                  alt="Peacock displaying its feathers"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <SectionHeading
              eyebrow="Our Story"
              title="About the Lodge"
              align="left"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-earth-brown/85">
              <p>
                Nestled along Barrage Road in Stefano Park AH, Vanderbijlpark,
                Seven Stones Resort offers an intimate escape where the calm of
                the Vaal unfolds just beyond your door — a peaceful lodge
                retreat only minutes from everyday convenience.
              </p>
              <p>
                Built with locally sourced timber and stone, our lodge honours
                the landscape it inhabits. Every detail — from the hand-crafted
                furniture to the indigenous gardens — reflects our commitment to
                authentic bush hospitality.
              </p>
              <p>
                Whether you&apos;re wandering the gardens, relaxing by the
                pool, or sharing stories around the braai, Seven Stones is a
                place to slow down, breathe deeply, and reconnect with nature.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
