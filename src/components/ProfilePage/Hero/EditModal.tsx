"use client"

import RegistrationButton from "@/components/Buttons/RegistrationButton"
import Image from "next/image"
import * as yup from "yup"
import React, { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { IoMdCloseCircleOutline } from "react-icons/io"
import Modal from "react-modal"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import InputText from "@/components/Inputs/InputText"
import Link from "next/link"

const schema = yup
  .object({
    username: yup
      .string()
      .required("Username is required.")
      .min(3, "Username must be at least 3 characters.")
      .max(20, "Username must not exceed 20 characters."),
    city: yup
      .string()
      .required("City is required.")
      .min(2, "City must be at least 2 characters.")
      .max(50, "City must not exceed 50 characters."),
  })
  .required()

const EditModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const [editModal, setEditModal] = useState<boolean>(false)

  const handleEdit = () => {
    setEditModal(!editModal)
  }

  return (
    <>
      <div className="absolute top-5 right-5 text-xl cursor-pointer" onClick={handleEdit}>
        <FiEdit />
      </div>
      <Modal
        isOpen={editModal}
        // onRequestClose={handleModal}
        contentLabel="Review Modal"
        className={`z-50 w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 bg-secondary border-2 border-primary focus:outline-none focus:ring-transparent rounded-lg p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]`}
        style={{
          overlay: {
            backgroundColor: "#00000080",
            zIndex: 55,
          },
        }}
      >
        <div className="relative z-50">
          <div className="font-title text-title-sm">Edit </div>
          <button onClick={handleEdit} className="absolute text-xl top-0 right-0">
            <IoMdCloseCircleOutline />
          </button>
          <form>
            <InputText
              name="username"
              type="text"
              placeholder="Username"
              register={register}
              required
              error={errors.username?.message}
            />
            <InputText
              name="city"
              type="text"
              placeholder="City"
              register={register}
              required
              error={errors.city?.message}
            />
            <RegistrationButton text="Submit" />
          </form>
          <div className="flex  my-3 flex-wrap justify-center gap-2">
            <Link href="/change" className="text-theme-3">
              Change Phone Number
            </Link>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default EditModal
