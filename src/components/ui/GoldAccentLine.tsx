import { cn } from "@/lib/utils";

interface GoldAccentLineProps {
  className?: string;
  variant?: "full" | "centered";
}

/** Decorative gold divider matching the Book Now button (#B89052) */
export function GoldAccentLine({
  className,
  variant = "centered",
}: GoldAccentLineProps) {
  if (variant === "full") {
    return (
      <div
        className={cn("flex w-full items-center gap-3 px-6", className)}
        aria-hidden
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-accent/60" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-accent" />
        <span className="h-px w-12 bg-gold-accent" />
        <span className="h-2 w-2 rounded-full border border-gold-accent bg-gold-accent/20" />
        <span className="h-px w-12 bg-gold-accent" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-accent" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-accent/60" />
      </div>
    );
  }

  return (
    <div
      className={cn("mx-auto flex max-w-md items-center gap-3", className)}
      aria-hidden
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-accent" />
      <span className="h-1 w-1 rotate-45 bg-gold-accent" />
      <span className="h-px w-8 bg-gold-accent" />
      <span className="h-1.5 w-1.5 rounded-full bg-gold-accent" />
      <span className="h-px w-8 bg-gold-accent" />
      <span className="h-1 w-1 rotate-45 bg-gold-accent" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-accent" />
    </div>
  );
}
