'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import animationData from '../../public/lotties/hero.json'
import Lottie from 'react-lottie'
import { useIsMobile } from '../hooks/useIsMobile'

const ImageHero = () => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
    }
  }, [])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const getSize = () => {
    if (isMobile) return 400
    return 500
  }

  return (
    <div className="absolute lg:-bottom-5 bottom-0 z-10 flex justify-center items-end">
      <div ref={imageRef}>
        <Lottie options={defaultOptions} height={getSize()} width={getSize()} />
      </div>
    </div>
  )
}

export default ImageHero
