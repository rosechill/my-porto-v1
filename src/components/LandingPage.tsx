'use client'
import Socmed from './ScoialMedia'
import ImageHero from './ImageHero'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef, useEffect, useState } from 'react'
import React from 'react'
import DownloadResume from './DownloadResume'

const index = () => {
  const backgroundImage = useRef(null)
  const landingImage = useRef(null)

  const [ready, setReady] = useState(false)

  const doAnimation = () => {
    gsap.set('.transition-image', { scale: 1 })

    gsap.fromTo(
      '.transition-image',
      {
        ease: 'power4.inOut',
        scale: 1.5,
        opacity: 0,
      },
      {
        delay: 0.5,
        scale: 1,
        opacity: 1,
      }
    )

    gsap.set('.text-container', { opacity: 0 })

    gsap.fromTo(
      '.text-container',
      {
        ease: 'power4.out',
        opacity: 0,
        x: 350,
      },
      {
        delay: 1,
        duration: 1,
        opacity: 1,
        x: 0,
      }
    )

    gsap.set('.text-container2', { opacity: 0 })

    gsap.fromTo(
      '.text-container2',
      {
        ease: 'power4.out',
        opacity: 0,
        x: -350,
      },
      {
        delay: 1.5,
        duration: 1,
        opacity: 1,
        x: 0,
      }
    )

    gsap.fromTo(
      '.section1',
      {
        scale: 1.5,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: 'power4.inOut',
      }
    )
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        end: '+=500px',
        scrub: true,
      },
    })

    timeline.from(backgroundImage.current, { clipPath: 'inset(0)' }).to(landingImage.current, { height: '450px' }, 0)
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) {
      doAnimation()
    }
  }, [ready])

  const content = () => {
    return (
      <React.Fragment>
        {/* desktop */}
        <div ref={landingImage} className="w-full h-full flex justify-center z-50 max-lg:hidden ">
          <div className="w-full relative  m-[5rem] border-4  border-mynavy shadow-2xl flex justify-center bg-[#EEF3FF] rounded-3xl ">
            {ready && (
              <React.Fragment>
                <div className=" w-full h-full flex flex-col gap-5 z-10 justify-center ms-5 text-container">
                  <h2 className="xl:text-3xl text-xl text-mynavy">Hay, i'm</h2>
                  <h2 className="xl:text-6xl text-3xl font-extrabold text-mynavy">Bagas Adytia</h2>
                  <Socmed />
                </div>
                <div className=" w-full h-full flex flex-col gap-5 z-10 items-end justify-center me-5 text-container2">
                  <h2 className="xl:text-3xl text-xl  text-mynavy">Passionate</h2>
                  <h2 className="xl:text-6xl text-3xl font-extrabold text-mynavy">Software</h2>
                  <h2 className="xl:text-6xl text-3xl font-extrabold text-mynavy">Engineer</h2>
                  <DownloadResume />
                </div>
              </React.Fragment>
            )}
          </div>
          {ready && <ImageHero />}
        </div>

        {/* mobile */}
        <div className=" w-full h-full flex flex-col z-50 lg:hidden">
          <div className="flex flex-col pt-24 text-center gap-4">
            <h2 className="text-lg text-mynavy">Hay, i'm </h2>
            <h2 className="text-2xl font-extrabold text-mynavy">Bagas Adytia</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ImageHero />
            <Socmed />
          </div>
          <div className="flex flex-col text-center items-center gap-4 pt-4">
            <h2 className="text-lg text-mynavy">Passionate</h2>
            <h2 className="text-2xl font-extrabold text-mynavy">Software Engineer</h2>
            <DownloadResume />
          </div>
        </div>
      </React.Fragment>
    )
  }

  const stylingContent = () => {
    return (
      <React.Fragment>
        <div className="w-full h-[3rem] absolute bg-mynavy bottom-[50%] max-lg:hidden"></div>
        <div className="w-full h-[3rem] absolute bg-mynavy top-0 md:rounded-none rounded-b-full"></div>
        <div className="w-full h-[3rem] absolute bg-mynavy bottom-0 md:rounded-none rounded-t-full"></div>

        <div className="absolute w-[45%] h-[7rem] bg-[#F5F5F5] max-md:hidden bottom-0 left-0 -skew-y-[100deg]"></div>
        <div className="absolute w-[30%] h-[7rem] bg-[#F5F5F5] max-md:hidden bottom-0 left-0 -skew-y-[100deg]"></div>

        <div className="absolute w-[45%] h-[7rem] bg-[#F5F5F5] max-md:hidden bottom-0 right-0 skew-y-[100deg]"></div>
        <div className="absolute w-[30%] h-[7rem] bg-[#F5F5F5] max-md:hidden bottom-0 right-0 skew-y-[100deg]"></div>
      </React.Fragment>
    )
  }

  return (
    <div
      id="section1"
      ref={backgroundImage}
      className="relative h-screen w-full flex justify-center items-center bg-[#F5F5F5] overflow-hidden"
    >
      {content()}
      {stylingContent()}
    </div>
  )
}

export default index
