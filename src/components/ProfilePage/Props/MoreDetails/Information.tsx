import React, { useState } from "react"
import InformationDescription from "./InformationDescription"
import { IoMdCloseCircleOutline } from "react-icons/io"

const Information = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }
  return (
    <div className="w-full relative">
      <div className="absolute top-0 right-0 text-xl cursor-pointer" onClick={handleEdit}>
        {!isEdit ? <div className="text-lg hover:underline">Edit</div> : <IoMdCloseCircleOutline />}
      </div>
      <InformationDescription isEdit={isEdit} setIsEdit={setIsEdit} />
    </div>
  )
}

export default Information
