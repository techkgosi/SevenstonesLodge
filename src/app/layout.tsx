import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seven Stones Resort, Spa & Adventure | Luxury Bush Retreat near Kruger",
  description:
    "Experience refined bush hospitality at Seven Stones Resort, Spa & Adventure. Luxury accommodation, spa, pool, braai area, and gardens — minutes from Kruger National Park. Book your stay on Booking.com.",
  keywords: [
    "bush lodge",
    "Kruger National Park",
    "Hoedspruit",
    "safari accommodation",
    "South Africa lodge",
    "Booking.com",
  ],
  openGraph: {
    title: "Seven Stones Resort, Spa & Adventure",
    description:
      "A sanctuary of calm in the heart of the African bushveld.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
