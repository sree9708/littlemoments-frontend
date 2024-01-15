import InputTextEdit from "@/components/Inputs/EditProfile/InputTextEdit"
import * as yup from "yup"
import InputTimeProfileProps from "@/components/Inputs/InputTimeProfileProps"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { IoMdAddCircleOutline, IoMdArrowDropdownCircle, IoMdRemoveCircleOutline } from "react-icons/io"
import { Tooltip } from "react-tooltip"
import InputTextareaEdit from "@/components/Inputs/EditProfile/InputTextareaEdit"
import InputCategoryEdit from "@/components/Inputs/EditProfile/InputCategoryEdit"
import InputAgeEdit from "@/components/Inputs/EditProfile/InputAgeEdit"
import { useAppDispatch } from "@/hooks/useStore"
import RegistrationButton from "@/components/Buttons/RegistrationButton"
import { updatePropInformations } from "@/services/Redux/reducers/propSlice"

const tableContent = [
  { title: "Park", price: "2000" },
  { title: "Park", price: "300" },
]

const schema = yup
  .object({
    rateCard: yup.array().of(
      yup.object().shape({
        title: yup.string().required("Title is required."),
        price: yup.string().required("Price is required."),
      }),
    ),
    placeDescription: yup
      .string()
      .required("Description is required.")
      .min(10, "Description must be at least 10 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    category: yup
      .string()
      .required("Place name is required.")
      .min(1, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    subCategory: yup
      .string()
      .required("Place name is required.")
      .min(1, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    startingAge: yup
      .number()
      .required("Starting Age is required.")
      .positive("Starting Age must be a positive number.")
      .integer("Starting Age must be an integer.")
      .test("is-less-than-ending-age", "Starting Age must be less than Ending Age", function (value) {
        const endingAge = this.parent.endingAge
        return value < endingAge
      }),
    endingAge: yup
      .number()
      .required("Ending Age is required.")
      .positive("Ending Age must be a positive number.")
      .integer("Ending Age must be an integer.")
      .test("is-greater-than-starting-age", "Ending Age must be greater than Starting Age", function (value) {
        const startingAge = this.parent.startingAge
        return value > startingAge
      }),
  })
  .required()

const InformationDescription = ({ isEdit }: { isEdit: boolean }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const dispatch = useAppDispatch()
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    setValue(
      "placeDescription",
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    )
  }, [setValue])

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const [tableData, setTableData] = useState(tableContent)
  const [timings, setTimings] = useState<any[]>([])

  const handleInputChange = (index: number, key: string, value: string) => {
    setTableData(prevData => {
      const newData: any = [...prevData]
      newData[index][key] = value
      return newData
    })
  }

  const handleAddRow = () => {
    setTableData(prevData => [...prevData, { title: "", price: "" }])
  }

  const handleRemoveRow = (index: number) => {
    setTableData(prevData => {
      const newData = [...prevData]
      newData.splice(index, 1)
      return newData
    })
  }

  const onSubmitSignup = async (data: any) => {
    console.log("data", data)
    try {
      await dispatch(
        updatePropInformations({
          rateCard: tableData,
          placeDescription: data.placeDescription,
          category: data.category,
          subCategory: data.subCategory,
          age: [data.startingAge, data.endingAge],
          timings: timings,
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
      <Tooltip className="z-10" anchorSelect=".add-tooltip" place="bottom">
        Add
      </Tooltip>
      <Tooltip className="z-10" anchorSelect=".remove-tooltip" place="bottom">
        Remove
      </Tooltip>
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
                <table className="w-full">
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            className={`w-full autofill:bg-yellow-200 bg-transparent rounded-lg p-2 border-2  text-lg border-primary focus:outline-none focus:ring-transparent `}
                            placeholder="Item"
                            type="text"
                            value={row.title}
                            disabled={!isEdit}
                            onChange={e => handleInputChange(index, "title", e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            className={`w-full autofill:bg-yellow-200 bg-transparent rounded-lg p-2 border-2  text-lg border-primary focus:outline-none focus:ring-transparent `}
                            placeholder="Price"
                            type="text"
                            value={row.price}
                            disabled={!isEdit}
                            onChange={e => handleInputChange(index, "price", e.target.value)}
                          />
                        </td>
                        <td className="items-center text-xl">
                          {isEdit && (
                            <div
                              className="remove-tooltip flex justify-end cursor-pointer"
                              onClick={() => handleRemoveRow(index)}
                            >
                              <IoMdRemoveCircleOutline />
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            {/* <IoMdArrowDropdownCircle /> */}
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
                    category={["a", "b", "c", "d"]}
                    register={register}
                    setValue={setValue}
                    disabled={!isEdit}
                    required
                    error={errors.category?.message}
                    defaultValue="a"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="font-semibold">Sub Category : </div>
                <div className="border-2 border-primary p-2 rounded-lg">
                  <InputCategoryEdit
                    name="subCategory"
                    placeholder="Sub Category"
                    category={["a", "b", "c", "d"]}
                    register={register}
                    setValue={setValue}
                    disabled={!isEdit}
                    required
                    error={errors.subCategory?.message}
                    defaultValue="b"
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
                    defaultValue="1"
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
                    defaultValue="2"
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
