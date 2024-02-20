"use client"

import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputText from "@/components/Inputs/InputText"
import ModalComponent from "@/components/Modal/ModalComponent"
import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch } from "@/hooks/useStore"
import { addSuperCategoryThunk } from "@/services/Redux/reducers/categorySlice"
import superCategoryValidation from "@/services/Validation/Category/superCategoryValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { IoMdAdd } from "react-icons/io"

const CategoryHeading = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(superCategoryValidation) })

  const dispatch = useAppDispatch()

  const [addSuperCategoryModal, setAddSuperCategoryModal] = useState(false)

  const handleModal = (isOpen: boolean) => {
    setAddSuperCategoryModal(isOpen)
  }

  const onSubmit = async (data: any) => {
    try {
      await dispatch(addSuperCategoryThunk(data.superCategory))
      setAddSuperCategoryModal(false)
    } catch (error: any) {
      errorMessage(error.message)
    }
  }
  return (
    <div className="admin_heading p-3 rounded-md drop-shadow-lg">
      <div className="relative w-full h-full border border-secondary rounded-md p-3">
        <div
          className="w-full flex justify-end cursor-pointer"
          onClick={() => setAddSuperCategoryModal(true)}
        >
          <div className="absolute flex items-center gap-1 text-xs w-fit p-2 border border-primary bg-secondary rounded-md font-semibold text-theme-1">
            <div>
              <IoMdAdd size={16} />
            </div>
            Add Super Category
          </div>
        </div>
        <div className="w-full flex justify-center my-12 font-title text-secondary text-title-sm">
          Category
        </div>
      </div>
      <ModalComponent
        isModalCloseAndOpen={addSuperCategoryModal}
        handleModal={handleModal}
        title="Add Super Category"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8">
            <InputText
              name="superCategory"
              type="text"
              placeholder="Super Category"
              register={register}
              required
              error={errors.superCategory?.message}
            />
          </div>
          <RegistrationButton text="Submit" />
        </form>
      </ModalComponent>
    </div>
  )
}

export default CategoryHeading
