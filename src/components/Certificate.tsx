import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
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

  const data = sertifImages.map((item, index) => (
    <div key={index} className="px-6">
      <img
        src={item.sertifImage}
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
        onClick={() => setSelectedImage(item.sertifImage)}
      />
    </div>
  ))

  const NextArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2right-2 md:right-[-50px] w-10 h-10 rounded-full bg-[#151B54] text-white z-20"
    >
      ❯
    </button>
  )

  const PrevArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className=" absolute top-1/2 -translate-y-1/2 left-2 md:left-[-50px] w-10 h-10 rounded-full bg-[#151B54] text-white z-20"
    >
      ❮
    </button>
  )
  return (
    <div className="flex flex-col justify-center items-center" id="section3">
      <SectionTitle title="Certificates" />
      <div className="w-[80%] h-auto items-center mb-10 outline-none">
        <Slider
          dots={true}
          arrows={!isMobile}
          infinite={false}
          slidesToShow={isMobile ? 1 : 3}
          slidesToScroll={1}
          autoplay={false}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {data}
        </Slider>
      </div>
      <BlurredModal selectedImage={selectedImage} setImage={setSelectedImage} />
    </div>
  )
}

export default Certificate
