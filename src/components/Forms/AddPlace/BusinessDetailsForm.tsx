"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import { useContext, useEffect, useState } from "react"
import { TrackerContext, TrackerContextProps } from "@/services/Context/TrackerContext"
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6"
import InputTextarea from "@/components/Inputs/InputTextarea"
import InputFile from "@/components/Inputs/InputFile"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addBusinessDetails } from "@/services/Redux/reducers/propSlice"
import { base64ToFile, filetoBase64 } from "@/services/Utilities/base64/base64.services"
import { IoCloseSharp } from "react-icons/io5"

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
    // gstin: yup
    //   .mixed<FileList>()
    //   .test("fileRequired", "GSTIN file is required", value => value && value.length > 0)
    //   .nullable(),
    // gstin: yup.string().when('gstinFile', {
    //   is: (gstinFile: any) => !gstinFile,
    //   then: (schema) => schema.required("GSTIN is required when GSTIN file is not present."),
    // }),
    // gstinFile: yup.mixed().when('gstin', {
    //   is: (gstin: any) => !gstin,
    //   then: (schema) => schema.required("GSTIN file is required when GSTIN is not present."),
    // }),
    // pan: yup
    //   .mixed<FileList>()
    //   .test("fileRequired", "Pan Card file is required", value => value && value.length > 0)
    //   .nullable(),
    pocContactNo: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
    pocName: yup
      .string()
      .required("POC Name is required.")
      .max(1000, "POC name can be maximum 250 characters long."),
    pocDesignation: yup
      .string()
      .required("Phone number is required.")
      .required("POC designation is required.")
      .max(1000, "POC designation can be maximum 250 characters long."),
  })
  .required()

const BusinessDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const propDetailsForm = useAppSelector(state => state.prop?.propDetailsForm)

  const gstin =
    propDetailsForm && propDetailsForm?.gstin ? base64ToFile(propDetailsForm?.gstin as string, `gstin`) : null
  const pan =
    propDetailsForm && propDetailsForm?.pan ? base64ToFile(propDetailsForm?.pan as string, `pan`) : null
  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  const [gstinFile, setGstinFile] = useState<File | null>(gstin ? gstin : null)
  const [panFile, setPanFile] = useState<File | null>(pan ? pan : null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    setIsTracker(2)
  }, [setIsTracker])

  // const handleGstinFileChange = (file: File | null) => {
  const handleGstinFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    console.log("GSTIN File Selected:", file?.size)
    setGstinFile(file)
  }

  const handlePanFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    console.log("PAN File Selected:", file)
    setPanFile(file)
  }

  const onSubmitSignup = async (data: any) => {
    console.log("data", data)

    const filePromises = [
      gstinFile ? filetoBase64(gstinFile) : Promise.resolve(null),
      panFile ? filetoBase64(panFile) : Promise.resolve(null),
    ]

    const [gstinFileBase64, panFileBase64] = await Promise.all(filePromises)

    dispatch(
      addBusinessDetails({
        ...data,
        gstin: gstinFileBase64,
        pan: panFileBase64,
      }),
    )
    console.log("gstinFileBase64", gstinFileBase64)
    push("/add-place/information")
  }

  const handleBack = () => {
    push("/add-place")
  }

  return (
    <div>
      {isClient && (
        <form className="py-8" onSubmit={handleSubmit(onSubmitSignup)}>
          <InputText
            name="location"
            type="text"
            placeholder="Add Location (link)"
            register={register}
            required
            error={errors.location?.message}
            defaultValue={propDetailsForm?.location}
          />
          <InputTextarea
            name="address"
            type="text"
            placeholder="Address"
            register={register}
            required
            error={errors.address?.message}
            defaultValue={propDetailsForm?.address}
          />
          {gstinFile ? (
            <div className="w-full my-3">
              <label className="font-semibold text-gray-600">GSTIN</label>
              <div className="w-full justify-between flex items-center gap-2 border-2 rounded-lg p-3 text-lg border-primary">
                <p>{gstinFile?.name}</p>
                <button
                  type="button"
                  className="w-fit flex items-center gap-2 bg-background p-1 text-primary rounded-md border-2 border-primary cursor-pointer"
                  onClick={() => setGstinFile(null)}
                >
                  <IoCloseSharp />
                </button>
              </div>
            </div>
          ) : (
            <InputFile
              name="gstin"
              label="GSTIN"
              type="file"
              register={register}
              error={errors.gstin?.message}
              // onFileChange={handleGstinFileChange}
              onChange={handleGstinFileChange}
              required
            />
          )}
          {panFile ? (
            <div className="w-full my-3">
              <label className="font-semibold text-gray-600">PAN Card</label>
              <div className="w-full justify-between flex items-center gap-2 border-2 rounded-lg p-3 border-primary">
                <p className=" text-lg">{panFile?.name}</p>
                <button
                  type="button"
                  className="w-fit flex items-center gap-2 bg-background p-1 text-primary rounded-md border-2 border-primary cursor-pointer"
                  onClick={() => setPanFile(null)}
                >
                  <IoCloseSharp />
                </button>
              </div>
            </div>
          ) : (
            <InputFile
              name="pan"
              label="PAN Card"
              type="file"
              register={register}
              error={errors.pan?.message}
              // onFileChange={handlePanFileChange}
              onChange={handlePanFileChange}
              required
            />
          )}
          <InputText
            name="pocContactNo"
            type="text"
            placeholder="POC Contact No."
            register={register}
            required
            error={errors.pocContactNo?.message}
            defaultValue={propDetailsForm?.pocContactNo}
          />
          <InputText
            name="pocName"
            type="text"
            placeholder="POC Name"
            register={register}
            required
            error={errors.pocName?.message}
            defaultValue={propDetailsForm?.pocName}
          />
          <InputText
            name="pocDesignation"
            type="text"
            placeholder="POC Designation"
            register={register}
            required
            error={errors.pocDesignation?.message}
            defaultValue={propDetailsForm?.pocDesignation}
          />
          <div className="flex gap-4">
            <button
              type="button"
              className="w-fit flex items-center gap-2 bg-background text-primary mt-8 p-4 rounded-md border-2 border-primary text-2xl font-bold"
              onClick={handleBack}
            >
              <FaArrowLeftLong />
              Back
            </button>
            <RegistrationButton text="Continue" />
          </div>
        </form>
      )}
    </div>
  )
}

export default BusinessDetailsForm
