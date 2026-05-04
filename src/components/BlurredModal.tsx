import React from 'react'
import { Modal, ModalBody, ModalContent } from '@nextui-org/react'
import { BlurredModalProps } from '../types/definition'

const BlurredModal = ({ selectedImage, setImage }: BlurredModalProps) => {
  return (
    <Modal
      isOpen={!!selectedImage}
      onClose={() => setImage(null)}
      size="5xl"
      backdrop="blur"
      className="bg-black/80"
      placement="center"
    >
      <ModalContent>
        <ModalBody className="p-0 flex items-center justify-center">
          {selectedImage && <img src={selectedImage} alt="Preview" className="w-full max-h-[90vh] object-contain" />}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default BlurredModal
