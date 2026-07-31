export default function SkylineHero() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12213e" />
          <stop offset="45%" stopColor="#2c4a72" />
          <stop offset="75%" stopColor="#e08a4f" />
          <stop offset="100%" stopColor="#f4b579" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e5f6b" />
          <stop offset="100%" stopColor="#093b47" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd9a0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffd9a0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1600" height="620" fill="url(#sky)" />
      <circle cx="1180" cy="430" r="220" fill="url(#sun)" />
      <circle cx="1180" cy="430" r="70" fill="#ffe3b0" opacity="0.85" />

      <rect y="600" width="1600" height="300" fill="url(#sea)" />
      <g opacity="0.25" fill="#ffe3b0">
        <rect x="1120" y="600" width="4" height="40" />
        <rect x="1160" y="600" width="3" height="30" />
        <rect x="1200" y="600" width="5" height="50" />
        <rect x="1240" y="600" width="3" height="25" />
      </g>

      <g fill="#0a1730">
        <rect x="40" y="430" width="70" height="200" />
        <rect x="120" y="380" width="55" height="250" />
        <rect x="185" y="470" width="45" height="160" />
        <rect x="240" y="320" width="60" height="310" />
        <rect x="310" y="410" width="50" height="220" />
        <rect x="370" y="260" width="40" height="370" />
        <rect x="420" y="360" width="65" height="270" />
        <rect x="495" y="200" width="45" height="430" />
        <rect x="550" y="330" width="55" height="300" />
        <rect x="615" y="150" width="38" height="480" />
        <rect x="663" y="300" width="60" height="330" />
        <rect x="733" y="380" width="50" height="250" />
        <rect x="793" y="240" width="42" height="390" />
        <rect x="845" y="420" width="65" height="210" />
        <rect x="920" y="150" width="30" height="6" />
        <rect x="915" y="156" width="40" height="474" />
        <rect x="965" y="350" width="55" height="280" />
        <rect x="1030" y="440" width="45" height="190" />
      </g>

      <g fill="#ffd9a0" opacity="0.55">
        <rect x="130" y="400" width="6" height="8" />
        <rect x="145" y="420" width="6" height="8" />
        <rect x="130" y="440" width="6" height="8" />
        <rect x="255" y="345" width="6" height="8" />
        <rect x="270" y="365" width="6" height="8" />
        <rect x="255" y="385" width="6" height="8" />
        <rect x="380" y="285" width="6" height="8" />
        <rect x="395" y="305" width="6" height="8" />
        <rect x="380" y="325" width="6" height="8" />
        <rect x="505" y="225" width="6" height="8" />
        <rect x="520" y="245" width="6" height="8" />
        <rect x="505" y="265" width="6" height="8" />
        <rect x="625" y="175" width="6" height="8" />
        <rect x="638" y="195" width="6" height="8" />
        <rect x="625" y="215" width="6" height="8" />
        <rect x="927" y="180" width="6" height="8" />
        <rect x="927" y="200" width="6" height="8" />
        <rect x="927" y="220" width="6" height="8" />
      </g>

      <path
        d="M0 620 Q 200 605 400 620 T 800 620 T 1200 620 T 1600 620 V900 H0 Z"
        fill="#0a1e28"
        opacity="0.5"
      />
    </svg>
  );
}
