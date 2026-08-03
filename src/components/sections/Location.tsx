"use client";

import { MapPin, Navigation, Clock } from "lucide-react";
import { LODGE } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppleIcon } from "@/components/ui/SocialIcons";

export function Location() {
  const { lat, lng } = LODGE.coordinates;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  const appleMapsUrl = `https://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`;
  const wazeUrl = `https://waze.com/ul?ll=${lat}%2C${lng}&navigate=yes`;

  return (
    <section id="location" className="bg-warm-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Find Us"
            title="Our Location"
            description="Peacefully set along Barrage Road in Vanderbijlpark — close to the Vaal, yet only a short drive from Shopping, Dining and Johannesburg."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center space-y-8 rounded-3xl bg-sandstone/50 p-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-bush-green/10">
                  <MapPin className="h-6 w-6 text-bush-green" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-charcoal">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-earth-brown/75">
                    {LODGE.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-bush-green/10">
                  <Navigation className="h-6 w-6 text-bush-green" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-charcoal">
                    Getting Here
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-earth-brown/75">
                    Just 10 minutes from Vaal Mall. Take the R42 (Barrage Road)
                    towards Barrage/Loch Vaal. Continue along Barrage Road until
                    you reach Stefano Park AH. Seven Stones Resort is located at
                    Plot 23, Stefano Park AH with clear signage at the entrance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-bush-green/10">
                  <Clock className="h-6 w-6 text-bush-green" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-charcoal">
                    Travel Times
                  </h3>
                  <ul className="mt-1 space-y-1 text-sm text-earth-brown/75">
                    <li>Vaal Mall: ~10 minutes</li>
                    <li>Emerald Casino: ~15 minutes</li>
                    <li>Johannesburg: ~1 hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-earth-brown/10">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Seven Stones Resort location on Google Maps"
                className="w-full grayscale-[20%] contrast-[1.05]"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-bush-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#334a38]"
              >
                <Navigation className="h-4 w-4" />
                Open in Waze
              </a>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-earth-brown/20 bg-warm-ivory px-6 py-3 text-sm font-medium text-earth-brown transition-colors hover:bg-sandstone/60"
                >
                  <AppleIcon className="h-4 w-4" />
                  Open in Maps
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-earth-brown/20 bg-warm-ivory px-6 py-3 text-sm font-medium text-earth-brown transition-colors hover:bg-sandstone/60"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
