"use client";

import Link from "next/link";
import { useState } from "react";
import type { Property } from "@/lib/properties";
import { formatPrice } from "@/lib/properties";
import PropertyImage from "./PropertyImage";
import { AreaIcon, BathIcon, BedIcon, HeartIcon, PinIcon } from "./icons";

export default function PropertyCard({
  property,
  seed = 0,
}: {
  property: Property;
  seed?: number;
}) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group rounded-2xl border border-navy-100 bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/property/${property.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <PropertyImage
            type={property.type}
            seed={seed}
            className="h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span
              className={`rounded-md px-2.5 py-1 text-xs font-semibold text-white ${
                property.status === "For Sale" ? "bg-navy-900" : "bg-teal-600"
              }`}
            >
              {property.status.toUpperCase()}
            </span>
            {property.isNew && (
              <span className="rounded-md bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white">
                NEW
              </span>
            )}
          </div>
          <button
            type="button"
            aria-label="Save property"
            onClick={(e) => {
              e.preventDefault();
              setSaved((v) => !v);
            }}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-700 hover:text-teal-600"
          >
            <HeartIcon className="h-4 w-4" filled={saved} />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <p className="font-heading text-xl font-bold text-navy-900">
          {formatPrice(property)}
        </p>
        <Link href={`/property/${property.slug}`}>
          <p className="mt-1 text-sm font-semibold text-navy-800 hover:text-teal-600 line-clamp-1">
            {property.title}
          </p>
        </Link>
        <p className="mt-1 flex items-center gap-1 text-xs text-navy-500">
          <PinIcon className="h-3.5 w-3.5" />
          {property.location}
        </p>

        <div className="mt-3 flex items-center gap-4 border-t border-navy-100 pt-3 text-xs text-navy-600">
          {(property.type === "Villa" || property.type === "Apartment") && (
            <span className="flex items-center gap-1">
              <BedIcon className="h-4 w-4" />
              {property.beds} Beds
            </span>
          )}
          {property.type !== "Land" && (
            <span className="flex items-center gap-1">
              <BathIcon className="h-4 w-4" />
              {property.baths} Baths
            </span>
          )}
          <span className="flex items-center gap-1">
            <AreaIcon className="h-4 w-4" />
            {property.area.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </div>
  );
}
