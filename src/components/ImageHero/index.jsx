import { useState, useRef } from 'react';
import { gsap } from 'gsap';

const index = () => {
    const [showFirstImage, setShowFirstImage] = useState(true);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);

  const handleClick = () => {
    setShowFirstImage(!showFirstImage);

    const fadeInImage = showFirstImage ? image2Ref.current : image1Ref.current;
    const fadeOutImage = showFirstImage ? image1Ref.current : image2Ref.current;

    gsap.fromTo(
        fadeInImage,
        { opacity: 1, x: showFirstImage ? '-3%' : '3%' },
        { opacity: 1, x: '0%', duration: 0.5, ease: 'power2.inOut' }
      );
  
      gsap.to(fadeOutImage, { opacity: 1, duration: 0.5 });
  };

  return (
    <div className="image-container transition-image absolute bottom-0 z-10 hover:cursor-pointer flex justify-center items-end" onClick={handleClick}>
      <img
        ref={image1Ref}
        className={`  transition-opacity  ${showFirstImage ? "" : "hidden"}`}
        src="/dit-red.png"
        width={500}
        height={500}
        alt="Picture 1"
      />
      <img
        ref={image2Ref}
        className={` transition-opacity  ${showFirstImage ? "hidden" : ""}`}
        src="/dit-white.png"
        width={500}
        height={500}
        alt="Picture 2"
      />
    </div>
  );
};

export default index;
