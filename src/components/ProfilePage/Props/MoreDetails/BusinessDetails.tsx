import BusinessDetailsForm from "@/components/Forms/ProfileProps/BusinessDetailsForm"
import React, { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { IoMdCloseCircleOutline } from "react-icons/io"
import BusinessDetailsDescription from "./BusinessDetailsDescription"

const BusinessDetails = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }
  return (
    <div className="w-full relative">
      <div className="absolute top-0 right-0 text-xl cursor-pointer" onClick={handleEdit}>
        {!isEdit ? <div className="text-lg hover:underline">Edit</div> : <IoMdCloseCircleOutline />}
      </div>
      <BusinessDetailsDescription isEdit={isEdit} />
    </div>
  )
}

export default BusinessDetails
