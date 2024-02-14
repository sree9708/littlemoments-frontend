"use client"

import { Controller, useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import RegistrationButton from "../../Buttons/RegistrationButton"
import { useContext, useEffect, useLayoutEffect, useState } from "react"
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
import InformationValidation from "@/services/Validation/AddPlace/informartionValidation"
import { getCategoriesThunk } from "@/services/Redux/reducers/categorySlice"
import { errorMessage } from "@/hooks/useNotifications"

const InformationForm = () => {
  const dispatch = useAppDispatch()
  const propDetailsForm = useAppSelector(state => state.prop?.propDetailsForm)

  const {
    register,
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InformationValidation),
    defaultValues: {
      rateCard: propDetailsForm?.rateCard,
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rateCard",
  })

  const { push } = useRouter()
  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  const [timings, setTimings] = useState<any[]>([])

  useLayoutEffect(() => {
    setIsTracker(3)
  },[setIsTracker])

  useEffect(() => {
    ;(async () => {
      try{
        await dispatch(getCategoriesThunk())
      }catch (error: any){
        errorMessage(error.message) 
      }
    })()
  }, [])

  const categories = useAppSelector(state => state.category.categories)
  const [displayCategory, setDisplayCategory] = useState<any[]>([])
  const [displaySubCategory, setDisplaySubCategory] = useState<any[]>([])
  const superCategory = watch("superCategory")
  const category = watch("category")

  useEffect(() => {
    setValue("superCategory", propDetailsForm?.superCategory || "")
    setValue("category", "")
  }, [superCategory, setValue])

  useEffect(() => {
    if (superCategory) {
      const selectedCategory = categories.find((category: any) => category.id === superCategory)?.categories
      setDisplayCategory(selectedCategory)
      if (category) {
        const selectedSubCategory = selectedCategory?.find(
          (subCategory: any) => subCategory.id === category,
        )?.subCategories
        setDisplaySubCategory(selectedSubCategory)
      }
    }
  }, [superCategory, category, categories])

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
      console.log( error.message)
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
    <form className="py-4" onSubmit={handleSubmit(onSubmitSignup)}>
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
                  defaultValue={propDetailsForm?.rateCard?.[index]?.title ?? field.title}
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
                  defaultValue={propDetailsForm?.rateCard?.[index]?.price ?? field.price}
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
          {errors.rateCard && <p className="text-red-600 text-sm">{errors.rateCard?.message}</p>}
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
        name="superCategory"
        fieldName="superCategory"
        watch={watch}
        setValue={setValue}
        categories={categories || []}
        placeholder="Super Category"
        register={register}
        required
        error={errors.category?.message}
        defaultValue={propDetailsForm?.superCategory}
      />
      {displayCategory?.length > 0 && (
        <InputCategory
          name="category"
          fieldName="categoryName"
          watch={watch}
          setValue={setValue}
          categories={displayCategory || []}
          placeholder="Category"
          register={register}
          required
          error={errors.category?.message}
          defaultValue={propDetailsForm?.category}
        />
      )}
      {displaySubCategory?.length > 0 && (
        <InputCategory
          name="subCategory"
          fieldName="subCategoryName"
          watch={watch}
          setValue={setValue}
          categories={displaySubCategory || []}
          placeholder="Sub Category"
          register={register}
          required
          error={errors.subCategory?.message}
          defaultValue={propDetailsForm?.subCategory}
        />
      )}
      <div className="flex gap-4">
        <InputAge
          name="startingAge"
          watch={watch}
          setValue={setValue}
          placeholder="Starting Age"
          register={register}
          required
          defaultValue={propDetailsForm?.age?.[0] || 0}
          error={errors.startingAge?.message}
        />
        <InputAge
          name="endingAge"
          watch={watch}
          setValue={setValue}
          placeholder="Ending Age"
          register={register}
          required
          defaultValue={propDetailsForm?.age?.[1] || 100}
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
