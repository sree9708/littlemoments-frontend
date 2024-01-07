import React, { useState } from "react"

const CityFilter = () => {
  const [selectedCities, setSelectedCities] = useState<string[]>([])

  const handleSelectedCities = (event: { target: { value: any; checked: any } }) => {
    const cityName = event.target.value
    if (event.target.checked) {
      setSelectedCities(prevSelectedCities => [...prevSelectedCities, cityName])
    } else {
      setSelectedCities(prevSelectedCities => prevSelectedCities.filter(city => city !== cityName))
    }
  }

  return (
    <>
      <div className="font-semibold">City</div>
      <div>
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="hyderabad"
            name="hyderabad"
            value="hyderabad"
            onChange={handleSelectedCities}
            checked={selectedCities.includes("hyderabad")}
          />
          <label htmlFor="hyderabad">Hyderabad</label>
        </div>
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="bangalore"
            name="bangalore"
            value="bangalore"
            onChange={handleSelectedCities}
            checked={selectedCities.includes("bangalore")}
          />
          <label htmlFor="bangalore">Bangalore</label>
        </div>
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="chennai"
            name="chennai"
            value="chennai"
            onChange={handleSelectedCities}
            checked={selectedCities.includes("chennai")}
          />
          <label htmlFor="chennai">Chennai</label>
        </div>
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="delhi"
            name="delhi"
            value="delhi"
            onChange={handleSelectedCities}
            checked={selectedCities.includes("delhi")}
          />
          <label htmlFor="delhi">Delhi</label>
        </div>
        <div className="flex my-2 items-center">
          <input
            className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            id="mumbai"
            name="mumbai"
            value="mumbai"
            onChange={handleSelectedCities}
            checked={selectedCities.includes("mumbai")}
          />
          <label htmlFor="mumbai">Mumbai</label>
        </div>
        <div className="text-theme-color-3 underline cursor-pointer">more+</div>
      </div>
    </>
  )
}

export default CityFilter
