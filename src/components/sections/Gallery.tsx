"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import Image from "next/image";
import {
  GALLERY_IMAGES,
  GALLERY_LIGHTBOX_IMAGES,
  GALLERY_SPAN_IMAGE,
} from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useHasHover } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

type GalleryImage = (typeof GALLERY_LIGHTBOX_IMAGES)[number];

function GalleryTile({
  image,
  index,
  hasHover,
  onOpen,
  className,
}: {
  image: GalleryImage;
  index: number;
  hasHover: boolean;
  onOpen: (index: number) => void;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl shadow-md",
        className,
      )}
      onClick={() => onOpen(index)}
      whileHover={hasHover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/30" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
          <ZoomIn className="h-6 w-6 text-white" />
        </span>
      </div>
    </motion.button>
  );
}

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hasHover = useHasHover();
  const spanIndex = GALLERY_LIGHTBOX_IMAGES.findIndex(
    (image) => image.id === GALLERY_SPAN_IMAGE.id,
  );

  const topRow = GALLERY_IMAGES.slice(0, 3);
  const lowerGrid = GALLERY_IMAGES.slice(3, 7);

  return (
    <section id="gallery" className="texture-overlay bg-warm-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Visual Journey"
            title="Life at Seven Stones"
            description="Moments from life at Seven Stones — gardens, pool, braai areas, and thatched chalets in the Vaal."
          />
        </FadeIn>

        {/* Mobile / tablet — lodge photos only (no desktop span peacock) */}
        <div className="masonry-grid mt-16 lg:hidden">
          {GALLERY_IMAGES.map((image, index) => (
            <FadeIn key={image.id} delay={index * 0.08} className="masonry-item">
              <GalleryTile
                image={image}
                index={index}
                hasHover={hasHover}
                onOpen={setLightboxIndex}
                className="aspect-[3/4]"
              />
            </FadeIn>
          ))}
        </div>

        {/* Desktop: 3 on top, then 2x2 with tall peacock spanning the right */}
        <div className="mt-16 hidden space-y-3 lg:block">
          <FadeIn>
            <div className="grid grid-cols-3 gap-3">
              {topRow.map((image, index) => (
                <GalleryTile
                  key={image.id}
                  image={image}
                  index={index}
                  hasHover={hasHover}
                  onOpen={setLightboxIndex}
                  className="aspect-[1/1]"
                />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="grid grid-cols-3 items-stretch gap-3">
              <div className="col-span-2 grid grid-cols-2 gap-3">
                {lowerGrid.map((image, index) => (
                  <GalleryTile
                    key={image.id}
                    image={image}
                    index={index + 3}
                    hasHover={hasHover}
                    onOpen={setLightboxIndex}
                    className="aspect-[1/1]"
                  />
                ))}
              </div>

              <GalleryTile
                image={GALLERY_SPAN_IMAGE}
                index={spanIndex}
                hasHover={hasHover}
                onOpen={setLightboxIndex}
                className="h-full min-h-full"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_LIGHTBOX_IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
