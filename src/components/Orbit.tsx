"use client"

import { cx } from "@/lib/utils"
import type React from "react"

export interface OrbitingObjectProps {
  /** Radius of the orbit in pixels */
  radiusPx?: number
  /** Center element */
  children: React.ReactNode
  /** Array of elements to orbit around the center */
  orbitingObjects: React.ReactNode[]
  /** Default size of orbiting objects (in pixels) for positioning */
  defaultObjectSize?: number
  /** Duration of one complete orbit in seconds */
  durationSeconds?: number
  /** Keep orbiting upright */
  keepUpright?: boolean
  /** Direction of rotation (clockwise or counter-clockwise) */
  direction?: "clockwise" | "counter-clockwise"
  /** Custom class for the container */
  className?: string
  /** Custom class for the orbital path */
  pathClassName?: string
  /** Whether to show the orbital path */
  showPath?: boolean
  /** Whether animations should play (useful for pausing) */
  isAnimating?: boolean
  /** Prefer reduced motion for accessibility */
  respectReducedMotion?: boolean
}

export const Orbit = ({
  radiusPx = 144,
  children,
  orbitingObjects = [],
  defaultObjectSize = 32,
  durationSeconds = 8,
  keepUpright = false,
  direction = "counter-clockwise",
  className,
  pathClassName,
  showPath = true,
  isAnimating = true,
  respectReducedMotion = true,
}: OrbitingObjectProps) => {
  const orbitDiameter = radiusPx * 2
  const containerSize = orbitDiameter + defaultObjectSize
  const initialOffset = radiusPx + defaultObjectSize / 2

  // Handle reduced motion preference
  const prefersReducedMotionQuery =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : { matches: false }
  const shouldReduceMotion =
    respectReducedMotion && prefersReducedMotionQuery.matches

  // Determine animation direction
  const animationDirection =
    direction === "counter-clockwise" ? "reverse" : "normal"

  const positionedObjects = orbitingObjects.map((object, index) => {
    const delaySeconds = -(index * (durationSeconds / orbitingObjects.length))
    const angle = (360 / orbitingObjects.length) * index

    // For reduced motion or when animations are paused, position objects statically
    const staticPosition =
      !isAnimating || shouldReduceMotion
        ? {
            transform: `rotate(${angle}deg) translateX(${radiusPx}px)`,
            transformOrigin: "center center",
          }
        : {}

    return (
      <div
        key={index}
        className="absolute flex items-center justify-center"
        style={{
          ...staticPosition,
          ...(!shouldReduceMotion && isAnimating
            ? {
                animationName: "orbit-spin",
                animationDuration: `${durationSeconds}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationDelay: `${delaySeconds}s`,
                animationDirection,
                animationPlayState: isAnimating ? "running" : "paused",
              }
            : {}),
          transformOrigin: `calc(50% + ${radiusPx}px) 50%`,
          left: `calc(50% - ${initialOffset}px)`,
          top: `calc(50% - ${defaultObjectSize / 2}px)`,
          width: `${defaultObjectSize}px`,
          height: `${defaultObjectSize}px`,
        }}
        aria-hidden="true"
      >
        {/* Counter-rotating container to keep object upright */}
        <div
          className="flex h-full w-full items-center justify-center"
          style={
            keepUpright && !shouldReduceMotion && isAnimating
              ? {
                  animationName: "orbit-spin",
                  animationDuration: `${durationSeconds}s`,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDelay: `${delaySeconds}s`,
                  animationDirection:
                    direction === "clockwise" ? "reverse" : "normal",
                  animationPlayState: isAnimating ? "running" : "paused",
                }
              : keepUpright && shouldReduceMotion
                ? {
                    transform: `rotate(${-angle}deg)`,
                  }
                : undefined
          }
        >
          {object}
        </div>
      </div>
    )
  })

  return (
    <>
      <div
        className={cx(
          "orbit-container relative flex items-center justify-center",
          className,
        )}
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
        }}
        role="presentation"
      >
        {/* Orbital path */}
        {showPath && (
          <div
            className={cx(
              "absolute rounded-full border border-gray-300 bg-gray-500/5 dark:border-gray-700 dark:bg-gray-800/10",
              isAnimating && !shouldReduceMotion && "animate-pulse",
              pathClassName,
            )}
            style={{
              width: `${orbitDiameter}px`,
              height: `${orbitDiameter}px`,
            }}
            aria-hidden="true"
          />
        )}

        {/* Orbiting objects */}
        {positionedObjects}

        {/* Center object (children) */}
        <div className="relative z-10">{children}</div>
      </div>
    </>
  )
}
