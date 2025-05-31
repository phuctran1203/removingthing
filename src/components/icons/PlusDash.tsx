import React from "react";

export default function PlusDash({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="stroke-primary"
        d="M31.5915 2.88062V22M44.5282 33.3135H62.5M31.5915 44.2389V62.0001M23.4225 34.224H3"
        stroke="black"
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  );
}
