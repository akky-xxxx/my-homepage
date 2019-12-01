/**
 * import node_modules
 */
import { useState } from "react"

/**
 * import others
 */
import { PrefCode } from "../../../../shared/const/prefMap"
import { ModalStatus } from "../components/galleryModal"

/**
 * main
 */
export type HandleOpenModal = (imagePath: string, prefCode: PrefCode) => void

type UseModal = () => [ModalStatus, HandleOpenModal, () => void]

const useModal: UseModal = () => {
  const [modalStatus, setOpen] = useState<ModalStatus>({
    isOpen: false,
    imagePath: "",
    prefCode: "",
  })

  const handleOpenModal: HandleOpenModal = (imagePath, prefCode) => {
    setOpen({
      isOpen: true,
      imagePath: `/images/gallery${imagePath}`,
      prefCode,
    })
  }

  const handleCloseModal: () => void = () => {
    setOpen({
      isOpen: false,
      imagePath: "",
      prefCode: "",
    })
  }

  return [modalStatus, handleOpenModal, handleCloseModal]
}

export default useModal
