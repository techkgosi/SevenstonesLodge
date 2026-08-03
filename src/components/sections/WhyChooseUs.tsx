"use client";

import { MapPin, Trees, Heart, Leaf } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  "map-pin": MapPin,
  trees: Trees,
  heart: Heart,
  leaf: Leaf,
};

export function WhyChooseUs() {
  return (
    <section className="bg-sandstone/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="The Seven Stones Difference"
            title="Why Choose Us"
            description="Discover what sets our lodge apart and keeps guests returning year after year."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={item.title} delay={index * 0.12}>
                <div className="flex gap-5 rounded-2xl bg-warm-ivory p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-terracotta/10">
                    <Icon className="h-7 w-7 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-earth-brown/75">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
