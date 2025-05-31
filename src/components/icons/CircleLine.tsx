import React from "react";

export default function CircleLine({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="105"
      height="89"
      viewBox="0 0 105 89"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="stroke-primary"
        d="M100.863 37.256C73.8633 -14.2439 12.4188 0.698246 5.36368 37.256C0.00469506 65.025 11.3635 74.2561 23.3635 80.756C35.3635 87.2559 51.6507 83.6832 61.8633 74.2561C74.863 62.2562 80.8633 40.7565 57.3633 28.2565C41.5144 19.8263 19.8631 45.2561 36.8631 54.7561"
        stroke="black"
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  );
}
