import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputTextEdit from "@/components/Inputs/EditProfile/InputTextEdit"
import InputTextareaEdit from "@/components/Inputs/EditProfile/InputTextareaEdit"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
// import { updatePropBusinessDetails, verifyPropId } from "@/services/Redux/reducers/propSlice"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const schema = yup
  .object({
    location: yup
      .string()
      .url("Please enter a valid URL")
      .required("Place name is required.")
      .min(3, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    address: yup
      .string()
      .required("Description is required.")
      .min(10, "Description must be at least 10 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    city: yup
      .string()
      .required("Description is required.")
      .min(5, "Description must be at least 5 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    pocContactNo: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
    pocName: yup
      .string()
      .required("Description is required.")
      .min(5, "Description must be at least 5 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    pocDesignation: yup
      .string()
      .required("Phone number is required.")
      .min(5, "Description must be at least 5 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
  })
  .required()

const BusinessDetailsDescription = ({ isEdit }: { isEdit: boolean }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const [isClient, setIsClient] = useState(false)

  const dispatch = useAppDispatch()
  const propInformation = useAppSelector(state => state.prop?.propInformations)

  useEffect(() => {
    setValue("location", propInformation?.location || "")
    setValue("address", propInformation?.address || "")
    setValue("city", propInformation?.city || "")
    setValue("pocContactNo", propInformation?.pocContactNo || "")
    setValue("pocName", propInformation?.pocName || "")
    setValue("pocDesignation", propInformation?.pocDesignation || "")
  }, [setValue, propInformation])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const onSubmitSignup = async (data: any) => {
    console.log("data", data)
    try {
      // await dispatch(
      //   updatePropBusinessDetails({
      //     id: propInformation?._id,
      //     data: {
      //       location: data.location,
      //       address: data.address,
      //       // city: data.city,
      //       pocContactNo: data.pocContactNo,
      //       pocName: data.pocName,
      //       pocDesignation: data.pocDesignation,
      //     },
      //   }),
      // )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {isClient && (
        <div className="pt-6">
          <form onSubmit={handleSubmit(onSubmitSignup)}>
            <div className="block lg:flex w-full gap-4 my-4">
              <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
                <div className="font-semibold">Location :</div>
                <div className="flex-grow opacity-70">
                  <InputTextEdit
                    name="location"
                    type="text"
                    placeholder="Add Location (link)"
                    register={register}
                    disabled={!isEdit}
                    required
                    error={errors.location?.message}
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
                <div className="font-semibold">Address :</div>
                <div className="flex-grow opacity-70">
                  <InputTextareaEdit
                    name="address"
                    type="text"
                    placeholder="Add address"
                    register={register}
                    disabled={!isEdit}
                    required
                    error={errors.address?.message}
                  />
                </div>
              </div>
            </div>
            {/* <div className="block md:flex w-full gap-4 my-4">
              <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
                <div className="font-semibold">Address :</div>
                <div className="flex-grow opacity-70">
                  <InputTextareaEdit
                    name="address"
                    type="text"
                    placeholder="Add address"
                    register={register}
                    disabled={!isEdit}
                    required
                    error={errors.address?.message}
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
                <div className="font-semibold">City :</div>
                <div className="flex-grow opacity-70">
                  <InputTextEdit
                    name="city"
                    type="text"
                    placeholder="Add city"
                    register={register}
                    disabled={!isEdit}
                    required
                    error={errors.city?.message}
                  />
                </div>
              </div>
            </div> */}
            <div className="block lg:flex w-full gap-4 my-4">
              <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
                <div className="font-semibold">POC Contact No. :</div>
                <div className="flex-grow opacity-70">
                  <InputTextEdit
                    name="pocContactNo"
                    type="text"
                    placeholder="POC Contact No."
                    register={register}
                    disabled={!isEdit}
                    required
                    error={errors.pocContactNo?.message}
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
                <div className="font-semibold">POC Name :</div>
                <div className="flex-grow opacity-70">
                  <InputTextEdit
                    name="pocName"
                    type="text"
                    placeholder="POC Name"
                    register={register}
                    disabled={!isEdit}
                    required
                    error={errors.pocName?.message}
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
                <div className="font-semibold">POC Designation :</div>
                <div className="flex-grow opacity-70">
                  <InputTextEdit
                    name="pocDesignation"
                    type="text"
                    placeholder="POC Designation"
                    register={register}
                    disabled={!isEdit}
                    required
                    error={errors.pocDesignation?.message}
                  />
                </div>
              </div>
            </div>
            {isEdit && <RegistrationButton text="Save" />}
          </form>
        </div>
      )}
    </>
  )
}

export default BusinessDetailsDescription
