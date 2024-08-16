import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'

import { FaHouseChimney, FaBlenderPhone } from 'react-icons/fa6'
import { PiCertificateFill } from 'react-icons/pi'
import { RiComputerFill } from 'react-icons/ri'
import { Tooltip } from '@nextui-org/react'

const NavigationBar = () => {
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
    <nav className="w-full flex justify-center relative">
      <ul className=" font-extrabold  text-[#F5F5F5] flex justify-center gap-10 text-3xl z-50 fixed top-0 bg-red-700 m-0-auto py-2 lg:w-2/6 w-5/6 rounded-b-full shadow-custom">
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
    </nav>
  )
}

export default NavigationBar
