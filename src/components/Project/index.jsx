import gsap from "gsap";
import { useEffect } from "react";
import React from "react";
import Image from "next/image";
import CustomModal from "../CustomModal";
import { RiExternalLinkFill } from "react-icons/ri";
import {
  useDisclosure,
} from "@nextui-org/react";


const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const [size, setSize] = React.useState("md");

  const {
    isOpen: isOpenSecondModal,
    onOpen: onOpenSecondModal,
    onClose: onCloseSecondModal,
  } = useDisclosure();

  const [secondModalBackdrop, setSecondModalBackdrop] =
    React.useState("opaque");

  const [secondModalSize, setSecondModalSize] = React.useState("md");

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    setSize("5xl");
    onOpen();
  };

  const handleOpenSecondModal = (backdrop) => {
    setSecondModalBackdrop(backdrop);
    setSecondModalSize("5xl");
    onOpenSecondModal();
  };

  const modalData = [
    {
      title: "Travelxism",
      content: "Lorem ",
      images: [
        "travelxism.jpeg",
        "/t1.jpeg",
        "/t2.jpeg",
        "/t3.jpeg",
        "/t4.jpeg",
        "/t5.jpeg",
        "/t6.jpeg",
        "/t7.jpeg",
        "/t8.jpeg",
        "/t9.jpeg",
        "/t10.jpeg",
      ],
    },
    {
      title: "FunRobo",
      content: "Another set of content...",
      images: [
        "/funrobo.jpeg",
        "/f1.jpeg",
        "/f2.jpeg",
        "/f3.jpeg",
        "/f4.jpeg",
        "/f5.jpeg",
        "/f6.jpeg",
        "/f7.jpeg",
        "/f8.jpeg",
        "/f9.jpeg",
        "/f10.jpeg",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.querySelector(".line-transition");

      if (scrollPosition > element.offsetTop - windowHeight / 2) {
        gsap.fromTo(
          ".line-transition",
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="section2" className="h-auto w-full  bg-[#F5F5F5] justify-center  relative overflow-hidden">
      <div className="  w-full pt-20 flex gap-4 justify-center items-center ">
        <div className="w-3/12 h-[4px] bg-red-700 "></div>
        <h2 className=" line-transition text-5xl w-auto text-red-500 z-10">Highlighted Project</h2>
        <div className=" w-3/12 h-[4px] bg-red-700 "></div>
      </div>

      <div className=" w-full h-auto flex flex-col gap-2 justify-center items-center pt-10 text-red-700 text-xl">
        <h2>This section will show you my projects </h2>
        <h2>Please give me your time :)</h2>
      </div>

      {/* Project */}
      <div className=" w-auto h-full m-[3rem] border-[4px] border-red-700 flex  flex-col gap-4 relative ">
        <div className="absolute -top-5 z-10 w-full h-auto flex justify-center rounded-full text-red-500 ">
          <h2 className="bg-[#F5F5F5] text-3xl px-4">Main Project</h2>
        </div>
        <div className="w-full h-full flex gap-6 justify-center items-center p-8 ">
          {/* modal trigger */}
          <div className="w-2/4 ">
            {backdrops.map((b) => (
              <div className="py-4" key={b}>
                <a className="text-3xl text-red-500  transition duration-300 ease-in-out hover:text-red-800 flex justify-center gap-4" href="https://travelxism.com/" target="_blank">
                  travelxism.com <RiExternalLinkFill/>
                </a>
                <h2 className="text-xl py-4 text-justify">
                  internship project, re-create the UI UX Responsive appearance of company website
                  based on the braimstorming with team and suggestions from
                  several respondents
                </h2>
                <Image
                  className=" h-full w-full cursor-pointer "
                  key={b}
                  onClick={() => handleOpen(b, size)}
                  src="/travelxism.jpeg"
                  width={400}
                  height={300}
                  alt="Picture of the author"
                />
              </div>
            ))}
          </div>
          {/* modal data */}
          <CustomModal
            backdrop={backdrop}
            size={size}
            isOpen={isOpen}
            onClose={onClose}
            data={modalData[0]}
          />

          <div className="w-2/4 ">
            {backdrops.map((b) => (
              <div key={b}>
                <a className="text-3xl text-red-500  transition duration-300 ease-in-out hover:text-red-800 flex justify-center gap-4" href="https://funrobo.id/" target="_blank">
                  funrobo.id <RiExternalLinkFill/>
                </a>
                <h2 className="text-xl py-4 text-justify">
                  freelance project, create the information system website for the company. have a few features like translate, article, responsive web etc.
                </h2>
              <Image
                className=" h-full w-full cursor-pointer "
                key={b}
                onClick={() => handleOpenSecondModal(b, size)}
                src="/funrobo.jpeg"
                width={400}
                height={300}
                alt="Picture of the author"
                />
              </div>
            ))}
          </div>

          <CustomModal
            backdrop={secondModalBackdrop}
            size={secondModalSize}
            isOpen={isOpenSecondModal}
            onClose={onCloseSecondModal}
            data={modalData[1]}
          />
        </div>
      </div>

      <div className="w-auto h-full m-[3rem] border-[4px] border-red-700 flex  flex-col gap-4 relative ">
        <div className="absolute -top-5 z-10 w-full h-auto flex justify-center rounded-full text-red-500 ">
          <h2 className="bg-[#F5F5F5] text-3xl px-4">Mini Project</h2>
        </div>
        <div className="w-full p-4 h-auto text-red-700">
          <h2 className="">
            Sorry for the inconvenience, <br></br> this section is still under
            development.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Index;
