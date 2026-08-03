import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingBookingButton } from "@/components/layout/FloatingBookingButton";
import { AccommodationDetail } from "@/components/sections/AccommodationDetail";
import {
  ACCOMMODATIONS,
  getAccommodationById,
  LODGE,
} from "@/lib/constants";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return ACCOMMODATIONS.map((room) => ({ id: room.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const room = getAccommodationById(id);

  if (!room) {
    return { title: "Accommodation | Seven Stones" };
  }

  return {
    title: `${room.name} | ${LODGE.fullName}`,
    description: room.details.longDescription,
  };
}

export default async function AccommodationPage({ params }: PageProps) {
  const { id } = await params;
  const room = getAccommodationById(id);

  if (!room) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <AccommodationDetail room={room} />
      <Footer />
      <FloatingBookingButton />
    </>
  );
}
