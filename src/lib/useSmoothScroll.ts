"use client"

import { useCallback } from "react"

/**
 * Custom hook for smooth scrolling to page sections
 * @param {number} offset - Header height offset in pixels
 * @returns {(e: React.MouseEvent, sectionId: string) => void} - Scroll handler function
 */
export function useSmoothScroll(
  offset = 80,
): (e: React.MouseEvent, sectionId: string) => void {
  const scrollToSection = useCallback(
    (e: React.MouseEvent, sectionId: string): void => {
      e.preventDefault()

      const section = document.getElementById(sectionId)
      if (!section) return

      const sectionTop = section.getBoundingClientRect().top
      const offsetPosition = sectionTop + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    },
    [offset],
  )

  return scrollToSection
}

export default useSmoothScroll
