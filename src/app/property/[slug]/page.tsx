import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, getPropertyBySlug, properties } from "@/lib/properties";
import PropertyImage from "@/components/PropertyImage";
import PropertyCard from "@/components/PropertyCard";
import { AreaIcon, BathIcon, BedIcon, BuildingIcon, PinIcon } from "@/components/icons";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const similar = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);
  const fallbackSimilar = properties.filter((p) => p.id !== property.id).slice(0, 3);
  const similarProperties = similar.length > 0 ? similar : fallbackSimilar;

  const backHref = property.status === "For Rent" ? "/rent" : "/buy";

  const estMortgage = Math.round((property.price * 0.9 * 0.055) / 12 / 100) * 100;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Link href={backHref} className="text-sm text-teal-600 hover:text-teal-700 font-medium">
        ← Back to listings
      </Link>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span
              className={`rounded-md px-2.5 py-1 text-xs font-semibold text-white ${
                property.status === "For Sale" ? "bg-navy-900" : "bg-teal-600"
              }`}
            >
              {property.status.toUpperCase()}
            </span>
            <span className="flex items-center gap-1 text-sm text-navy-500">
              <PinIcon className="h-4 w-4" />
              {property.location}
            </span>
          </div>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-navy-900">
            {property.title}
          </h1>
        </div>
        <div className="text-right shrink-0">
          <p className="font-heading text-3xl font-bold text-navy-900">
            {formatPrice(property)}
          </p>
          {property.status === "For Sale" && (
            <p className="text-sm text-navy-500">
              Est. Mortgage: ${estMortgage.toLocaleString()}/mo
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-2 rounded-2xl overflow-hidden">
        <div className="aspect-[16/10] sm:aspect-auto">
          <PropertyImage type={property.type} seed={0} className="h-full w-full" />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <PropertyImage type={property.type} seed={1} className="h-full w-full" />
          <div className="relative">
            <PropertyImage type={property.type} seed={2} className="h-full w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-navy-950/50 text-white text-sm font-semibold">
              +10 Photos
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        <div>
          <div className="flex flex-wrap gap-8 border-b border-navy-100 pb-6">
            {(property.type === "Villa" || property.type === "Apartment") && (
              <div className="flex items-center gap-2 text-navy-800">
                <BedIcon className="h-6 w-6 text-teal-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-400">Bedrooms</p>
                  <p className="font-semibold">{property.beds}</p>
                </div>
              </div>
            )}
            {property.type !== "Land" && (
              <div className="flex items-center gap-2 text-navy-800">
                <BathIcon className="h-6 w-6 text-teal-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-400">Bathrooms</p>
                  <p className="font-semibold">{property.baths}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2 text-navy-800">
              <AreaIcon className="h-6 w-6 text-teal-600" />
              <div>
                <p className="text-xs uppercase tracking-wide text-navy-400">Area</p>
                <p className="font-semibold">{property.area.toLocaleString()} sqft</p>
              </div>
            </div>
          </div>

          <h2 className="mt-8 font-heading text-xl font-bold text-navy-900">
            About this Property
          </h2>
          <p className="mt-3 text-navy-600 leading-relaxed">{property.description}</p>

          <h2 className="mt-10 font-heading text-xl font-bold text-navy-900">
            Features &amp; Amenities
          </h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {property.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-2 rounded-lg border border-navy-100 px-3 py-2.5 text-sm text-navy-700"
              >
                <BuildingIcon className="h-4 w-4 text-teal-600 shrink-0" />
                {amenity}
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-heading text-xl font-bold text-navy-900">Location</h2>
          <div className="mt-4 flex h-56 items-center justify-center rounded-2xl border border-navy-100 bg-navy-50 text-center">
            <div>
              <p className="font-semibold text-navy-800">{property.neighborhood}</p>
              <p className="text-sm text-navy-500">Map visualization area</p>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
          <h2 className="font-heading text-lg font-bold text-navy-900">
            Interested in this property?
          </h2>
          <p className="mt-1 text-sm text-navy-500">
            Contact our real estate specialists for a private viewing or more information.
          </p>

          <form className="mt-5 space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <textarea
              rows={3}
              placeholder={`I would like to inquire about this property...`}
              className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
            >
              Request More Info
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-800 hover:bg-navy-50 transition-colors"
            >
              Book a Viewing
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-100 text-navy-700 font-semibold">
              {property.agent.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">{property.agent.name}</p>
              <p className="text-xs text-navy-500">{property.agent.role}</p>
            </div>
          </div>
        </aside>
      </div>

      {similarProperties.length > 0 && (
        <div className="mt-14">
          <h2 className="font-heading text-xl font-bold text-navy-900">Similar Properties</h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map((p, i) => (
              <PropertyCard key={p.id} property={p} seed={i + 3} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
