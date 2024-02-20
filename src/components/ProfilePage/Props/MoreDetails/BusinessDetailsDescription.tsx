import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputTextEdit from "@/components/Inputs/EditProfile/InputTextEdit"
import InputTextareaEdit from "@/components/Inputs/EditProfile/InputTextareaEdit"
import useMounted from "@/hooks/useMounted"
import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { updatePropBusinessDetailsThunk } from "@/services/Redux/reducers/propSlice"
import BusinessDetailsValidation from "@/services/Validation/AddPlace/businessDetailsValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"

interface BusinessDetailsDescriptionProps {
  isEdit: boolean
  setIsEdit: (isEdit: boolean) => void
}

const BusinessDetailsDescription: React.FC<BusinessDetailsDescriptionProps> = ({ isEdit, setIsEdit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(BusinessDetailsValidation) })
  const hasMounted = useMounted()

  const dispatch = useAppDispatch()
  const propInformation = useAppSelector(state => state.prop?.propInformations)

  useEffect(() => {
    // setValue("location", propInformation?.location || "")
    setValue("address", propInformation?.address || "")
    setValue("city", propInformation?.city || "")
    setValue("pocContactNo", propInformation?.pocContactNo || "")
    setValue("pocName", propInformation?.pocName || "")
    setValue("pocDesignation", propInformation?.pocDesignation || "")
  }, [setValue, propInformation])

  const onSubmitSignup = async (data: any) => {
    try {
      await dispatch(
        updatePropBusinessDetailsThunk({
          id: propInformation?.id,
          data: {
            location: data.location,
            address: data.address,
            // city: data.city,
            pocContactNo: data.pocContactNo,
            pocName: data.pocName,
            pocDesignation: data.pocDesignation,
          },
        }),
      )
      setIsEdit(false)
    } catch (error: any) {
      errorMessage(error.message)
    }
  }

  return (
    <>
      {hasMounted && (
        <div className="pt-6">
          <form onSubmit={handleSubmit(onSubmitSignup)}>
            <div className="block lg:flex w-full gap-4 my-4">
              {/* <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
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
              </div> */}
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
