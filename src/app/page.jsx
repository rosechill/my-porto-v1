'use client';
import Landing from '../components/Landing'
import Navigation from '../components/NavigationBar'
import Certificate from '../components/Sertifikat'
import Project from '../components/Project'

import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {

    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  }, [])

  return (
    <div className="h-full w-full bg-[#2c2b2b] overflow-x-hidden">
      <Navigation />
      <Landing />
      <Project />
      <Certificate />
    </div>
  );
}
