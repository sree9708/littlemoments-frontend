import React, { useState } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io"

type CategoryFilterProps = {
  title: string
}
const CategoryFilter = ({ title }: CategoryFilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [allCategories, setAllCategories] = useState<boolean>(false)

  const handleSelectedCategories = (event: { target: { value: any; checked: any } }) => {
    const categoryName = event.target.value
    if (event.target.checked) {
      setSelectedCategories(prevSelectedCategories => [...prevSelectedCategories, categoryName])
    } else {
      setSelectedCategories(prevSelectedCategories =>
        prevSelectedCategories.filter(city => city !== categoryName),
      )
    }
  }

  const handleAllCategories = () => {
    setAllCategories(!allCategories)
  }

  return (
    <>
      <div className=" font-semibold">{title}</div>
      <div className="relative">
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="automotive"
            name="automotive"
            value="automotive"
            onChange={handleSelectedCategories}
            checked={selectedCategories.includes("automotive")}
          />
          <label htmlFor="automotive">Automotive</label>
        </div>
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="holiday"
            name="holiday"
            value="holiday"
            onChange={handleSelectedCategories}
            checked={selectedCategories.includes("holiday")}
          />
          <label htmlFor="holiday">Holiday</label>
        </div>
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="food"
            name="food"
            value="food"
            onChange={handleSelectedCategories}
            checked={selectedCategories.includes("food")}
          />
          <label htmlFor="food">Food</label>
        </div>
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="outdoor"
            name="outdoor"
            value="outdoor"
            onChange={handleSelectedCategories}
            checked={selectedCategories.includes("outdoor")}
          />
          <label htmlFor="outdoor">Outdoor</label>
        </div>
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="sports"
            name="sports"
            value="sports"
            onChange={handleSelectedCategories}
            checked={selectedCategories.includes("sports")}
          />
          <label htmlFor="sports">Sports</label>
        </div>
        <div className="text-theme-color-3 underline cursor-pointer" onClick={handleAllCategories}>
          more+
        </div>
        {allCategories && (
          <div
            className="absolute top-0 left-0 p-2 w-fit z-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="flex justify-between top-2 right-2 text-xl">
              <div>Categories</div>
              <div className="cursor-pointer" onClick={handleAllCategories}>
                <IoMdCloseCircleOutline />
              </div>
            </div>
            <div className="border mt-2"></div>
            <div className=" flex gap-4 pt-4">
              <div className="pe-4 border-e">
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
              </div>
              <div className="pe-4 border-e">
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
              </div>
              <div className="pe-4 border-e">
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="flex my-2 items-center">
                  <input
                    className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="automotive"
                    name="automotive"
                    value="automotive"
                    onChange={handleSelectedCategories}
                    checked={selectedCategories.includes("automotive")}
                  />
                  <label htmlFor="automotive">Automotive</label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CategoryFilter
