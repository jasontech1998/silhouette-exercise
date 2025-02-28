import type { SVGProps } from "react"

export const SilhouetteLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 10C72.0914 10 90 27.9086 90 50C90 72.0914 72.0914 90 50 90C27.9086 90 10 72.0914 10 50C10 27.9086 27.9086 10 50 10Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M65 35C65 26.7157 58.2843 20 50 20C41.7157 20 35 26.7157 35 35V50C35 58.2843 41.7157 65 50 65H65V80H50C36.1929 80 25 68.8071 25 55V45C25 31.1929 36.1929 20 50 20C63.8071 20 75 31.1929 75 45V50H65V35Z"
      fill="black"
    />
  </svg>
)
