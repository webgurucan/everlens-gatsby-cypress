import React from "react"

const OrderPlaced = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="56"
    viewBox="0 0 56 56"
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="28" cy="28" r="28" fill="#EDF5F1" />
      <g stroke="#007377" strokeLinejoin="round" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M28 25.333L0 25.333 0 9.333 28 9.333z"
          transform="translate(14 15.333)"
        />
        <path
          fill="#B8DDE1"
          d="M23.333 20.667L16.667 20.667 16.667 12.667 23.333 12.667z"
          transform="translate(14 15.333)"
        />
        <path
          strokeLinecap="round"
          d="M24.275 9.333L2.793 9.333 0 0 28 0z"
          transform="translate(14 15.333) matrix(1 0 0 -1 0 9.333)"
        />
        <path
          strokeLinecap="round"
          d="M2 4.333L25.883 4.333"
          transform="translate(14 15.333)"
        />
      </g>
    </g>
  </svg>
)

export default OrderPlaced
