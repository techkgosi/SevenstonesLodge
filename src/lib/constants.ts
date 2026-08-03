export const BOOKING_URL =
  "https://www.booking.com/hotel/za/seven-stones-bush-lodge.html";

export const LODGE = {
  name: "Seven Stones",
  tagline: "Resort, Spa & Adventure",
  fullName: "Seven Stones Resort, Spa & Adventure",
  email: "molelekid@gmail.com",
  phone: "+27 76 757 4846",
  whatsapp: "+27 73 245 3658",
  whatsappUrl: "https://wa.me/27732453658",
  address:
    "Plot 23, Stefano Park AH, Barrage Road, Vanderbijlpark, 1911, South Africa",
  coordinates: { lat: -26.7165, lng: 27.7777 },
};

export const NAV_LINKS = [
  { label: "Accommodation", href: "/#accommodation" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/#about" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/#contact" },
];

export const SOCIAL_LINKS = [
  { label: "WhatsApp", href: "https://wa.me/27732453658" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61574651278956" },
  { label: "TripAdvisor", href: "https://tripadvisor.com" },
];

export type AmenityIcon =
  | "bed"
  | "users"
  | "bath"
  | "wind"
  | "coffee"
  | "trees"
  | "flame"
  | "sofa"
  | "utensils"
  | "wifi"
  | "sparkles"
  | "home";

export const ACCOMMODATIONS = [
  {
    id: "stone-suite",
    name: "Stone Suite",
    description:
      "A spacious retreat with timber finishes, a private deck overlooking the gardens, and an ensuite bathroom with a modern freestanding bathtub.",
    price: "From R1,200 / night",
    guests: 2,
    image: "/accommodation.jpg",
    features: ["King Bed", "Private Deck", "Air Conditioning", "Mini Bar"],
    details: {
      eyebrow: "Signature Stay",
      headline: "Refined comfort in a thatched stone suite",
      longDescription:
        "The Stone Suite is designed for couples seeking quiet luxury. Warm timber, soft lighting, and a private outdoor deck create a restful space to unwind after a day by the pool or in the gardens. Inside, thoughtful finishes and a modern freestanding bathtub complete the experience.",
      amenities: [
        {
          icon: "bed" as AmenityIcon,
          label: "King Bed",
          description: "A plush king-size bed dressed in crisp linen.",
        },
        {
          icon: "users" as AmenityIcon,
          label: "Sleeps 2",
          description: "Ideal for couples or a peaceful solo escape.",
        },
        {
          icon: "trees" as AmenityIcon,
          label: "Private Deck",
          description: "Your own outdoor seating with garden views.",
        },
        {
          icon: "bath" as AmenityIcon,
          label: "Ensuite Bathroom",
          description: "A modern bathroom with a freestanding bathtub.",
        },
        {
          icon: "wind" as AmenityIcon,
          label: "Air Conditioning",
          description: "Stay cool and comfortable year-round.",
        },
        {
          icon: "coffee" as AmenityIcon,
          label: "Mini Bar",
          description: "In-room refreshments for easy evenings in.",
        },
      ],
      gallery: [
        "/stone-suite-1.jpg",
        "/stone-suite-2.jpg",
        "/stone-suite-3.jpg",
      ],
    },
  },
  {
    id: "bush-chalet",
    name: "Bush Chalet",
    description:
      "Nestled among indigenous trees, this chalet offers rustic elegance with modern comforts and peaceful garden views.",
    price: "From R950 / night",
    guests: 2,
    image: "/bush-chalet.jpg",
    features: ["Queen Bed", "Garden View", "Luxury Bathtub", "Tea Station"],
    details: {
      eyebrow: "Garden Escape",
      headline: "Rustic charm wrapped in quiet greenery",
      longDescription:
        "The Bush Chalet sits among trees and garden paths, offering a cosy thatched stay with a welcoming patio. Enjoy morning coffee outdoors, soak in a luxurious indoor freestanding bathtub, and settle into a calm garden setting just steps from the lodge facilities.",
      amenities: [
        {
          icon: "bed" as AmenityIcon,
          label: "Queen Bed",
          description: "A comfortable queen bed for restful nights.",
        },
        {
          icon: "users" as AmenityIcon,
          label: "Sleeps 2",
          description: "Perfect for couples seeking a quieter corner.",
        },
        {
          icon: "trees" as AmenityIcon,
          label: "Garden View",
          description: "Wake up to trees, birdsong, and open sky.",
        },
        {
          icon: "bath" as AmenityIcon,
          label: "Luxury Bathtub",
          description: "A modern indoor freestanding bathtub for a spa-like soak.",
        },
        {
          icon: "coffee" as AmenityIcon,
          label: "Tea Station",
          description: "Tea and coffee facilities in your chalet.",
        },
        {
          icon: "sparkles" as AmenityIcon,
          label: "Patio Seating",
          description: "Relax outdoors on your private patio.",
        },
      ],
      gallery: [
        "/bush-chalet-1.jpg",
        "/bush-chalet-2.jpg",
      ],
    },
  },
  {
    id: "family-lodge",
    name: "Family Lodge",
    description:
      "Perfect for families seeking adventure, with two bedrooms, a shared lounge, and direct access to the lodge gardens.",
    price: "From R2,000 / night",
    guests: 4,
    image: "/accommodation.jpg",
    features: ["2 Bedrooms", "Lounge Area", "Kitchenette", "Braai Facilities"],
    details: {
      eyebrow: "Family Stay",
      headline: "Space to gather, rest and explore together",
      longDescription:
        "The Family Lodge gives everyone room to spread out — two bedrooms, a shared lounge, and a kitchenette for easy meals. Step outside to the gardens, pool, and braai areas, making it a welcoming base for longer family stays along the Vaal.",
      amenities: [
        {
          icon: "home" as AmenityIcon,
          label: "2 Bedrooms",
          description: "Separate rooms for parents and children.",
        },
        {
          icon: "users" as AmenityIcon,
          label: "Sleeps 4",
          description: "Comfortably hosts a small family or friends.",
        },
        {
          icon: "sofa" as AmenityIcon,
          label: "Lounge Area",
          description: "A shared living space to unwind together.",
        },
        {
          icon: "utensils" as AmenityIcon,
          label: "Kitchenette",
          description: "Prepare light meals and snacks with ease.",
        },
        {
          icon: "flame" as AmenityIcon,
          label: "Braai Facilities",
          description: "Enjoy evenings around the lodge braai areas.",
        },
        {
          icon: "trees" as AmenityIcon,
          label: "Garden Access",
          description: "Direct access to lawns, paths, and play space.",
        },
      ],
      gallery: [
        "/family-lodge-1.jpg",
        "/family-lodge-2.jpg",
        "/family-lodge-3.jpg",
      ],
    },
  },
];

export function getAccommodationById(id: string) {
  return ACCOMMODATIONS.find((room) => room.id === id);
}
export const FACILITIES = [
  {
    icon: "pool" as const,
    title: "Swimming Pool",
    description:
      "Cool off in our crystal-clear pool surrounded by indigenous gardens and loungers.",
  },
  {
    icon: "flame" as const,
    title: "Braai Area",
    description:
      "Gather around the traditional braai under starlit African skies.",
  },
  {
    icon: "flower" as const,
    title: "Gardens",
    description:
      "Wander through landscaped gardens alive with birdsong and native flora.",
  },
  {
    icon: "armchair" as const,
    title: "Outdoor Seating",
    description:
      "Relax in comfortable seating areas with sweeping views.",
  },
  {
    icon: "wifi" as const,
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed Wi-Fi throughout the lodge.",
  },
  {
    icon: "car" as const,
    title: "Secure Parking",
    description:
      "Safe, monitored parking for all guests arriving by car.",
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Thatched chalet with outdoor seating and fire pit",
    span: "tall" as const,
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Swimming pool surrounded by trees",
    span: "tall" as const,
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Hanging egg chairs in the lounge garden",
    span: "tall" as const,
  },
  {
    id: 4,
    src: "/gallery-4.jpg",
    alt: "Garden path with palms and thatched lodge",
    span: "tall" as const,
  },
  {
    id: 5,
    src: "/gallery-5.jpg",
    alt: "Braai area and lawn under the trees",
    span: "tall" as const,
  },
  {
    id: 6,
    src: "/gallery-6.jpg",
    alt: "Entrance gardens and driveway at Seven Stones",
    span: "tall" as const,
  },
  {
    id: 7,
    src: "/gallery-7.jpg",
    alt: "Lodge courtyard with thatched roofs",
    span: "tall" as const,
  },
];

export const GALLERY_SPAN_IMAGE = {
  id: 8,
  src: "/gallery-span.jpg",
  alt: "Peacock perched among the trees at Seven Stones",
  span: "tall" as const,
};

/** All gallery images including the desktop feature span (for lightbox). */
export const GALLERY_LIGHTBOX_IMAGES = [...GALLERY_IMAGES, GALLERY_SPAN_IMAGE];

export const WHY_CHOOSE_US = [
  {
    title: "Prime Location",
    description:
      "Minutes from Kruger National Park and world-renowned private game reserves.",
    icon: "map-pin" as const,
  },
  {
    title: "Authentic Bush Experience",
    description:
      "Immerse yourself in the sights and sounds of the African wilderness.",
    icon: "trees" as const,
  },
  {
    title: "Personalised Service",
    description:
      "Our dedicated team ensures every detail of your stay is thoughtfully curated.",
    icon: "heart" as const,
  },
  {
    title: "Eco-Conscious",
    description:
      "Committed to sustainable tourism and preserving our natural heritage.",
    icon: "leaf" as const,
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Years of Hospitality" },
  { value: 98, suffix: "%", label: "Guest Satisfaction" },
  { value: 12, suffix: "", label: "Luxury Suites" },
  { value: 45, suffix: "min", label: "To Kruger Gate" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah & James Mitchell",
    location: "London, UK",
    rating: 5,
    text: "Seven Stones exceeded every expectation. The staff was very kind and very helpful. We'll be back for sure when we visit the Vaal again.",
  },
  {
    id: 2,
    name: "Pieter van der Merwe",
    location: "Cape Town, SA",
    rating: 5,
    text: "The perfect blend of luxury and natural beauty. Very nice braai area.",
  },
  {
    id: 3,
    name: "Katlego Mokoena",
    location: "Sydney, Australia",
    rating: 4,
    text: "From the moment we arrived, we felt completely at ease. The gardens are stunning, the rooms are beautifully appointed, and the location is unbeatable.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What are check-in and check-out times?",
    answer:
      "Check-in is from 2:00 PM and check-out is by 10:00 AM. Early check-in or late check-out may be arranged subject to availability.",
  },
  {
    question: "Is the lodge family-friendly?",
    answer:
      "Absolutely. Our Family Lodge accommodates up to four guests, and children are welcome throughout the property.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation policies vary by season and booking channel. Please refer to your Booking.com reservation for specific terms, or contact us directly for assistance.",
  },
  {
    question: "Is Wi-Fi available throughout the lodge?",
    answer:
      "Yes, complimentary high-speed Wi-Fi is available in all rooms, the lounge, and outdoor seating areas.",
  },
  {
    question: "How do I get to Seven Stones?",
    answer:
      "Just 10 minutes from Vaal Mall. Take the R42 (Barrage Road) towards Barrage/Loch Vaal. Continue along Barrage Road until you reach Stefano Park AH. Seven Stones Resort is located at Plot 23, Stefano Park AH with clear signage at the entrance. Secure parking is provided on-site.",
  },
];
