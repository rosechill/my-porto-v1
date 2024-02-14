import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sertifImages = [
  { id: 1, sertifImage: "/s1.jpeg" },
  { id: 2, sertifImage: "/s2.jpeg" },
  { id: 3, sertifImage: "/s3.jpeg" },
  { id: 4, sertifImage: "/s4.jpeg" },
  { id: 5, sertifImage: "/s5.jpeg" },
  { id: 6, sertifImage: "/s6.jpeg" },
  { id: 7, sertifImage: "/s7.jpeg" },
];

const Index = () => {
  const sertifRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const element = sertifRef.current;

      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop - windowHeight / 2 < windowHeight * 0.5) {
          gsap.fromTo(
            element,
            {
              ease: "none",
              y: -50,
              opacity: 0,
            },
            {
              delay: 0.5,
              y: 0,
              opacity: 1,
              duration: 1,
            }
          );
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="section3" className="h-full bg-[#F5F5F5] w-screen text-center overflow-hidden">
      <div className="w-full pt-5 pb-10 flex gap-4 justify-center items-center">
        <div className="w-3/12 h-[4px] bg-red-700"></div>
        <h2 ref={sertifRef} className="sertif-transition text-5xl w-auto text-red-500 z-10">Certificate</h2>
        <div className="w-3/12 h-[4px] bg-red-700"></div>
      </div>
      <div className="w-full h-auto items-center mb-10">
        <Slider {...settings}>
          {sertifImages.map((imageData) => (
            <div key={imageData.id}>
              <img
                src={imageData.sertifImage}
                className="w-[50%] m-0-auto"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Index;
