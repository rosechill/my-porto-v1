import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sertifImages = [
  { id: 1, sertifImage: '/s8.jpeg' },
  { id: 2, sertifImage: '/s9.jpeg' },
  { id: 3, sertifImage: '/s3.jpeg' },
  { id: 4, sertifImage: '/s4.jpeg' },
  { id: 5, sertifImage: '/s5.jpeg' },
  { id: 6, sertifImage: '/s6.jpeg' },
  { id: 7, sertifImage: '/s7.jpeg' },
  { id: 8, sertifImage: '/s1.jpeg' },
  { id: 9, sertifImage: '/s2.jpeg' },
]

const Sertifikat = () => {
  const sertifRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const element = sertifRef.current

      if (element) {
        const elementTop = element.getBoundingClientRect().top
        if (elementTop - windowHeight / 2 < windowHeight * 0.5) {
          gsap.fromTo(
            element,
            {
              ease: 'none',
              y: -50,
              opacity: 0,
            },
            {
              delay: 0.5,
              y: 0,
              opacity: 1,
              duration: 1,
            }
          )
          window.removeEventListener('scroll', handleScroll)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  }

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  }

  return (
    <div id="section3" className="h-full bg-[#F5F5F5] w-screen text-center overflow-hidden lg:py-10 py-5 space-y-5">
      <div className="w-full pt-5 lg:pb-10 pb-5 flex gap-4 justify-center items-center">
        <div className="w-3/12 lg:h-[4px] h-[2px] bg-red-700"></div>
        <h2 ref={sertifRef} className="sertif-transition lg:text-5xl text-xl w-auto text-red-500 z-10">
          Certificate
        </h2>
        <div className="w-3/12 lg:h-[4px] h-[2px] bg-red-700"></div>
      </div>
      <div className="w-full h-auto items-center mb-10 max-lg:hidden">
        <Slider {...settings}>
          {sertifImages.map(imageData => (
            <div key={imageData.id} className="pb-10">
              <img src={imageData.sertifImage} className="w-[90%] h-[350px] m-0-auto rounded-lg " loading="lazy" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full h-auto items-center mb-10 lg:hidden">
        <Slider {...settings2}>
          {sertifImages.map(imageData => (
            <div key={imageData.id} className="pb-10">
              <img src={imageData.sertifImage} className="w-[90%] h-[250px] m-0-auto rounded-lg " loading="lazy" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Sertifikat
