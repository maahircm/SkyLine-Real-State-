import { PinIcon } from "./icons";

export default function MapPlaceholder() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-navy-100 bg-navy-50">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 260"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="260" fill="#eef3f9" />
        <g stroke="#c7d6e8" strokeWidth="2">
          <path d="M0 60 H400" />
          <path d="M0 130 H400" />
          <path d="M0 200 H400" />
          <path d="M80 0 V260" />
          <path d="M180 0 V260" />
          <path d="M300 0 V260" />
        </g>
        <path d="M0 150 Q120 110 240 160 T400 140" stroke="#9ff1e4" strokeWidth="10" fill="none" opacity="0.7" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg">
          <PinIcon className="h-6 w-6" />
        </div>
        <p className="mt-3 font-semibold text-navy-900">Visit Our Office</p>
        <p className="text-sm text-navy-500">Hodan District, Mogadishu</p>
      </div>
    </div>
  );
}
