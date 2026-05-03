'use client'
import Landing from '../components/LandingPage'

import { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import ContactHeaderSection from '../components/Contact'
import Footer from '../components/Footer'
import ProjectV2 from '../components/ProjectV2'
import Certificate from '../components/Certificate'
import BackToTop from '../components/BackToTop'

export default function Main() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
    </div>
  )
}
