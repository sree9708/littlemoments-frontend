"use client"

import { Controller, useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import RegistrationButton from "../../Buttons/RegistrationButton"
import { useContext, useEffect, useState } from "react"
import { TrackerContext, TrackerContextProps } from "@/services/Context/TrackerContext"
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6"
import InputTextarea from "@/components/Inputs/InputTextarea"
import InputTime from "@/components/Inputs/InputTime"
import InputCategory from "@/components/Inputs/InputCategory"
import InputAge from "@/components/Inputs/InputAge"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addInformations } from "@/services/Redux/reducers/propSlice"
import AddAndRemoveTooltip from "@/components/Tooltip/TooltipComponent"
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io"
import InformationValidation from "@/services/Validation/informartionValidation"

const InformationForm = () => {
  const dispatch = useAppDispatch()
  const propDetailsForm = useAppSelector(state => state.prop?.propDetailsForm)

  const {
    register,
    control,
    watch,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(InformationValidation) })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rateCard",
  })

  const { push } = useRouter()

  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  const [timings, setTimings] = useState<any[]>([])

  useEffect(() => {
    setIsTracker(3)
  }, [setIsTracker])

  useEffect(() => {
    if (propDetailsForm?.rateCard) {
      reset({
        ...getValues(),
        rateCard: propDetailsForm.rateCard,
      })
    }
  }, [propDetailsForm, reset, getValues])

  const handleAddRow = () => {
    append({ title: "", price: 0 })
  }

  const handleRemoveRow = (index: number) => {
    remove(index)
  }

  const onSubmitSignup = async (data: any) => {
    console.log("data : ", data)
    try {
      const newData = {
        ...data,
        age: [data.startingAge, data.endingAge],
        timings: timings,
      }
      dispatch(addInformations(newData))
    } catch (error: any) {
      console.log("Form : ", error.message)
    }
    push("/add-place/upload-images")
  }

  const handleBack = () => {
    push("/add-place/business-details")
  }

  const handleTimeChange = (data: any[]) => {
    setTimings(data)
  }

  return (
    <form className="py-8" onSubmit={handleSubmit(onSubmitSignup)}>
      <div className="w-full my-3">
        <AddAndRemoveTooltip />
        <div
          onClick={handleAddRow}
          className="flex justify-between relative w-full bg-transparent rounded-lg p-3 border-2  text-xl border-primary focus:outline-none focus:ring-transparent"
        >
          <div>Rate card</div>
          <div className="add-tooltip cursor-pointer">
            <IoMdAddCircleOutline />
          </div>
        </div>
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
                  defaultValue={field.title}
                />
                {errors.rateCard && errors.rateCard[index]?.title && (
                  <p className="text-red-600 my-2 text-sm">{errors.rateCard[index]?.title?.message}</p>
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
                  defaultValue={field.price}
                />
                {errors.rateCard && errors.rateCard[index]?.price && (
                  <p className="text-red-600 my-2 text-sm">{errors.rateCard[index]?.price?.message}</p>
                )}
              </div>
              <div
                className="remove-tooltip flex justify-end items-center cursor-pointer"
                onClick={() => handleRemoveRow(index)}
              >
                <IoMdRemoveCircleOutline />
              </div>
            </div>
          ))}
          {errors.rateCard?.root && <p className="text-red-600 text-sm">{errors.rateCard?.root?.message}</p>}
        </div>
      </div>
      <InputTime onTimeChange={handleTimeChange} />
      <InputTextarea
        name="placeDescription"
        type="text"
        placeholder="Place Description"
        register={register}
        required
        error={errors.placeDescription?.message}
        defaultValue={propDetailsForm?.placeDescription}
      />
      <InputCategory
        name="category"
        watch={watch}
        setValue={setValue}
        category={["a", "b", "c", "d"]}
        placeholder="Category"
        register={register}
        required
        error={errors.category?.message}
        defaultValue={propDetailsForm?.category}
      />
      <InputCategory
        name="subCategory"
        watch={watch}
        setValue={setValue}
        category={["a", "b", "c", "d"]}
        placeholder="Sub Category"
        register={register}
        required
        error={errors.subCategory?.message}
        defaultValue={propDetailsForm?.subCategory}
      />
      <div className="flex gap-4">
        <InputAge
          name="startingAge"
          watch={watch}
          placeholder="Starting Age"
          register={register}
          required
          error={errors.startingAge?.message}
        />
        <InputAge
          name="endingAge"
          watch={watch}
          placeholder="Ending Age"
          register={register}
          required
          error={errors.endingAge?.message}
        />
      </div>
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
  )
}

export default InformationForm
