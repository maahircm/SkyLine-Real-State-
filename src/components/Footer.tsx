import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-heading text-2xl font-bold text-white">
              Skyline <span className="text-teal-400">Real Estate</span>
            </p>
            <p className="mt-3 text-sm text-navy-200 max-w-xs">
              Your trusted partner in premium Mogadishu real estate.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-teal-400">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/buy" className="hover:text-white">
                  Buy
                </Link>
              </li>
              <li>
                <Link href="/rent" className="hover:text-white">
                  Rent
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-white">
                  Sell
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-teal-400">
              Social
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-teal-400">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-700 pt-6 text-sm text-navy-300">
          © 2024 Skyline Real Estate Mogadishu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
