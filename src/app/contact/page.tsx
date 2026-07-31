"use client";

import { useState } from "react";
import MapPlaceholder from "@/components/MapPlaceholder";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";

const INTERESTS = ["Buying", "Selling", "Renting", "General Inquiry"] as const;

export default function ContactPage() {
  const [interest, setInterest] = useState<(typeof INTERESTS)[number]>("Buying");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="bg-navy-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 text-balance">
            Get in Touch with Mogadishu&apos;s Real Estate Experts
          </h1>
          <p className="mt-4 text-navy-600">
            Whether you&apos;re looking to invest, buy, sell, or rent, our team is here to
            guide you through the Mogadishu real estate market with transparency and
            expertise.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8">
          <div className="space-y-8">
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <h2 className="font-heading text-xl font-bold text-navy-900 pb-4 border-b border-navy-100">
                Contact Information
              </h2>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                      Office Address
                    </p>
                    <p className="text-sm text-navy-800">
                      Maka Al Mukarama Road
                      <br />
                      Hodan District
                      <br />
                      Mogadishu, Somalia
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                      Phone
                    </p>
                    <p className="text-sm text-navy-800">
                      +252 61 123 4567
                      <br />
                      +252 62 987 6543
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                      Email
                    </p>
                    <p className="text-sm text-navy-800">info@skylinemogadishu.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-navy-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                  Connect With Us
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
                      <path
                        d="M8.5 10.5v6M8.5 8v.01M12 16.5V13c0-1 .7-1.8 1.8-1.8s1.7.8 1.7 1.8v3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <MapPlaceholder />
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-navy-900">
              Booking &amp; Inquiry Form
            </h2>
            <p className="mt-1 text-sm text-navy-500">
              Fill out the form below and one of our agents will get back to you shortly.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-teal-50 p-6 text-center">
                <p className="font-semibold text-teal-800">Thank you — message sent!</p>
                <p className="mt-1 text-sm text-teal-700">
                  One of our agents will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                      Full Name
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

                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2">
                    I am interested in:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setInterest(option)}
                        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                          interest === option
                            ? "border-teal-400 bg-teal-50 text-teal-700"
                            : "border-navy-200 text-navy-700 hover:border-navy-300"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
                >
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
