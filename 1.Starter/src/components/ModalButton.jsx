import React, { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"

export default function ModalButton() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="block w-fit mx-auto bg-slate-200 text-slate-900 py-2 px-3 rounded"
      >
        Open the modal
      </button>
      {showModal &&
        createPortal(
          <ModalContent closeModal={() => setShowModal(false)} />,
          document.body
        )}
    </>
  )
}
