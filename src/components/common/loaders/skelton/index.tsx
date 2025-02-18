import type React from "react"

interface SkeletonLoaderProps {
  className?: string
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className = "min-w-[200px] min-h-[200px]" }) => {
  return (
    <div className={`${className} overflow-hidden rounded-md bg-gray-200 relative`}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
    </div>
  )
}
