'use client'
import { useEffect, useState } from 'react'

export function useResponsive() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    isMobile: screenWidth !== null && screenWidth < 640,
    isTablet: screenWidth !== null && screenWidth >= 640 && screenWidth < 1024,
    isDesktop: screenWidth !== null && screenWidth >= 1024,
    isTabletOrMobile: screenWidth !== null && screenWidth < 1024,
    isReady: screenWidth !== null,
  }
}
