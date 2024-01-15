import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputFileEdit from "@/components/Inputs/EditProfile/InputFileEdit"
import InputTextEdit from "@/components/Inputs/EditProfile/InputTextEdit"
import InputTextareaEdit from "@/components/Inputs/EditProfile/InputTextareaEdit"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { updatePropBusinessDetails } from "@/services/Redux/reducers/propSlice"
import { base64ToFile, filetoBase64 } from "@/services/Utilities/base64/base64.services"
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
    city: yup
      .string()
      .required("Description is required.")
      .min(5, "Description must be at least 5 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    gstin: yup
      .mixed()
      .test("fileSize", "File size is too large", value => {
        return true // For simplicity, always return true for now
      })
      .test("fileType", "Invalid file type", value => {
        return true // For simplicity, always return true for now
      })
      .nullable(),
    // .required("GSTIN file is required."),
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
      .nullable(),
    // .required("Pan Card file is required."),
    pocPhoneNumber: yup
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

  useEffect(() => {
    setIsClient(true)
  }, [])

  const dispatch = useAppDispatch()

  const propDetails = useAppSelector(state => state.prop.propDetails)

  const gstin = propDetails ? base64ToFile(propDetails?.gstin as string, `gstin`) : undefined
  const pan = propDetails ? base64ToFile(propDetails?.pan as string, `pan`) : undefined

  const [gstinFile, setGstinFile] = useState<File | null>(gstin ? gstin : null)
  const [panFile, setPanFile] = useState<File | null>(pan ? pan : null)

  const handleGstinFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    console.log("GSTIN File Selected:", file)
    setGstinFile(file)
  }

  const handlePanFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    console.log("PAN File Selected:", file)
    setPanFile(file)
  }

  const onSubmitSignup = async (data: any) => {
    console.log("data", data)

    // const filePromises = [
    //   gstinFile ? filetoBase64(gstinFile) : Promise.resolve(null),
    //   panFile ? filetoBase64(panFile) : Promise.resolve(null),
    // ]

    // const [gstinFileBase64, panFileBase64] = await Promise.all(filePromises)
    await dispatch(
      updatePropBusinessDetails({
        location: data.location,
        address: data.address,
        city: data.city,
        pocPhoneNumber: data.pocPhoneNumber,
        pocName: data.pocName,
        pocDesignation: data.pocDesignation,
      }),
    )
  }
  useEffect(() => {
    setValue("location", "https://www.google.com/maps")
    setValue("address", "Madhapur, Hyderabad")
    setValue("city", "hyderabad")
    setValue("gstin", "abc.pdf")
    setValue("pan", "abc.pdf")
    setValue("pocPhoneNumber", "9562886328")
    setValue("pocName", "little moments")
    setValue("pocDesignation", "Developer")
  }, [setValue])

  return (
    <>
      {isClient && (
        <div className="pt-6">
          <form onSubmit={handleSubmit(onSubmitSignup)}>
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
                    error={errors.location?.message}
                  />
                </div>
              </div>
            </div>
            <div className="block md:flex w-full gap-4 my-4">
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
            </div>
            <div className="block md:flex w-full gap-4 my-4">
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
                    filename={gstinFile ? gstinFile.name : "add file"} // pass the filename as a prop
                    onChange={handleGstinFileChange}
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
                    filename={panFile ? panFile.name : "add pan card"} // pass the filename as a prop
                    onChange={handlePanFileChange}
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
                    error={errors.pocPhoneNumber?.message}
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
