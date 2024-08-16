'use client'
import Landing from '../components/LandingPage'

import { useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import Project from '../components/Project'
import Sertifikat from '../components/Sertifikat'
import ContactHeaderSection from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
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
      {/* <InfiniteMovingCardsDemo /> */}
      <Project />
      <Sertifikat />
      <ContactHeaderSection />
      <Footer />
    </div>
  )
}
