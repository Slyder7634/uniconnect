import type { SVGProps } from "react";

export const Icons = {
  Logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 10v6" />
      <path d="M2 10v6" />
      <path d="m22 10-8.97 3.32a2 2 0 0 1-2.06 0L2 10" />
      <path d="m12 18 8-3-8-3-8 3 8 3Z" />
      <path d="M12 22v-3" />
      <path d="M20 6.32a2 2 0 0 0-2.06-1.92L12 2 5.06 4.4a2 2 0 0 0-2.06 1.92L12 10Z" />
    </svg>
  ),
};
