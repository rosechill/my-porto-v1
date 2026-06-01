import React, { useState } from 'react'
import { Modal, ModalBody, ModalContent } from '@nextui-org/react'
import { WarniningModalProps } from '../types/definition'

const ResponsiveWarningModal: React.FC<WarniningModalProps> = ({ onCloseModal }) => {
  const [isOpen, setIsOpen] = useState(true)

  const onClose = () => {
    setIsOpen(false)
    onCloseModal()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl" backdrop="blur" className="bg-black/80" placement="center">
      <ModalContent>
        <ModalBody className="p-8 bg-white">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="text-5xl">💻</div>
            <h2 className="text-2xl font-bold text-mynavy">Best Viewed on Desktop</h2>
            <p className="text-gray-600 max-w-md">
              This website is optimized for larger screens. While you can continue using it on your current device, some
              features and layouts may not provide the best experience.
            </p>
            <p className="text-gray-500 text-sm">
              For the best experience, please access this website from a laptop or desktop computer.
            </p>
            <button onClick={onClose} className="mt-4 px-6 py-2 rounded-lg bg-mynavy text-white">
              Continue Anyway
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ResponsiveWarningModal
