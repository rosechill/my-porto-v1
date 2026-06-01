'use client'
import Landing from '../components/LandingPage'

import { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import ContactHeaderSection from '../components/Contact'
import Footer from '../components/Footer'
import ProjectV2 from '../components/ProjectV2'
import Certificate from '../components/Certificate'
import BackToTop from '../components/BackToTop'
import { useResponsive } from '../hooks/useResponsive'
import ResponsiveWarningModal from './ResponsiveWarningModal'

export default function Main() {
  const { isTabletOrMobile } = useResponsive()

  const [show, setShow] = useState(false)
  const [hasShownWarning, setHasShownWarning] = useState(false)

  const isWarningModalShow = isTabletOrMobile && !hasShownWarning
  
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <div className="h-full w-full overflow-x-hidden relative">
      <NavigationBar />
      <Landing />
      <ProjectV2 />
      <Certificate />
      <ContactHeaderSection />
      <Footer />
      {show && <BackToTop />}
      {isWarningModalShow && <ResponsiveWarningModal onCloseModal={() => setHasShownWarning(true)} />}
    </div>
  )
}
