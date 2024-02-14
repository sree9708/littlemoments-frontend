"use client"

import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputText from "@/components/Inputs/InputText"
import ModalComponent from "@/components/Modal/ModalComponent"
import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch } from "@/hooks/useStore"
import { addCountryThunk } from "@/services/Redux/reducers/citySlice"
import countryValidation from "@/services/Validation/City/countryValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { IoMdAdd } from "react-icons/io"

const CityHeading = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(countryValidation) })

  const dispatch = useAppDispatch()

  const [addCountryModal, setAddCountryModal] = useState(false)

  const handleModal = (isOpen: boolean) => {
    setAddCountryModal(isOpen)
  }

  const onSubmit = async (data: any) => {
    console.log(data)
    try {
      await dispatch(addCountryThunk(data.country))
      setAddCountryModal(false)
    } catch (error: any) {
      errorMessage(error.message) 
      console.log(error.message)
    }
  }
  return (
    <div className="admin_heading p-3 rounded-md drop-shadow-lg">
      <div className="relative w-full h-full border border-secondary rounded-md p-3">
        <div className="w-full flex justify-end cursor-pointer" onClick={() => setAddCountryModal(true)}>
          <div className="absolute flex items-center gap-1 text-xs w-fit p-2 border border-primary bg-secondary rounded-md font-semibold text-theme-1">
            <div>
              <IoMdAdd size={16} />
            </div>
            Add Country
          </div>
        </div>
        <div className="w-full flex justify-center my-12 font-title text-secondary text-title-sm">Cities</div>
      </div>
      <ModalComponent isModalCloseAndOpen={addCountryModal} handleModal={handleModal} title="Add Country">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8">
            <InputText
              name="country"
              type="text"
              placeholder="Country"
              register={register}
              required
              error={errors.country?.message}
            />
          </div>
          <RegistrationButton text="Submit" />
        </form>
      </ModalComponent>
    </div>
  )
}

export default CityHeading
