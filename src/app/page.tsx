import SkylineHero from "@/components/SkylineHero";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <SkylineHero />
      <div className="absolute inset-0 bg-navy-950/25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28 sm:pt-32 sm:pb-40">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
            Your Gateway to Premium Real Estate in Mogadishu
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Buy, Sell, and Rent the finest offices, apartments, and villas.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-4xl bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                Property Type
              </label>
              <select className="w-full rounded-lg border border-navy-200 bg-white px-3 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-400">
                <option>All Types</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Office Space</option>
                <option>Land</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                Location
              </label>
              <select className="w-full rounded-lg border border-navy-200 bg-white px-3 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-400">
                <option>Any Location</option>
                <option>Hodan District</option>
                <option>Abdiaziz</option>
                <option>Waberi District</option>
                <option>Lido Beach Area</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                Price Range
              </label>
              <select className="w-full rounded-lg border border-navy-200 bg-white px-3 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-400">
                <option>Any Price</option>
                <option>Under $200,000</option>
                <option>$200,000 - $500,000</option>
                <option>$500,000+</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
              <path
                d="M21 21l-4.3-4.3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
