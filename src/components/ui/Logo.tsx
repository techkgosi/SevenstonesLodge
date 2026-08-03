import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "light" for dark backgrounds (white logo), "dark" for light backgrounds */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "hero" | "nav";
  className?: string;
  priority?: boolean;
}

const sizeClasses = {
  nav: "h-12 w-auto sm:h-14 md:h-16 lg:h-[4.25rem]",
  sm: "h-10 w-auto sm:h-11",
  md: "h-12 w-auto sm:h-14",
  lg: "h-16 w-auto sm:h-[4.5rem] md:h-20",
  xl: "h-28 w-auto sm:h-32 md:h-40 lg:h-48",
  "2xl": "h-32 w-auto sm:h-40 md:h-48 lg:h-56",
  hero: "h-auto w-[min(88vw,30rem)] sm:w-[min(86vw,36rem)] md:h-56 md:w-auto lg:h-[16rem] xl:h-[19rem] max-w-full",
};

export function Logo({
  variant = "light",
  size = "md",
  className,
  priority = false,
}: LogoProps) {
  const src = variant === "light" ? "/logo-light.png" : "/logo-dark.png";

  return (
    <Image
      src={src}
      alt="Seven Stones Resort, Spa & Adventure"
      width={1024}
      height={682}
      priority={priority}
      className={cn(
        "w-auto object-contain object-center transition-all duration-300",
        sizeClasses[size],
        className,
      )}
    />
  );
}
