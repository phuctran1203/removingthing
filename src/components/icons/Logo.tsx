import type React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

export default function Logo({ ...props }: Props) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_2_63)">
        <rect x="23" width="19" height="58" fill="#FFCF11" />
        <rect
          x="42"
          y="64"
          width="16"
          height="42"
          transform="rotate(90 42 64)"
          fill="#FFCF11"
        />
        <rect width="19" height="58" fill="#FFCF11" />
        <rect x="46" width="34" height="80" fill="#FFCF11" />
      </g>
      <defs>
        <clipPath id="clip0_2_63">
          <rect width="80" height="80" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
