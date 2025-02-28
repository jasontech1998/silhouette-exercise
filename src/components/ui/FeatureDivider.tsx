"use client"

import { cx } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Divider } from "../Divider"

export default function FeatureDivider({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Divider className={cx("my-12", className)}>
      <div
        className={`relative flex items-center justify-center transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="relative flex h-6 w-16 items-center justify-center">
          {/* Animated pulse ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute size-2 rounded-full bg-gray-300" />
            <div
              className="absolute size-8 rounded-full border border-gray-600/40"
              style={{ animation: "pulse-ring 3s infinite ease-out" }}
            />
            <div
              className="absolute size-12 rounded-full border border-gray-600/20"
              style={{
                animation: "pulse-ring 3s infinite ease-out",
                animationDelay: "0.5s",
              }}
            />
          </div>

          {/* Horizontal animated lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute -left-4 h-[1px] w-3 bg-gray-300/80"
              style={{ animation: "width-pulse 3s infinite ease-in-out" }}
            />
            <div
              className="absolute -right-4 h-[1px] w-3 bg-gray-300/80"
              style={{
                animation: "width-pulse 3s infinite ease-in-out",
                animationDelay: "0.5s",
              }}
            />
          </div>

          {/* Vertical animated lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute -top-4 h-3 w-[1px] bg-gray-300/80"
              style={{
                animation: "height-pulse 3s infinite ease-in-out",
                animationDelay: "0.25s",
              }}
            />
            <div
              className="absolute -bottom-4 h-3 w-[1px] bg-gray-300/80"
              style={{
                animation: "height-pulse 3s infinite ease-in-out",
                animationDelay: "0.75s",
              }}
            />
          </div>
        </div>
      </div>
    </Divider>
  )
}
