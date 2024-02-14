import Socmed from "../SocialMedia";
import ImageHero from "../ImageHero"
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useEffect } from "react";

const index = () => {
  const backgroundImage = useRef(null);
  const landingImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });

    timeline
      .from(backgroundImage.current, { clipPath: "inset(0)" })
      .to(landingImage.current, { height: "350px" }, 0);
  }, []);

  useEffect(() => {
    gsap.set(".transition-image", { scale:1 }); 

    gsap.fromTo(
      ".transition-image",
      {
        ease: "power4.inOut",
        scale: 1.5,
        opacity:0,
      },
      {
        delay:0.5,
        scale:1,
        opacity: 1,
      }
    );
  }, []);

  useEffect(() => {
    gsap.set(".text-container", { opacity: 0});
  
    gsap.fromTo(
      ".text-container",
      {
        ease: "power4.out",
        opacity: 0,
        x: 350,
      },
      {
        delay: 1,
        duration:1,
        opacity: 1,
        x: 0,
      }
    );
  }, []);
  
  useEffect(() => {
    gsap.set(".text-container2", { opacity: 0});
  
    gsap.fromTo(
      ".text-container2",
      {
        ease: "power4.out",
        opacity: 0,
        x: -350,
      },
      {
        delay: 1.5,
        duration:1,
        opacity: 1,
        x: 0,
      }
    );
  }, []);

  return (
    <div
      id="section1"
      ref={backgroundImage}
      className="relative h-screen w-full flex justify-center items-center bg-[#F5F5F5] overflow-hidden" 
      >
      <div ref={landingImage} className=" w-full h-full flex justify-center z-50">
        <div className="w-full relative  m-[5rem] border-4  border-red-700 shadow-2xl flex justify-center bg-[#F5F5F5]  ">
          <div className=" w-full h-full flex flex-col gap-5 z-10 justify-center ms-5 text-container">
            <h2 className="text-3xl text-red-700">Hay, i'm</h2>
            <h2 className="text-6xl text-red-700">Bagas Adytia</h2>
            <Socmed/>
          </div>
          <div className=" w-full h-full flex flex-col gap-5 z-[9999] items-end justify-center me-5 text-container2">
            <h2 className="text-3xl text-red-700">Passionate</h2>
            <h2 className="text-6xl text-red-700">Front End</h2>
            <h2 className="text-6xl text-red-700">Developer</h2>
          </div>
        </div>
        
      <ImageHero/>

        <h2 className="absolute bottom-0 text-[#F5F5F5]  text-xs z-50">
          sorry about this page
        </h2>
      </div>
      
      {/* styling */}
      <div className="w-full h-[3rem] absolute bg-red-700 bottom-[50%] "></div>
      <div className="w-full h-[3rem] absolute bg-red-700 top-0  "></div>
      <div className="w-full h-[3rem] absolute bg-red-700 bottom-0 "></div>

      <div className="absolute w-[60%] h-[7rem] bg-[#F5F5F5] bottom-0 left-0 -skew-y-[100deg]"></div>
      <div className="absolute w-[45%] h-[7rem] bg-[#F5F5F5] bottom-0 left-0 -skew-y-[100deg]"></div>
      <div className="absolute w-[30%] h-[7rem] bg-[#F5F5F5] bottom-0 left-0 -skew-y-[100deg]"></div>

      <div className="absolute w-[60%] h-[7rem] bg-[#F5F5F5] bottom-0 right-0 skew-y-[100deg]"></div>
      <div className="absolute w-[45%] h-[7rem] bg-[#F5F5F5] bottom-0 right-0 skew-y-[100deg]"></div>
      <div className="absolute w-[30%] h-[7rem] bg-[#F5F5F5] bottom-0 right-0 skew-y-[100deg]"></div>
    </div>
  );
};

export default index;
