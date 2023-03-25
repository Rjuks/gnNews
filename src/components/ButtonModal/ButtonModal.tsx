import { useCallback, useMemo, useState } from 'react'
import { Button, Modal as AntModal } from 'antd'

interface HeaderButtonModalProps {
  buttonText: string
  modalTitle: string
  modalContent?: string
}

export const ButtonModal = ({
  buttonText,
  modalContent,
  modalTitle
}: HeaderButtonModalProps) => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleHideModal = useCallback(() => {
    setShowModal(false)
  }, [])

  const modal = useMemo(() => {
    if (!showModal) {
      return null
    }

    return (
      <AntModal
        visible={showModal}
        onCancel={handleHideModal}
        title={modalTitle}
        centered
        footer={null}
      >
        {modalContent}
      </AntModal>
    )
  }, [showModal])

  return (
    <>
      {modal}
      <Button onClick={handleShowModal}>{buttonText}</Button>
    </>
  )
}
