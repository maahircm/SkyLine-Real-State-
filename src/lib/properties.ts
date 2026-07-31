export type PropertyType = "Apartment" | "Villa" | "Office Space" | "Land";
export type ListingStatus = "For Sale" | "For Rent";

export type Property = {
  id: string;
  slug: string;
  title: string;
  type: PropertyType;
  status: ListingStatus;
  featured?: boolean;
  isNew?: boolean;
  price: number;
  priceSuffix?: string;
  location: string;
  neighborhood: string;
  beds: number;
  baths: number;
  area: number;
  description: string;
  amenities: string[];
  agent: { name: string; role: string };
};

export const properties: Property[] = [
  {
    id: "1",
    slug: "modern-4-bedroom-coastal-villa",
    title: "Modern 4-Bedroom Coastal Villa",
    type: "Villa",
    status: "For Sale",
    featured: true,
    isNew: true,
    price: 450000,
    location: "Hodan District, Mogadishu",
    neighborhood: "Hodan District",
    beds: 4,
    baths: 3.5,
    area: 3200,
    description:
      "Experience the pinnacle of coastal living in this stunning modern villa located in the prestigious Hodan District. Designed for those who appreciate architectural excellence and sweeping views of the Indian Ocean, this property offers a rare blend of luxury and tranquility within Mogadishu's vibrant landscape.",
    amenities: [
      "24/7 Security",
      "Ocean View",
      "Modern Kitchen",
      "Private Parking",
      "Backup Generator",
      "Infinity Pool",
    ],
    agent: { name: "Ahmed Hassan", role: "Senior Luxury Agent" },
  },
  {
    id: "2",
    slug: "seaview-apartment-abdiaziz",
    title: "Seaview Apartment",
    type: "Apartment",
    status: "For Rent",
    price: 1200,
    priceSuffix: "/mo",
    location: "Abdiaziz, Sea View",
    neighborhood: "Abdiaziz",
    beds: 2,
    baths: 2,
    area: 1100,
    description:
      "A bright, breezy apartment with unobstructed sea views, floor-to-ceiling windows, and a private balcony overlooking the coastline. Close to cafes, the corniche, and the business district.",
    amenities: ["Sea View", "Balcony", "24/7 Security", "Elevator"],
    agent: { name: "Fartun Ali", role: "Rentals Specialist" },
  },
  {
    id: "3",
    slug: "skyline-corporate-tower",
    title: "Skyline Corporate Tower",
    type: "Office Space",
    status: "For Sale",
    price: 850000,
    location: "Maka Al Mukarama Rd",
    neighborhood: "Hodan District",
    beds: 0,
    baths: 6,
    area: 5000,
    description:
      "A landmark 12-office corporate tower on Maka Al Mukarama Road, offering premium floor plates, dedicated parking, and commanding skyline views. Ideal for corporate headquarters or investment.",
    amenities: ["12 Offices", "6 Parking Spots", "Backup Generator", "Elevator"],
    agent: { name: "Omar Nur", role: "Commercial Advisor" },
  },
  {
    id: "4",
    slug: "contemporary-seaside-home",
    title: "Contemporary Seaside Home",
    type: "Villa",
    status: "For Sale",
    price: 385000,
    location: "Lido Beach Area",
    neighborhood: "Lido Beach Area",
    beds: 3,
    baths: 2,
    area: 2400,
    description:
      "Steps from Lido Beach, this contemporary home pairs clean architectural lines with warm interiors, an open living area, and a landscaped courtyard.",
    amenities: ["Ocean View", "Private Parking", "Modern Kitchen"],
    agent: { name: "Ahmed Hassan", role: "Senior Luxury Agent" },
  },
  {
    id: "5",
    slug: "grand-estate-with-garden",
    title: "Grand Estate with Garden",
    type: "Villa",
    status: "For Sale",
    price: 520000,
    location: "Waberi District",
    neighborhood: "Waberi District",
    beds: 5,
    baths: 4,
    area: 4600,
    description:
      "A grand family estate set behind private gates, featuring mature gardens, a shaded courtyard, and generous living spaces suited for entertaining.",
    amenities: ["Private Garden", "24/7 Security", "Private Parking", "Backup Generator"],
    agent: { name: "Fartun Ali", role: "Rentals Specialist" },
  },
  {
    id: "6",
    slug: "modern-townhouse-hodan",
    title: "Modern Townhouse",
    type: "Villa",
    status: "For Sale",
    price: 310000,
    location: "Hodan District",
    neighborhood: "Hodan District",
    beds: 3,
    baths: 2.5,
    area: 2100,
    description:
      "A smartly designed townhouse in a quiet pocket of Hodan District, with a compact footprint, private entrance, and rooftop terrace.",
    amenities: ["Rooftop Terrace", "Private Parking", "Modern Kitchen"],
    agent: { name: "Omar Nur", role: "Commercial Advisor" },
  },
  {
    id: "7",
    slug: "riverside-family-apartment",
    title: "Riverside Family Apartment",
    type: "Apartment",
    status: "For Rent",
    price: 900,
    priceSuffix: "/mo",
    location: "Waberi District",
    neighborhood: "Waberi District",
    beds: 3,
    baths: 2,
    area: 1500,
    description:
      "Spacious family apartment with three bedrooms, an open-plan kitchen, and a shared rooftop garden — walking distance to schools and markets.",
    amenities: ["Rooftop Garden", "Elevator", "24/7 Security"],
    agent: { name: "Fartun Ali", role: "Rentals Specialist" },
  },
  {
    id: "8",
    slug: "downtown-retail-land-parcel",
    title: "Downtown Retail Land Parcel",
    type: "Land",
    status: "For Sale",
    price: 260000,
    location: "Bakaara Market Area",
    neighborhood: "Bakaara",
    beds: 0,
    baths: 0,
    area: 6000,
    description:
      "A prime commercial land parcel near Bakaara Market, zoned for retail development with excellent road frontage and foot traffic.",
    amenities: ["Road Frontage", "Zoned Commercial"],
    agent: { name: "Omar Nur", role: "Commercial Advisor" },
  },
  {
    id: "9",
    slug: "boutique-office-suite",
    title: "Boutique Office Suite",
    type: "Office Space",
    status: "For Rent",
    price: 1500,
    priceSuffix: "/mo",
    location: "Hodan District",
    neighborhood: "Hodan District",
    beds: 0,
    baths: 2,
    area: 1800,
    description:
      "A move-in ready office suite with open-plan desks, two meeting rooms, and dedicated parking, close to the central business corridor.",
    amenities: ["Meeting Rooms", "Private Parking", "Elevator"],
    agent: { name: "Ahmed Hassan", role: "Senior Luxury Agent" },
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function formatPrice(p: Property) {
  const amount = `$${p.price.toLocaleString()}`;
  return p.priceSuffix ? `${amount}${p.priceSuffix}` : amount;
}
