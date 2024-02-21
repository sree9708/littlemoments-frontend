"use client"

import { set, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import { useContext, useEffect, useLayoutEffect, useState } from "react"
import { TrackerContext, TrackerContextProps } from "@/services/Context/TrackerContext"
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6"
import InputTextarea from "@/components/Inputs/InputTextarea"
import InputFile from "@/components/Inputs/InputFile"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addBusinessDetails } from "@/services/Redux/reducers/propSlice"
import { base64ToFile, filetoBase64 } from "@/services/Utilities/base64/base64.services"
import { IoCloseSharp } from "react-icons/io5"
import BusinessDetailsValidation from "@/services/Validation/AddPlace/businessDetailsValidation"
import useMounted from "@/hooks/useMounted"

const BusinessDetailsForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(BusinessDetailsValidation) })

  const hasMounted = useMounted()
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

  useLayoutEffect(() => {
    setIsTracker(2)
  }, [setIsTracker])

  useEffect(() => {
    setValue("address", propDetailsForm?.address || "")
    setValue("pocContactNo", propDetailsForm?.pocContactNo || "")
    setValue("pocName", propDetailsForm?.pocName || "")
    setValue("pocDesignation", propDetailsForm?.pocDesignation || "")
    let dt1 = new DataTransfer()
    if (propDetailsForm?.gstin) {
      let file = base64ToFile(propDetailsForm.gstin as string, "gstin")
      dt1.items.add(file)
    }
    setValue("gstin", dt1.files.length ? dt1.files : undefined)
    let dt2 = new DataTransfer()
    if (propDetailsForm?.pan) {
      let file = base64ToFile(propDetailsForm.pan as string, "pan")
      dt2.items.add(file)
    }
    setValue("pan", dt2.files.length ? dt2.files : undefined)
    setGstinFile(dt2.files.length ? dt2.files[0] : null)
    setPanFile(dt2.files.length ? dt2.files[0] : null)
  }, [setValue, propDetailsForm])

  const handleGstinFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    setGstinFile(file)
  }

  const handlePanFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    setPanFile(file)
  }

  const onSubmitSignup = async (data: any) => {
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
    push("/add-place/information")
  }

  const handleBack = () => {
    push("/add-place")
  }

  return (
    <div>
      {hasMounted && (
        <form className="py-8" onSubmit={handleSubmit(onSubmitSignup)}>
          <InputTextarea
            name="address"
            type="text"
            placeholder="Address"
            register={register}
            required
            error={errors.address?.message}
          />
          {gstinFile && (
            <div className="w-full my-3">
              <label className="font-semibold text-gray-600">GSTIN</label>
              <div className="w-full justify-between flex items-center gap-2 border-2 rounded-lg p-2 text-md border-primary">
                <p>{gstinFile?.name}</p>
                <button
                  type="button"
                  className="w-fit flex items-center gap-2 bg-background p-1 text-primary rounded-md border-2 border-primary cursor-pointer"
                  onClick={() => setGstinFile(null)}
                >
                  <IoCloseSharp />
                </button>
              </div>
              {errors.gstin?.message && <p className="text-red-600 text-sm">{errors.gstin?.message}</p>}
            </div>
          )}
          <div className={`${gstinFile ? "hidden" : "flex"}`}>
            <InputFile
              name="gstin"
              label="GSTIN"
              type="file"
              register={register}
              error={errors.gstin?.message}
              onChange={handleGstinFileChange}
              required
            />
          </div>
          {panFile && (
            <div className="w-full my-3">
              <label className="font-semibold text-gray-600">PAN Card</label>
              <div className="w-full justify-between flex items-center gap-2 border-2 rounded-lg p-2 border-primary">
                <p>{panFile?.name}</p>
                <button
                  type="button"
                  className="w-fit flex items-center gap-2 bg-background p-1 text-primary rounded-md border-2 border-primary cursor-pointer"
                  onClick={() => setPanFile(null)}
                >
                  <IoCloseSharp />
                </button>
              </div>
              {errors.pan?.message && <p className="text-red-600 text-sm">{errors.pan?.message}</p>}
            </div>
          )}
          <div className={`${panFile ? "hidden" : "flex"}`}>
            <InputFile
              name="pan"
              label="PAN Card"
              type="file"
              register={register}
              error={errors.pan?.message}
              onChange={handlePanFileChange}
              required
            />
          </div>
          <InputText
            name="pocContactNo"
            type="text"
            placeholder="POC Contact No."
            register={register}
            required
            error={errors.pocContactNo?.message}
          />
          <InputText
            name="pocName"
            type="text"
            placeholder="POC Name"
            register={register}
            required
            error={errors.pocName?.message}
          />
          <InputText
            name="pocDesignation"
            type="text"
            placeholder="POC Designation"
            register={register}
            required
            error={errors.pocDesignation?.message}
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
