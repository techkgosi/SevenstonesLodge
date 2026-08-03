"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-medium uppercase tracking-[0.2em]",
            light ? "text-gold-accent" : "text-sage-green",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-earth-brown/80",
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-0.5 w-16 bg-gold-accent",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}
