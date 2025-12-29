import React from "react";

const SpinnerLoader = () => {
  return (
    <div role="status" className="flex items-center justify-center">
      <svg
        className="w-5 h-5 animate-spin text-white"
        viewBox="0 0 24 24"
        fill="none"
      >
        {/* Thin outer ring */}
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        />

        {/* Spinning arc */}
        <path
          d="M22 12a10 10 0 00-10-10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-90"
        />
      </svg>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoader;
