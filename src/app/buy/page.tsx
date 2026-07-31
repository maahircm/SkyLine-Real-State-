"use client";

import { useMemo, useState } from "react";
import { properties, type PropertyType } from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";

const TYPES: PropertyType[] = ["Apartment", "Villa", "Office Space", "Land"];
const BEDROOM_OPTIONS = ["Any", "1+", "2+", "3+", "4+"] as const;
const SORT_OPTIONS = ["Newest First", "Price: Low to High", "Price: High to Low"] as const;
const PAGE_SIZE = 6;

export default function BuyPage() {
  const neighborhoods = useMemo(
    () => Array.from(new Set(properties.map((p) => p.neighborhood))).sort(),
    []
  );

  const [selectedTypes, setSelectedTypes] = useState<PropertyType[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState<(typeof BEDROOM_OPTIONS)[number]>("Any");
  const [neighborhood, setNeighborhood] = useState("All Areas");
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]>("Newest First");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);

  function toggleType(type: PropertyType) {
    setPage(1);
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function resetAll() {
    setSelectedTypes([]);
    setMinPrice("");
    setMaxPrice("");
    setBedrooms("Any");
    setNeighborhood("All Areas");
    setPage(1);
  }

  const filtered = useMemo(() => {
    const minBeds = bedrooms === "Any" ? 0 : parseInt(bedrooms, 10);
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;

    const result = properties.filter((p) => {
      if (selectedTypes.length > 0 && !selectedTypes.includes(p.type)) return false;
      if (p.price < min || p.price > max) return false;
      if (p.beds < minBeds) return false;
      if (neighborhood !== "All Areas" && p.neighborhood !== neighborhood) return false;
      return true;
    });

    const sorted = [...result].sort((a, b) => {
      if (sort === "Price: Low to High") return a.price - b.price;
      if (sort === "Price: High to Low") return b.price - a.price;
      return Number(b.id) - Number(a.id);
    });

    return sorted;
  }, [selectedTypes, minPrice, maxPrice, bedrooms, neighborhood, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        <aside className="h-fit rounded-2xl border border-navy-100 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-navy-900">Filters</h2>
            <button
              type="button"
              onClick={resetAll}
              className="text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              Reset All
            </button>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">
              Property Type
            </p>
            <div className="mt-3 space-y-2">
              {TYPES.map((type) => (
                <label key={type} className="flex items-center gap-2.5 text-sm text-navy-800">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    className="h-4 w-4 rounded border-navy-300 text-teal-600 focus:ring-teal-400"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">
              Price Range (USD)
            </p>
            <div className="mt-3 flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => {
                  setPage(1);
                  setMinPrice(e.target.value);
                }}
                className="w-full rounded-lg border border-navy-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <span className="text-navy-400">–</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => {
                  setPage(1);
                  setMaxPrice(e.target.value);
                }}
                className="w-full rounded-lg border border-navy-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">
              Bedrooms
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {BEDROOM_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setBedrooms(option);
                  }}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    bedrooms === option
                      ? "border-teal-400 bg-teal-50 text-teal-700"
                      : "border-navy-200 text-navy-700 hover:border-navy-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">
              Neighborhood
            </p>
            <select
              value={neighborhood}
              onChange={(e) => {
                setPage(1);
                setNeighborhood(e.target.value);
              }}
              className="mt-3 w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option>All Areas</option>
              {neighborhoods.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => setPage(1)}
            className="mt-7 w-full rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            Apply Filters
          </button>
        </aside>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="font-heading text-2xl font-bold text-navy-900">
              {filtered.length} {filtered.length === 1 ? "Property" : "Properties"} Found in
              Mogadishu
            </h1>

            <div className="flex items-center gap-3">
              <label className="text-sm text-navy-600">Sort by:</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as (typeof SORT_OPTIONS)[number])}
                className="rounded-lg border border-navy-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <div className="flex items-center rounded-lg border border-navy-200 overflow-hidden">
                <button
                  type="button"
                  aria-label="Grid view"
                  onClick={() => setView("grid")}
                  className={`p-2 ${view === "grid" ? "bg-navy-900 text-white" : "text-navy-500"}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="List view"
                  onClick={() => setView("list")}
                  className={`p-2 ${view === "list" ? "bg-navy-900 text-white" : "text-navy-500"}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {pageItems.length === 0 ? (
            <p className="mt-16 text-center text-navy-500">
              No properties match your filters. Try adjusting them.
            </p>
          ) : (
            <div
              className={`mt-6 grid gap-6 ${
                view === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {pageItems.map((property, i) => (
                <PropertyCard key={property.id} property={property} seed={i} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-200 text-navy-600 disabled:opacity-40"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i + 1)}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium ${
                    currentPage === i + 1
                      ? "border-navy-900 bg-navy-900 text-white"
                      : "border-navy-200 text-navy-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-200 text-navy-600 disabled:opacity-40"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
