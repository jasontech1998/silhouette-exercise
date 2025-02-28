"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Scroll to top when the path or search params change (or on initial load)
    window.scrollTo(0, 0)
  }, [pathname, searchParams])

  return null // This component doesn't render anything
}
