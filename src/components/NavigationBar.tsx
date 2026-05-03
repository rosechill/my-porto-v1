'use client'

import React, { useState, useEffect } from 'react'
import gsap from 'gsap'

import { FaHouseChimney, FaBlenderPhone } from 'react-icons/fa6'
import { PiCertificateFill } from 'react-icons/pi'
import { RiComputerFill } from 'react-icons/ri'
import { Tooltip } from '@nextui-org/react'
import { ArrowUpIcon } from '../../public/icon'
import { cn } from '../services/lib/cn'

const navItems = [
  { icon: <FaHouseChimney />, label: 'Home', id: 'section1' },
  { icon: <RiComputerFill />, label: 'Project', id: 'section2' },
  { icon: <PiCertificateFill />, label: 'Certificate', id: 'section3' },
  { icon: <FaBlenderPhone />, label: 'Contact', id: 'section4' },
]

const NavigationBar = () => {
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!ready) return

    gsap.set('.navbar-animated', { opacity: 0 })

    gsap.fromTo(
      '.navbar-animated',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: {
          each: 0.2,
        },
      }
    )
  }, [ready])

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!ready) return

  return (
    <nav className="w-full flex justify-center relative z-[99999]">
      {/* DESKTOP */}
      <ul
        className="
          text-xl font-extrabold text-mynavy flex justify-center gap-6 z-50
          fixed top-4 py-3 px-10 w-fit rounded-full max-lg:hidden

          backdrop-blur-md bg-white/70
          border-2 border-mynavy
          shadow-[0_10px_30px_rgba(21,27,84,0.2)]
          navbar-animated
        "
      >
        {navItems.map((item, index) => (
          <Tooltip key={index} showArrow content={item.label}>
            <li
              onClick={() => scrollToSection(item.id)}
              className="
                group px-4 rounded-full cursor-pointer
                transition-all duration-300

                hover:bg-myblue-50
                hover:text-myblue-600
                hover:scale-110
                active:scale-95
              "
            >
              <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(77,135,255,0.7)]">
                {item.icon}
              </span>
            </li>
          </Tooltip>
        ))}
      </ul>

      {/* MOBILE */}
      <ul
        className="
          font-extrabold text-mynavy flex justify-center items-center
          fixed top-4 w-[90%] px-6 py-3 rounded-full lg:hidden

          backdrop-blur-md bg-white/70
          border border-mynavy
          shadow-[0_10px_30px_rgba(21,27,84,0.2)]
          max-w-[300px]
        "
      >
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setOpen(!open)}>
          <p className="text-sm font-semibold">Menu</p>
          <ArrowUpIcon className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </div>

        {open && (
          <div
            className={`
              absolute top-14 left-1/2 -translate-x-1/2
              w-[220px] space-y-4 p-4 rounded-2xl

              bg-mynavy/95 backdrop-blur-lg
              shadow-[0_10px_30px_rgba(21,27,84,0.4)]

              animate-fade-in-from-top
              ${cn({ 'animate-fade-out-to-top': !open })}
            `}
          >
            {navItems.map((item, index) => (
              <Tooltip key={index} showArrow content={item.label}>
                <li
                  onClick={() => {
                    scrollToSection(item.id)
                    setOpen(false)
                  }}
                  className="
                    flex justify-center text-white text-xl
                    cursor-pointer transition-all duration-300

                    hover:scale-110
                    hover:text-myblue-300
                  "
                >
                  {item.icon}
                </li>
              </Tooltip>
            ))}
          </div>
        )}
      </ul>
    </nav>
  )
}

export default NavigationBar
