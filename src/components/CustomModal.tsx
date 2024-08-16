import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'

const CustomModal = ({ backdrop, size, isOpen, onClose, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Modal
      backdrop={backdrop}
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      className="border-4 border-red-700 bg-[#f5f5f5]"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 justify-center items-center">{data.title}</ModalHeader>
        <ModalBody>
          <Slider {...settings}>
            {data.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index + 1}`} className="w-[100%]" loading="lazy" />
              </div>
            ))}
          </Slider>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CustomModal
