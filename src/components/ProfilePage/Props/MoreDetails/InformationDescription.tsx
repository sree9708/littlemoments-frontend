import * as yup from "yup"
import InputTimeProfileProps from "@/components/Inputs/InputTimeProfileProps"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io"
import InputTextareaEdit from "@/components/Inputs/EditProfile/InputTextareaEdit"
import InputCategoryEdit from "@/components/Inputs/EditProfile/InputCategoryEdit"
import InputAgeEdit from "@/components/Inputs/EditProfile/InputAgeEdit"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import RegistrationButton from "@/components/Buttons/RegistrationButton"
import { updatePropInformationsThunk } from "@/services/Redux/reducers/propSlice"
import AddAndRemoveTooltip from "@/components/Tooltip/TooltipComponent"
import InformationValidation from "@/services/Validation/informartionValidation"

const InformationDescription = ({ isEdit }: { isEdit: boolean }) => {
  const dispatch = useAppDispatch()
  const propInformation = useAppSelector(state => state.prop?.propInformations)

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InformationValidation),
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rateCard",
  })

  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    setValue("placeDescription", propInformation?.placeDescription || "")
    if (propInformation?.rateCard) {
      reset({
        ...getValues(),
        rateCard: propInformation.rateCard,
      })
    }
  }, [setValue, propInformation, reset, getValues])

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const [timings, setTimings] = useState<any[]>([])

  const handleAddRow = () => {
    append({ title: "", price: 0 })
  }

  const handleRemoveRow = (index: number) => {
    remove(index)
  }

  const onSubmitSignup = async (data: any) => {
    console.log("asdfds", data)
    try {
      await dispatch(
        updatePropInformationsThunk({
          id: propInformation?._id,
          data: {
            rateCard: data.rateCard,
            placeDescription: data.placeDescription,
            category: data.category,
            subCategory: data.subCategory,
            age: [data.startingAge, data.endingAge],
            timings: timings,
          },
        }),
      )
    } catch (error) {
      console.log(error)
    }
  }

  const handleTimeChange = (data: any[]) => {
    setTimings(data)
  }

  return (
    <div className="pt-8">
      <AddAndRemoveTooltip />
      <form onSubmit={handleSubmit(onSubmitSignup)}>
        <div className="block md:flex w-full gap-4 my-4">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-fit border-2 border-primary p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="font-semibold">Rate Card :</div>
                {isEdit && (
                  <div className="add-tooltip cursor-pointer text-xl" onClick={handleAddRow}>
                    <IoMdAddCircleOutline />
                  </div>
                )}
              </div>
              <div className="opacity-70 mt-2 w-full">
                <div className="w-full">
                  {fields.map((field, index) => (
                    <div className="flex gap-2 my-2" key={field.id}>
                      <div className="w-full">
                        <Controller
                          render={({ field }) => (
                            <input
                              {...field}
                              className="w-full autofill:bg-yellow-200 bg-transparent rounded-lg p-2 border-2  text-lg border-primary focus:outline-none focus:ring-transparent "
                            />
                          )}
                          name={`rateCard.${index}.title`}
                          control={control}
                          disabled={!isEdit}
                          defaultValue={field.title}
                        />
                        {errors.rateCard && errors.rateCard[index]?.title && (
                          <p className="text-red-600 text-sm">{errors.rateCard[index]?.title?.message}</p>
                        )}
                      </div>
                      <div className="w-full">
                        <Controller
                          render={({ field }) => (
                            <input
                              {...field}
                              className="w-full autofill:bg-yellow-200 bg-transparent rounded-lg p-2 border-2  text-lg border-primary focus:outline-none focus:ring-transparent "
                            />
                          )}
                          name={`rateCard.${index}.price`}
                          control={control}
                          disabled={!isEdit}
                          defaultValue={field.price}
                        />
                        {errors.rateCard && errors.rateCard[index]?.price && (
                          <p className="text-red-600 text-sm">{errors.rateCard[index]?.price?.message}</p>
                        )}
                      </div>
                      {isEdit && (
                        <div
                          className="remove-tooltip flex justify-end items-center cursor-pointer"
                          onClick={() => handleRemoveRow(index)}
                        >
                          <IoMdRemoveCircleOutline />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {errors.rateCard?.root && (
                  <p className="text-red-600 text-sm">{errors.rateCard?.root?.message}</p>
                )}
              </div>
            </div>
            <div className="w-full h-full border-2 border-primary p-2 rounded-lg">
              <div className="font-semibold">Place Description :</div>
              <div className="flex-grow opacity-70">
                <InputTextareaEdit
                  name="placeDescription"
                  type="text"
                  placeholder="Place Description"
                  register={register}
                  disabled={!isEdit}
                  required
                  error={errors.placeDescription?.message}
                />
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-fit flex flex-wrap justify-center  gap-2 border-2 border-primary p-2 rounded-lg"
            onClick={handleDropdown}
          >
            <div className="font-semibold">Time </div>
            <InputTimeProfileProps onTimeChange={handleTimeChange} isEdit={isEdit} />
          </div>
        </div>
        <div className="block sm:flex w-full gap-4 my-4">
          <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
            <div className="block sm:flex w-full gap-4 ">
              <div className="w-full">
                <div className="font-semibold">Category : </div>
                <div className="border-2 border-primary p-2 rounded-lg">
                  <InputCategoryEdit
                    name="category"
                    placeholder="Category"
                    category={[]}
                    register={register}
                    setValue={setValue}
                    disabled={!isEdit}
                    required
                    error={errors.category?.message}
                    defaultValue={propInformation?.category || "littlemoments"}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="font-semibold">Sub Category : </div>
                <div className="border-2 border-primary p-2 rounded-lg">
                  <InputCategoryEdit
                    name="subCategory"
                    placeholder="Sub Category"
                    category={[]}
                    register={register}
                    setValue={setValue}
                    disabled={!isEdit}
                    required
                    error={errors.subCategory?.message}
                    defaultValue={propInformation?.subCategory || "littlemoments"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
            <div className="block sm:flex w-full gap-4 ">
              <div className="w-full">
                <div className="font-semibold">Staring Age : </div>
                <div className="border-2 border-primary p-2 rounded-lg">
                  <InputAgeEdit
                    name="startingAge"
                    placeholder="Starting Age"
                    register={register}
                    setValue={setValue}
                    disabled={!isEdit}
                    required
                    error={errors.startingAge?.message}
                    defaultValue={propInformation?.age?.[0] || 1}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="font-semibold">Ending Age : </div>
                <div className="border-2 border-primary p-2 rounded-lg">
                  <InputAgeEdit
                    name="endingAge"
                    placeholder="Ending Age"
                    register={register}
                    setValue={setValue}
                    disabled={!isEdit}
                    required
                    error={errors.endingAge?.message}
                    defaultValue={propInformation?.age?.[1] || 100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isEdit && <RegistrationButton text="Save" />}
      </form>
    </div>
  )
}

export default InformationDescription
