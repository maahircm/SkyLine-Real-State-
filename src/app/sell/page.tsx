"use client";

import { useState } from "react";
import { BuildingIcon } from "@/components/icons";

const PROPERTY_TYPES = ["Apartment", "Villa", "Office Space", "Land"] as const;
const LISTING_TYPES = ["For Sale", "For Rent"] as const;
const NEIGHBORHOODS = [
  "Hodan District",
  "Abdiaziz",
  "Waberi District",
  "Lido Beach Area",
  "Bakaara Market Area",
];

const BENEFITS = [
  {
    title: "Wide Buyer Reach",
    body: "Your listing appears across our Buy and Rent pages, seen by active Mogadishu home-seekers.",
  },
  {
    title: "Trusted Agents",
    body: "A dedicated agent reviews every submission and helps you price and present it well.",
  },
  {
    title: "Fast, Simple Process",
    body: "Submit your details once — we'll follow up within 24 hours to arrange next steps.",
  },
];

export default function SellPage() {
  const [listingType, setListingType] = useState<(typeof LISTING_TYPES)[number]>("For Sale");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="bg-navy-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 text-balance">
            List Your Property with Skyline Real Estate
          </h1>
          <p className="mt-4 text-navy-600">
            Reach serious buyers and renters across Mogadishu. Tell us about your property and
            one of our agents will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-navy-100 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <BuildingIcon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-heading font-bold text-navy-900">{b.title}</p>
              <p className="mt-1.5 text-sm text-navy-600">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="mt-4 font-heading text-xl font-bold text-navy-900">
                Property submitted!
              </p>
              <p className="mt-1.5 text-navy-600">
                Thank you — an agent will contact you within 24 hours to discuss next steps.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700"
              >
                Submit another property
              </button>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label className="block text-xs font-semibold text-navy-700 mb-2">
                  I want to:
                </label>
                <div className="flex gap-2">
                  {LISTING_TYPES.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setListingType(option)}
                      className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                        listingType === option
                          ? "border-navy-900 bg-navy-900 text-white"
                          : "border-navy-200 text-navy-700 hover:border-navy-300"
                      }`}
                    >
                      {option === "For Sale" ? "Sell my property" : "Rent out my property"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                  Property Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern 3-Bedroom Villa in Hodan"
                  className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                    Property Type
                  </label>
                  <select className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
                    {PROPERTY_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                    Neighborhood
                  </label>
                  <select className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
                    {NEIGHBORHOODS.map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                    {listingType === "For Sale" ? "Price (USD)" : "Rent (USD/mo)"}
                  </label>
                  <input
                    type="number"
                    min={0}
                    required
                    placeholder="0"
                    className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder="0"
                    className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder="0"
                    className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                    Area (sqft)
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder="0"
                    className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your property's features, condition, and highlights..."
                  className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                  Photos
                </label>
                <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-navy-200 px-4 py-8 text-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 16V4M12 4l-4 4M12 4l4 4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-navy-400"
                    />
                  </svg>
                  <p className="text-sm text-navy-500">
                    Drag photos here, or click to browse (coming soon)
                  </p>
                </div>
              </div>

              <div className="border-t border-navy-100 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+252..."
                    className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
              >
                Submit Property
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
