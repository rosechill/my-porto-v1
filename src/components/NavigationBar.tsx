import React, { useState } from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'

import { FaHouseChimney, FaBlenderPhone } from 'react-icons/fa6'
import { PiCertificateFill } from 'react-icons/pi'
import { RiComputerFill } from 'react-icons/ri'
import { Tooltip } from '@nextui-org/react'
import { ArrowUpIcon } from '../../public/icon'
import { cn } from '../services/lib/cn'

const NavigationBar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    gsap.set('.navbar-animated', { opacity: 0 })

    gsap.fromTo(
      '.navbar-animated',
      {
        ease: 'elastic.in',
        opacity: 0,
      },
      {
        delay: 2,
        opacity: 1,
        stagger: {
          each: 0.3,
        },
      }
    )
  }, [])

  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="w-full flex justify-center relative z-[99999]">
      <ul className="text-xl shadow-md font-extrabold  text-red-700 flex justify-center gap-10 z-50 fixed top-4 bg-[#f5f5f5]  m-0-auto py-3 px-12 w-fit rounded-full border-3 border-red-700  shadow-custom max-lg:hidden ">
        <Tooltip showArrow content={'Home'} className="navbar-animated">
          <li className="px-4 hover:cursor-pointer" onClick={() => scrollToSection('section1')}>
            <FaHouseChimney />
          </li>
        </Tooltip>
        <Tooltip showArrow content={'Project'} className="navbar-animated">
          <li className="px-4 hover:cursor-pointer" onClick={() => scrollToSection('section2')}>
            <RiComputerFill />
          </li>
        </Tooltip>
        <Tooltip showArrow content={'Certificate'} className="navbar-animated">
          <li className="px-4 hover:cursor-pointer" onClick={() => scrollToSection('section3')}>
            <PiCertificateFill />
          </li>
        </Tooltip>
        <Tooltip showArrow content={'Contact'} className="navbar-animated">
          <li className="px-4 hover:cursor-pointer" onClick={() => scrollToSection('section4')}>
            <FaBlenderPhone />
          </li>
        </Tooltip>
      </ul>

      <ul className="shadow-md font-extrabold  text-red-700 flex justify-center gap-10 z-50 fixed top-4 bg-[#f5f5f5]  m-0-auto py-1 px-12 w-fit rounded-full border-3 border-red-700  shadow-custom lg:hidden ">
        <div className="flex gap-4" onClick={() => setOpen(!open)}>
          <p className="text-md">Menu</p>
          <ArrowUpIcon className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>

        {open && (
          <div
            className={
              `absolute top-12 space-y-4 w-fit px-2 bg-red-700 p-4 rounded-xl animate-fade-in-from-top` +
              cn({ 'animate-fade-out-to-top': !open })
            }
          >
            <Tooltip showArrow content={'Home'} className="navbar-animated">
              <li className="px-4 hover:cursor-pointer text-white" onClick={() => scrollToSection('section1')}>
                <FaHouseChimney />
              </li>
            </Tooltip>
            <Tooltip showArrow content={'Project'} className="navbar-animated">
              <li className="px-4 hover:cursor-pointer text-white" onClick={() => scrollToSection('section2')}>
                <RiComputerFill />
              </li>
            </Tooltip>
            <Tooltip showArrow content={'Certificate'} className="navbar-animated">
              <li className="px-4 hover:cursor-pointer text-white" onClick={() => scrollToSection('section3')}>
                <PiCertificateFill />
              </li>
            </Tooltip>
            <Tooltip showArrow content={'Contact'} className="navbar-animated">
              <li className="px-4 hover:cursor-pointer text-white" onClick={() => scrollToSection('section4')}>
                <FaBlenderPhone />
              </li>
            </Tooltip>
          </div>
        )}
      </ul>
    </nav>
  )
}

export default NavigationBar
