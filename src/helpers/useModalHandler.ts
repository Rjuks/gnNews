import { useCallback, useState } from 'react'

export const useModalHandler = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleHideModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return { showModal, handleShowModal, handleHideModal, setShowModal }
}
