import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

import { FaHouseChimney, FaBlenderPhone } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { RiComputerFill } from "react-icons/ri";

const index = () => {
  useEffect(() => {
    gsap.set(".navbar-animated", { opacity: 0 });

    gsap.fromTo(
      ".navbar-animated",
      {
        ease: "elastic.in",
        opacity: 0,
      },
      {
        delay: 2,
        opacity: 1,
        stagger: {
          each: 0.3,
        },
      }
    );
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full p-2  flex justify-center absolute ">
      <ul className="  w-full font-extrabold  text-[#F5F5F5] flex justify-center gap-10 text-3xl z-10">
        <li
          className="navbar-animated hover:cursor-pointer"
          onClick={() => scrollToSection("section1")}
        >
          <FaHouseChimney />
        </li>
        <li
          className="navbar-animated hover:cursor-pointer"
          onClick={() => scrollToSection("section2")}
        >
          <RiComputerFill />
        </li>
        <li
          className="navbar-animated hover:cursor-pointer"
          onClick={() => scrollToSection("section3")}
        >
          <PiCertificateFill />
        </li>
        <li
          className="navbar-animated hover:cursor-pointer"
          onClick={() => scrollToSection("section4")}
        >
          <FaBlenderPhone />
        </li>
      </ul>
    </nav>
  );
};

export default index;
