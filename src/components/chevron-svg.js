import React from "react"

const Chevron = props => (
  <div>
    <svg
      width={props.size}
      height={props.size}
      fill="none"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.585 43.17c11.921 0 21.585-9.664 21.585-21.585C43.17 9.664 33.506 0 21.585 0 9.664 0 0 9.664 0 21.585 0 33.506 9.664 43.17 21.585 43.17z"
        fill="#578F1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9 14.477a2.158 2.158 0 0 1 3.053-3.052l8.634 8.634c.843.843.843 2.21 0 3.052l-8.634 8.634a2.158 2.158 0 1 1-3.053-3.052l7.108-7.108-7.108-7.108z"
        fill="#EBF9DC"
      />
    </svg>
  </div>
)

export default Chevron
