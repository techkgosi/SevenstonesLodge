"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";

export function FloatingBookingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gold-accent px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-gold-accent/30 md:hidden"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CalendarCheck className="h-5 w-5" />
          Book Now
        </motion.a>
      )}
    </AnimatePresence>
  );
}
