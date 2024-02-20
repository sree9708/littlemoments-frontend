import AddAndRemoveTooltip from "@/components/Tooltip/TooltipComponent"
import React, { useEffect, useState } from "react"
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io"
import { Tooltip } from "react-tooltip"

const tableContent = [
  { item: "Park", price: "2000" },
  { item: "Park", price: "300" },
]

const InputRateCardEdit = ({
  onRateCardChange,
  isEdit,
  error,
}: {
  onRateCardChange: (data: any[]) => void
  isEdit: boolean
  error: any
}) => {
  const [tableData, setTableData] = useState(tableContent)

  useEffect(() => {
    onRateCardChange(tableData)
  }, [tableData, onRateCardChange])

  const handleInputChange = (index: number, key: string, value: string) => {
    setTableData(prevData => {
      const newData: any = [...prevData]
      newData[index][key] = value
      return newData
    })
  }

  const handleAddRow = () => {
    setTableData(prevData => [...prevData, { item: "", price: "" }])
  }

  const handleRemoveRow = (index: number) => {
    setTableData(prevData => {
      const newData = [...prevData]
      newData.splice(index, 1)
      return newData
    })
  }

  return (
    <div className="w-full h-fit border-2 border-primary p-2 rounded-lg">
      <AddAndRemoveTooltip />
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
                    value={row.item}
                    disabled={!isEdit}
                    onChange={e => handleInputChange(index, "item", e.target.value)}
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
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputRateCardEdit
