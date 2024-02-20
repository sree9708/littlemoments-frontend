import { useState, useEffect } from "react"
import Modal from "react-modal"

interface UseModalReturn {
  isModalOpen: boolean
  handleOpenModal: () => void
  handleCloseModal: () => void
  ModalComponent: (props: Modal.Props) => JSX.Element
}

export const useModal = (): UseModalReturn => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const ModalComponent = (props: Modal.Props) => (
    <Modal
      {...props}
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      className={`z-50 w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 bg-background border-2 border-primary focus:outline-none focus:ring-transparent rounded-lg p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]`}
      style={{
        overlay: {
          backgroundColor: "#00000080",
        },
      }}
    />
  )

  useEffect(() => {
    Modal.setAppElement("#root")
  }, [])

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    ModalComponent,
  }
}
