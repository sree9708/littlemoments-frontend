import React, { useEffect, useState } from "react"
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io"
import AddAndRemoveTooltip from "../Tooltip/TooltipComponent"

const InputRateCard = ({
  onRateCardChange,
  error,
}: {
  onRateCardChange: (data: any[]) => void
  error: any
}) => {
  const [tableData, setTableData] = useState(Array.from({ length: 0 }, () => ({ title: "", price: "" })))

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
    setTableData(prevData => [...prevData, { title: "", price: "" }])
  }

  const handleRemoveRow = (index: number) => {
    setTableData(prevData => {
      const newData = [...prevData]
      newData.splice(index, 1)
      return newData
    })
  }

  return (
    <div className="w-full">
      <AddAndRemoveTooltip />
      <div
        onClick={handleAddRow}
        className="flex justify-between relative w-full bg-transparent rounded-lg p-3 my-3 border-2  text-xl border-primary focus:outline-none focus:ring-transparent"
      >
        <div className="text-gray-400">Rate card</div>
        <div className="add-tooltip cursor-pointer">
          <IoMdAddCircleOutline />
        </div>
      </div>
      <table className="w-full">
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  name="item"
                  className="w-full bg-transparent rounded-sm p-1 px-3 my-2 border border-primary focus:outline-none focus:ring-transparent"
                  placeholder="Item"
                  type="text"
                  value={row.title}
                  onChange={e => handleInputChange(index, "title", e.target.value)}
                />
              </td>
              <td className="ps-3">
                <input
                  name="price"
                  className="w-full bg-transparent rounded-sm p-1 px-3 my-2 border border-primary focus:outline-none focus:ring-transparent"
                  placeholder="Price"
                  type="text"
                  value={row.price}
                  onChange={e => handleInputChange(index, "price", e.target.value)}
                />
              </td>
              <td className="items-center text-xl">
                <div
                  className="remove-tooltip flex justify-end cursor-pointer"
                  onClick={() => handleRemoveRow(index)}
                >
                  <IoMdRemoveCircleOutline />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputRateCard
