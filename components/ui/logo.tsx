import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-110"
      >
        {/* Interlocking G and S design - minimalist abstract */}
        <circle cx="18" cy="18" r="16" stroke="#4F46E5" strokeWidth="2" fill="none" />
        {/* G shape - simplified */}
        <path
          d="M18 12C15.79 12 14 13.79 14 16V20C14 22.21 15.79 24 18 24C19.38 24 20.63 23.5 21.54 22.7L19.5 20.5C19.04 20.84 18.55 21 18 21C16.9 21 16 20.1 16 19V17C16 15.9 16.9 15 18 15C19.1 15 20 15.9 20 17V18H22V17C22 14.79 20.21 12 18 12Z"
          fill="#4F46E5"
        />
        {/* S shape - simplified curve */}
        <path
          d="M18 14C16.9 14 16 14.9 16 16C16 17.1 16.9 18 18 18C19.1 18 20 17.1 20 16C20 14.9 19.1 14 18 14ZM18 20C16.9 20 16 20.9 16 22C16 23.1 16.9 24 18 24C19.1 24 20 23.1 20 22C20 20.9 19.1 20 18 20Z"
          fill="#4F46E5"
          opacity="0.8"
        />
      </svg>
      <span className="text-xl font-extrabold text-gray-900 font-sans">
        GymSwap<span className="text-indigo-600">.ai</span>
      </span>
    </Link>
  );
}

