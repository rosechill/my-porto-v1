import React from 'react'

export default function ArrowUpIcon({ className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={14}
      {...props}
      className={className}
    >
      <path
        fill="#b91c1c "
        d="M201.4 41.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 109.3 86.6 246.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160zM41.4 361.4l160-160c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 293.3 86.6 430.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z"
      />
    </svg>
  )
}
