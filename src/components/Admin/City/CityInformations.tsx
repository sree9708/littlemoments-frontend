"use client"

import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputText from "@/components/Inputs/InputText"
import ModalComponent from "@/components/Modal/ModalComponent"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import {
  addStateThunk,
  addCityThunk,
  updateStateThunk,
  updateCityThunk,
  updateCountryThunk,
} from "@/services/Redux/reducers/citySlice"
import stateValidation from "@/services/Validation/City/stateValidation"
import cityValidation from "@/services/Validation/City/cityValidation"
import countryValidation from "@/services/Validation/City/countryValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { IoMdAdd } from "react-icons/io"
import { errorMessage } from "@/hooks/useNotifications"

const CityInformations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(stateValidation) })

  const {
    register: registerInUpdateCountry,
    handleSubmit: handleSubmitInUpdateCountry,
    setValue: setValueInUpdateCountry,
    formState: { errors: errorsInUpdateCountry },
  } = useForm({ resolver: yupResolver(countryValidation) })

  const {
    register: registerInCity,
    handleSubmit: handleSubmitInCity,
    formState: { errors: errorsInCity },
  } = useForm({ resolver: yupResolver(cityValidation) })

  const {
    register: registerInUpdateState,
    handleSubmit: handleSubmitInUpdateState,
    setValue: setValueInUpdateState,
    formState: { errors: errorsInUpdateState },
  } = useForm({ resolver: yupResolver(stateValidation) })

  const {
    register: registerInUpdateCity,
    handleSubmit: handleSubmitInUpdateCity,
    setValue: setValueInUpdateCity,
    formState: { errors: errorsInUpdateCity },
  } = useForm({ resolver: yupResolver(cityValidation) })

  const dispatch = useAppDispatch()

  const city = useAppSelector(state => state.city.cities)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [updateCountryModal, setUpdateCountryModal] = useState(false)
  const [addStateModal, setAddStateModal] = useState(false)
  const [updateStateModal, setUpdateStateModal] = useState(false)
  const [addCityModal, setAddCityModal] = useState(false)
  const [updateCityModal, setUpdateCityModal] = useState(false)

  useEffect(() => {
    if (city[0]) {
      setSelectedCountry(city[0]?.id || null)
    }
    if (city[0]?.states?.[0]) {
      setSelectedState(city[0]?.states?.[0]?.id || null)
    }
  }, [city])

  useEffect(() => {
    if (updateCountryModal && selectedCountry !== null) {
      setValueInUpdateCountry(
        "country",
        city.find((state: any) => state.id === selectedCountry)?.country || "",
      )
    }
  }, [updateCountryModal, selectedCountry])

  useEffect(() => {
    if (updateStateModal && selectedState !== null) {
      setValueInUpdateState(
        "state",
        city
          .find((state: any) => state.id === selectedCountry)
          ?.states?.find((c: any) => c.id === selectedState)?.state || "",
      )
    }
  }, [updateStateModal, selectedState])

  useEffect(() => {
    if (updateCityModal && selectedCity !== null) {
      setValueInUpdateCity(
        "city",
        city
          .find((state: any) => state.id === selectedCountry)
          ?.states?.find((c: any) => c.id === selectedState)
          ?.cities?.find((city: any) => city.id === selectedCity)?.city || "",
      )
    }
  }, [updateCityModal, selectedCity])

  const handleUpdateCountry = (isOpen: boolean) => {
    setUpdateCountryModal(isOpen)
  }

  const handleStateModal = (isOpen: boolean) => {
    setAddStateModal(isOpen)
  }

  const handleUpdateStateModal = (isOpen: boolean) => {
    setUpdateStateModal(isOpen)
  }

  const handleCityModal = (isOpen: boolean) => {
    setAddCityModal(isOpen)
  }

  const handleUpdateCityModal = (isOpen: boolean) => {
    setUpdateCityModal(isOpen)
  }

  const onSubmitUpdateCountry = async (data: any, countryId: string | null) => {
    try {
      if (selectedCountry) {
        await dispatch(updateCountryThunk({ country: data.country, countryId: countryId }))
        setUpdateCountryModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message)
    }
  }

  const onSubmitState = async (data: any) => {
    try {
      if (selectedCountry) {
        await dispatch(addStateThunk({ state: data.state, id: selectedCountry }))
        setAddStateModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message)
    }
  }

  const onSubmitUpdateState = async (data: any, stateId: string | null) => {
    try {
      if (selectedState) {
        await dispatch(updateStateThunk({ state: data.state, stateId: stateId }))
        setUpdateStateModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message)
    }
  }

  const onSubmitCity = async (data: any) => {
    try {
      if (selectedCountry && selectedState) {
        await dispatch(
          addCityThunk({
            city: data.city,
            stateId: selectedState,
          }),
        )
        setAddCityModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message)
    }
  }

  const onSubmitUpdateCity = async (data: any, cityId: string | null) => {
    try {
      if (selectedCity) {
        await dispatch(updateCityThunk({ city: data.city, cityId: cityId }))
        setUpdateCityModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message)
    }
  }

  return (
    <div className="w-full flex flex-col items-center my-3">
      <div className="w-full p-3 border border-primary rounded-md">
        <div className="w-full border border-primary rounded-md p-3">
          <div className="text-xl font-semibold mb-3 flex justify-center">Country</div>
          <div className="flex justify-center flex-wrap gap-3">
            {city?.length > 0 ? (
              city.map((country: any) => (
                <button
                  key={country.country}
                  className={`relative bg-theme-1 p-3 rounded-md drop-shadow-lg cursor-pointer hover:scale-105 transition-all duration-300  ${selectedCountry === country.id ? "opacity-100" : "opacity-60"}`}
                  onClick={() => {
                    setSelectedCountry(country.id)
                    setSelectedState(null)
                  }}
                >
                  <div
                    className="absolute p-1 bg-secondary rounded-full -right-2 -top-2 text-sm cursor-pointer"
                    onClick={() => setUpdateCountryModal(true)}
                  >
                    <FaRegEdit />
                  </div>
                  <div className="w-full flex justify-center text-secondary text-xl">{country.country}</div>
                </button>
              ))
            ) : (
              <div>Country not available</div>
            )}
            <ModalComponent
              isModalCloseAndOpen={updateCountryModal}
              handleModal={handleUpdateCountry}
              title="Edit Country"
            >
              <form
                onSubmit={handleSubmitInUpdateCountry((data: any) =>
                  onSubmitUpdateCountry(data, selectedCountry),
                )}
              >
                <div className="mt-8">
                  <InputText
                    name="country"
                    type="text"
                    placeholder="Edit Country"
                    register={registerInUpdateCountry}
                    required
                    error={errorsInUpdateCountry.country?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
          </div>
        </div>
        {selectedCountry && (
          <div className="w-full border border-primary rounded-md p-3 my-3">
            <div className="text-xl font-semibold mb-3 flex justify-center">Categories</div>
            <div className="flex justify-center flex-wrap gap-3">
              {city.find((state: any) => state.id === selectedCountry)?.states?.length > 0 ? (
                city
                  .find((state: any) => state.id === selectedCountry)
                  ?.states?.map((state: any, index: number) => (
                    <button
                      key={index}
                      className={`relative bg-theme-1 p-3 rounded-md drop-shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ${selectedState === state.id ? "opacity-100" : "opacity-60"}`}
                      onClick={() => setSelectedState(state?.id)}
                    >
                      <div
                        className="absolute p-1 bg-secondary rounded-full -right-2 -top-2 text-sm cursor-pointer"
                        onClick={() => setUpdateStateModal(true)}
                      >
                        <FaRegEdit />
                      </div>
                      <div className="w-full flex justify-center text-secondary text-xl">{state.state}</div>
                    </button>
                  ))
              ) : (
                <div>State not available</div>
              )}
            </div>
            <ModalComponent
              isModalCloseAndOpen={addStateModal}
              handleModal={handleStateModal}
              title="Add State"
            >
              <form onSubmit={handleSubmit(onSubmitState)}>
                <div className="mt-8">
                  <InputText
                    name="state"
                    type="text"
                    placeholder="State"
                    register={register}
                    required
                    error={errors.state?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
            <ModalComponent
              isModalCloseAndOpen={updateStateModal}
              handleModal={handleUpdateStateModal}
              title="Edit State"
            >
              <form
                onSubmit={handleSubmitInUpdateState((data: any) => onSubmitUpdateState(data, selectedState))}
              >
                <div className="mt-8">
                  <InputText
                    name="state"
                    type="text"
                    placeholder="Edit  State"
                    register={registerInUpdateState}
                    required
                    error={errorsInUpdateState.state?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
            <div className="flex justify-center mt-3">
              <button
                className="flex justify-center text-sm font-semibold p-2 rounded-md text-secondary bg-theme-3"
                onClick={() => setAddStateModal(true)}
              >
                <IoMdAdd size={16} /> Update State
              </button>
            </div>
          </div>
        )}

        {selectedCountry && (
          <div className="w-full border border-primary rounded-md p-3">
            <div className="text-xl font-semibold mb-3 flex justify-center">Categories</div>
            <div className="flex justify-center flex-wrap gap-3">
              {city
                .find((state: any) => state.id === selectedCountry)
                ?.states?.find((c: any) => c.id === selectedState)?.cities?.length > 0 ? (
                city
                  .find((state: any) => state.id === selectedCountry)
                  ?.states?.find((c: any) => c.id === selectedState)
                  ?.cities?.map((city: any) => (
                    <button
                      key={city.id}
                      className={`relative bg-theme-1 p-3 rounded-md drop-shadow-lg cursor-pointer hover:scale-105 transition-all duration-300`}
                      onClick={() => setSelectedCity(city?.id)}
                    >
                      <div
                        className="absolute p-1 bg-secondary rounded-full -right-2 -top-2 text-sm cursor-pointer"
                        onClick={() => setUpdateCityModal(true)}
                      >
                        <FaRegEdit />
                      </div>
                      <div className="w-full flex justify-center text-secondary text-xl">{city.city}</div>
                    </button>
                  ))
              ) : (
                <div>
                  {selectedState ? (
                    <div>City not available</div>
                  ) : (
                    <div className="flex justify-center flex-wrap gap-3">
                      <div>Please select any state</div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <ModalComponent isModalCloseAndOpen={addCityModal} handleModal={handleCityModal} title="Add City">
              <form onSubmit={handleSubmitInCity(onSubmitCity)}>
                <div className="mt-8">
                  <InputText
                    name="city"
                    type="text"
                    placeholder="City"
                    register={registerInCity}
                    required
                    error={errorsInCity.city?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
            <ModalComponent
              isModalCloseAndOpen={updateCityModal}
              handleModal={handleUpdateCityModal}
              title="Edit City"
            >
              <form
                onSubmit={handleSubmitInUpdateCity((data: any) => onSubmitUpdateCity(data, selectedCity))}
              >
                <div className="mt-8">
                  <InputText
                    name="city"
                    type="text"
                    placeholder="Edit City"
                    register={registerInUpdateCity}
                    required
                    error={errorsInUpdateCity.city?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
            <div className="flex justify-center mt-3">
              <button
                className="flex justify-center text-sm font-semibold p-2 rounded-md text-secondary bg-theme-3"
                onClick={() => setAddCityModal(true)}
              >
                <IoMdAdd size={16} /> Add City
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CityInformations
