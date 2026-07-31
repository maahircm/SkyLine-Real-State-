import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <circle cx="20" cy="20" r="19" stroke="#2dd4bf" strokeWidth="2" />
        <rect x="10" y="18" width="7" height="14" rx="1" fill="#0b1f3a" />
        <rect x="17" y="10" width="7" height="22" rx="1" fill="#0b1f3a" />
        <path
          d="M20.5 16 L29 24 V32 H12 V24 Z"
          fill="#2dd4bf"
          opacity="0.9"
        />
        <path d="M17 32 V27 a2.5 2.5 0 0 1 5 0 V32" stroke="white" strokeWidth="1.4" fill="none" />
      </svg>
      <span
        className={`font-heading text-xl sm:text-2xl font-bold leading-none ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        Skyline <span className="text-teal-500">Real Estate</span>
      </span>
    </Link>
  );
}
