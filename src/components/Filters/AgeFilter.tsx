import React, { useState } from "react"

const AgeFilter = () => {
  const [selectedAges, setSelectedAges] = useState<string[]>([])

  const ageOptions = [
    { id: "lessThan5", label: "Less than 5", value: "lessThan5" },
    { id: "lessThan15", label: "Less than 15", value: "lessThan15" },
    { id: "moreThan15", label: "More than 15", value: "moreThan15" },
    { id: "moreThan30", label: "More than 30", value: "moreThan30" },
    { id: "moreThan50", label: "More than 50", value: "moreThan50" },
  ]

  const handleSelectedAge = (event: any) => {
    const ageValue = event.target.value
    if (event.target.checked) {
      setSelectedAges(prevSelectedAges => [...prevSelectedAges, ageValue])
    } else {
      setSelectedAges(prevSelectedAges => prevSelectedAges.filter(age => age !== ageValue))
    }
  }

  return (
    <>
      <div className="font-semibold">Age</div>
      <div>
        {ageOptions.map(option => (
          <div key={option.id} className="flex my-2 items-center">
            <input
              className="w-4 h-4 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
              type="checkbox"
              id={option.id}
              name={option.id}
              value={option.value}
              onChange={handleSelectedAge}
              checked={selectedAges.includes(option.value)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
        <div className="text-theme-3 underline cursor-pointer">more+</div>
      </div>
    </>
  )
}

export default AgeFilter
