import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import { sertifImages } from '../utils/constant'
import BlurredModal from './BlurredModal'

const Certificate = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: isMobile ? 3000 : 2000,
    cssEase: 'linear',
  }

  return (
    <div className="flex flex-col justify-center items-center" id="section3">
      <SectionTitle title="Certificates" />
      <div className="w-[80%] h-auto items-center mb-10 outline-none">
        <Slider {...settings}>
          {sertifImages.map(imageData => (
            <div key={imageData.sertifImage} className="px-6">
              <img
                src={imageData.sertifImage}
                className="
                  w-full 
                  max-w-[400px] 
                  mx-auto 
                  h-[250px] lg:h-[350px]
                  object-contain 
                  rounded-lg
                  cursor-pointer
                "
                loading="lazy"
                onClick={() => setSelectedImage(imageData.sertifImage)}
              />
            </div>
          ))}
        </Slider>
      </div>
      <BlurredModal selectedImage={selectedImage} setImage={setSelectedImage} />
    </div>
  )
}

export default Certificate
