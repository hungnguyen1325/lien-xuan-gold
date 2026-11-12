import { useId, type SVGProps } from "react";

export function GoldIngotsIcon(props: SVGProps<SVGSVGElement>) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 46 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Thỏi vàng"
      {...props}
    >
      <defs>
        <linearGradient
          id={`${id}-ingot-top-grad`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="var(--metal-highlight)" />
          <stop offset="40%" stopColor="var(--metal-shine)" />
          <stop offset="100%" stopColor="var(--metal-yellow)" />
        </linearGradient>
        <linearGradient
          id={`${id}-ingot-front-grad`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="var(--metal-light)" />
          <stop offset="70%" stopColor="var(--metal-mid)" />
          <stop offset="100%" stopColor="var(--metal-dark)" />
        </linearGradient>
        <linearGradient
          id={`${id}-ingot-side-grad`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="var(--metal-edge)" />
          <stop offset="100%" stopColor="var(--metal-side)" />
        </linearGradient>
        <filter
          id={`${id}-gold-shadow`}
          x="-15%"
          y="-15%"
          width="130%"
          height="135%"
        >
          <feDropShadow
            dx="0"
            dy="1.5"
            stdDeviation="1.5"
            floodColor="var(--metal-shadow)"
            floodOpacity="0.28"
          />
        </filter>
      </defs>

      <g filter={`url(#${id}-gold-shadow)`}>
        <g>
          <polygon
            points="4,18 20,18 17,13 2,13"
            fill={`url(#${id}-ingot-top-grad)`}
          />
          <polygon
            points="4,18 20,18 18,27 2,27"
            fill={`url(#${id}-ingot-front-grad)`}
          />
          <polygon
            points="20,18 17,13 15,22 18,27"
            fill={`url(#${id}-ingot-side-grad)`}
          />
          <line
            x1="6"
            y1="22.5"
            x2="14"
            y2="22.5"
            stroke="var(--metal-etching)"
            strokeWidth="0.8"
            strokeOpacity="0.6"
          />
        </g>
        <g>
          <polygon
            points="23,18 39,18 36,13 21,13"
            fill={`url(#${id}-ingot-top-grad)`}
          />
          <polygon
            points="23,18 39,18 37,27 21,27"
            fill={`url(#${id}-ingot-front-grad)`}
          />
          <polygon
            points="39,18 36,13 34,22 37,27"
            fill={`url(#${id}-ingot-side-grad)`}
          />
          <line
            x1="25"
            y1="22.5"
            x2="33"
            y2="22.5"
            stroke="var(--metal-etching)"
            strokeWidth="0.8"
            strokeOpacity="0.6"
          />
        </g>
        <g>
          <polygon
            points="13.5,8 29.5,8 26.5,3 11.5,3"
            fill={`url(#${id}-ingot-top-grad)`}
          />
          <polygon
            points="13.5,8 29.5,8 27.5,17 11.5,17"
            fill={`url(#${id}-ingot-front-grad)`}
          />
          <polygon
            points="29.5,8 26.5,3 24.5,12 27.5,17"
            fill={`url(#${id}-ingot-side-grad)`}
          />
          <circle cx="16" cy="5.5" r="0.75" fill="var(--metal-sparkle)" />
          <line
            x1="16"
            y1="12.5"
            x2="23"
            y2="12.5"
            stroke="var(--metal-etching)"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />
        </g>
      </g>
    </svg>
  );
}

export function DiamondRingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="14.5" r="6.5" />
      <path
        d="M9 5.5L12 2.5L15 5.5L12 8L9 5.5Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <line x1="9" y1="5.5" x2="15" y2="5.5" />
      <line x1="12" y1="2.5" x2="12" y2="8" />
      <path d="M8 8.5L9.5 5.8" />
      <path d="M16 8.5L14.5 5.8" />
    </svg>
  );
}

export function BoutiqueStoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 10V20C3 20.6 3.4 21 4 21H20C20.6 21 21 20.6 21 20V10" />
      <path d="M2.5 10L4.5 3.5H19.5L21.5 10" />
      <path d="M2.5 10C2.5 11.2 3.8 12.2 5.3 12.2C6.8 12.2 8.1 11.2 8.1 10C8.1 11.2 9.4 12.2 10.9 12.2C12.4 12.2 13.7 11.2 13.7 10C13.7 11.2 15 12.2 16.5 12.2C18 12.2 19.3 11.2 19.3 10C19.3 11.2 20.5 12.2 21.5 12.2" />
      <path d="M9.5 21V15.5C9.5 14.7 10.2 14 11 14H13C13.8 14 14.5 14.7 14.5 15.5V21" />
    </svg>
  );
}

export function LocationPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21.5C7.5 16.8 4 13.2 4 9.5C4 5.1 7.6 1.5 12 1.5C16.4 1.5 20 5.1 20 9.5C20 13.2 16.5 16.8 12 21.5Z" />
      <circle cx="12" cy="9.5" r="2.8" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function TaxCertificateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3" width="17" height="18" rx="2.5" />
      <line x1="7" y1="7.5" x2="14" y2="7.5" />
      <line x1="7" y1="11.5" x2="12" y2="11.5" />
      <line x1="7" y1="15.5" x2="10" y2="15.5" />
      <circle cx="16" cy="15" r="2.2" fill="currentColor" fillOpacity="0.2" />
      <path
        d="M15 17.2L14.2 19.5L16 18.7L17.8 19.5L17 17.2"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function RoyalCrownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 17.5L2 6.5L7.5 11L12 3.5L16.5 11L22 6.5L20 17.5H4Z" />
      <path d="M4 19H20C20.6 19 21 19.4 21 20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20C3 19.4 3.4 19 4 19Z" />
      <circle cx="2" cy="5.5" r="1.5" />
      <circle cx="12" cy="2.5" r="1.7" />
      <circle cx="22" cy="5.5" r="1.5" />
    </svg>
  );
}

export function SolidPhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
