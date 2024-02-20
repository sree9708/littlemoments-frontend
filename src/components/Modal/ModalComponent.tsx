import React, { ReactNode } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io"
import Modal from "react-modal"

interface ModalProps {
  isModalCloseAndOpen: boolean
  handleModal: (isOpen: boolean) => void
  title: string
  children: ReactNode
}

const ModalComponent = ({ isModalCloseAndOpen, handleModal, title, children }: ModalProps) => {
  return (
    <Modal
      isOpen={isModalCloseAndOpen}
      contentLabel="Review Modal"
      className={`z-50 w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 bg-background border-2 border-primary focus:outline-none focus:ring-transparent rounded-lg p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]`}
      style={{
        overlay: {
          backgroundColor: "#00000080",
          zIndex: 55,
        },
      }}
    >
      <div className="relative z-50">
        <div className="font-title text-4xl md:text-6xl mb-2">{title}</div>
        <button onClick={() => handleModal(false)} className="absolute -top-2 -right-2 text-xl">
          <IoMdCloseCircleOutline />
        </button>
        {children}
      </div>
    </Modal>
  )
}

export default ModalComponent
