"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export function useSmoothScrollEffects() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return isDesktop && !prefersReducedMotion;
}

/** Touch devices fire pointerenter on tap, so hover animations would trigger mid-scroll. */
export function useHasHover() {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}
