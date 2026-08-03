"use client";

import {
  Waves,
  Flame,
  Flower2,
  Armchair,
  Wifi,
  Car,
} from "lucide-react";
import { FACILITIES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const iconMap = {
  pool: Waves,
  flame: Flame,
  flower: Flower2,
  armchair: Armchair,
  wifi: Wifi,
  car: Car,
};

export function Facilities() {
  return (
    <section id="facilities" className="bg-sandstone/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Amenities"
            title="Lodge Facilities"
            description="Everything you need for a restorative retreat, from sun-drenched pools to starlit braais."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility, index) => {
            const Icon = iconMap[facility.icon];
            return (
              <FadeIn key={facility.title} delay={index * 0.1}>
                <div
                  className={cn(
                    "group rounded-2xl border border-sandstone bg-warm-ivory/80 p-8",
                    "shadow-sm transition-all duration-500",
                    "hover:-translate-y-1 hover:border-sage-green/30 hover:shadow-lg hover:shadow-bush-green/5",
                  )}
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-bush-green/10 p-4 transition-colors group-hover:bg-bush-green/15">
                    <Icon className="h-7 w-7 text-bush-green" />
                  </div>
                  <h3 className="font-heading text-xl text-charcoal">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-earth-brown/75">
                    {facility.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
