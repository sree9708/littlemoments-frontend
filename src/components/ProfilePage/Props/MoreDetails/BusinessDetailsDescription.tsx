import InputFileEdit from "@/components/Inputs/EditProfile/InputFileEdit"
import InputTextEdit from "@/components/Inputs/EditProfile/InputTextEdit"
import InputTextareaEdit from "@/components/Inputs/EditProfile/InputTextareaEdit"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const schema = yup
  .object({
    location: yup
      .string()
      .required("Place name is required.")
      .min(3, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    address: yup
      .string()
      .required("Description is required.")
      .min(10, "Description must be at least 10 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    gstin: yup
      .mixed()
      .test("fileSize", "File size is too large", value => {
        return true // For simplicity, always return true for now
      })
      .test("fileType", "Invalid file type", value => {
        return true // For simplicity, always return true for now
      })
      .nullable()
      .required("GSTIN file is required."),
    pan: yup
      .mixed()
      .test("fileSize", "File size is too large", value => {
        return true // For simplicity, always return true for now
      })
      .test("fileType", "Invalid file type", value => {
        // Validate file type if needed
        // Example: return value && ['image/jpeg', 'image/png'].includes(value[0].type);
        return true // For simplicity, always return true for now
      })
      .nullable()
      .required("Pan Card file is required."),
    pocPhoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
    pocName: yup
      .string()
      .required("Description is required.")
      .min(10, "Description must be at least 10 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    pocDesignation: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
  })
  .required()

const BusinessDetailsDescription = ({ isEdit }: { isEdit: boolean }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const [gstinFilename, setGstinFilename] = useState("gstincard.pdf")
  const [panFilename, setPanFilename] = useState("pancard.pdf")

  useEffect(() => {
    setValue("location", "https://www.google.com/maps")
    setValue("address", "Madhapur, Hyderabad")
    setValue("gstin", "abc.pdf")
    setValue("pocPhoneNumber", "+91 9562886328")
    setValue("pocName", "little moments")
    setValue("pocDesignation", "Developer")
  }, [setValue])

  return (
    <div className="pt-6">
      <div className="block sm:flex w-full gap-4 my-4">
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
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
          <div className="font-semibold">Address :</div>
          <div className="flex-grow opacity-70">
            <InputTextareaEdit
              name="address"
              type="text"
              placeholder="Add Location (link)"
              register={register}
              disabled={!isEdit}
              required
              error={errors.address?.message}
            />
          </div>
        </div>
      </div>
      <div className="block sm:flex w-full gap-4 my-4">
        <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
          <div className="font-semibold">GSTIN :</div>
          <div className="flex-grow opacity-70">
            <InputFileEdit
              name="gstin"
              label="GSTIN"
              type="file"
              register={register}
              required
              error={errors.gstin?.message}
              disabled={!isEdit}
              filename={gstinFilename} // pass the filename as a prop
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.files)
                if (e.target.files?.length) {
                  setGstinFilename(e.target.files[0].name)
                }
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
          <div className="font-semibold">PAN :</div>
          <div className="flex-grow opacity-70">
            <InputFileEdit
              name="pan"
              label="PAN"
              type="file"
              register={register}
              required
              error={errors.pan?.message}
              disabled={!isEdit}
              filename={panFilename} // pass the filename as a prop
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.files)
                if (e.target.files?.length) {
                  setPanFilename(e.target.files[0].name)
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="block sm:flex w-full gap-4 my-4">
        <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
          <div className="font-semibold">POC Contact No. :</div>
          <div className="flex-grow opacity-70">
            <InputTextEdit
              name="pocPhoneNumber"
              type="text"
              placeholder="POC Contact No."
              register={register}
              disabled={!isEdit}
              required
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
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessDetailsDescription
