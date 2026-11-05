/** Pixel-outlined cloud used as a decorative hero background element. */
export default function Cloud({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M25 45H100C110 45 115 35 110 25C105 15 92 16 88 20C82 8 60 6 52 18C44 14 32 18 32 28C22 28 15 35 25 45Z"
        fill="#FFFDF5"
        stroke="#141416"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}
