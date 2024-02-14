"use client"

import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputText from "@/components/Inputs/InputText"
import ModalComponent from "@/components/Modal/ModalComponent"
import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import {
  addCategoryThunk,
  addSubCategoryThunk,
  updateCategoryThunk,
  updateSubCategoryThunk,
  updateSuperCategoryThunk,
} from "@/services/Redux/reducers/categorySlice"
import categoryValidation from "@/services/Validation/Category/categoryValidation"
import subCategoryValidation from "@/services/Validation/Category/subCategoryValidation"
import superCategoryValidation from "@/services/Validation/Category/superCategoryValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { IoMdAdd } from "react-icons/io"

const CategoryInformations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(categoryValidation) })

  const {
    register: registerInUpdateSuperCategory,
    handleSubmit: handleSubmitInUpdateSuperCategory,
    setValue: setValueInUpdateSuperCategory,
    formState: { errors: errorsInUpdateSuperCategory },
  } = useForm({ resolver: yupResolver(superCategoryValidation) })

  const {
    register: registerInSubCategory,
    handleSubmit: handleSubmitInSubCategory,
    formState: { errors: errorsInSubCategory },
  } = useForm({ resolver: yupResolver(subCategoryValidation) })

  const {
    register: registerInUpdateCategory,
    handleSubmit: handleSubmitInUpdateCategory,
    setValue: setValueInUpdateCategory,
    formState: { errors: errorsInUpdateCategory },
  } = useForm({ resolver: yupResolver(categoryValidation) })

  const {
    register: registerInUpdateSubCategory,
    handleSubmit: handleSubmitInUpdateSubCategory,
    setValue: setValueInUpdateSubCategory,
    formState: { errors: errorsInUpdateSubCategory },
  } = useForm({ resolver: yupResolver(subCategoryValidation) })

  const dispatch = useAppDispatch()

  const category = useAppSelector(state => state.category.categories)
  const [selectedSuperCategory, setSelectedSuperCategory] = useState<string | null>(category[0]?.id || null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category[0]?.categories?.[0]?.id || null,
  )
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)
  const [updateSuperCategoryModal, setUpdateSuperCategoryModal] = useState(false)
  const [addCategoryModal, setAddCategoryModal] = useState(false)
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false)
  const [addSubCategoryModal, setAddSubCategoryModal] = useState(false)
  const [updateSubCategoryModal, setUpdateSubCategoryModal] = useState(false)

  useEffect(() => {
    if (category[0]) {
      setSelectedSuperCategory(category[0]?.id || null)
    }
    if (category[0]?.categories?.[0]) {
      setSelectedCategory(category[0]?.categories?.[0]?.id || null)
    }
  }, [category])

  useEffect(() => {
    if (updateSuperCategoryModal && selectedSuperCategory !== null) {
      setValueInUpdateSuperCategory(
        "superCategory",
        category.find((category: any) => category.id === selectedSuperCategory)?.superCategory ?? "",
      )
    }
  }, [updateSuperCategoryModal, selectedSuperCategory])

  useEffect(() => {
    if (updateCategoryModal && selectedCategory !== null) {
      setValueInUpdateCategory(
        "category",
        category
          .find((category: any) => category.id === selectedSuperCategory)
          ?.categories?.find((c: any) => c.id === selectedCategory)?.categoryName || "",
      )
    }
  }, [updateCategoryModal, selectedCategory])

  useEffect(() => {
    if (updateSubCategoryModal && selectedSubCategory !== null) {
      setValueInUpdateSubCategory(
        "subCategory",
        category
          .find((category: any) => category.id === selectedSuperCategory)
          ?.categories?.find((c: any) => c.id === selectedCategory)
          ?.subCategories?.find((subCategory: any) => subCategory.id === selectedSubCategory)
          ?.subCategoryName || "",
      )
    }
  }, [updateSubCategoryModal, selectedSubCategory])

  const handleUpdateSuperCategory = (isOpen: boolean) => {
    setUpdateSuperCategoryModal(isOpen)
  }

  const handleCategoryModal = (isOpen: boolean) => {
    setAddCategoryModal(isOpen)
  }

  const handleUpdateCategoryModal = (isOpen: boolean) => {
    setUpdateCategoryModal(isOpen)
  }

  const handleSubCategoryModal = (isOpen: boolean) => {
    setAddSubCategoryModal(isOpen)
  }

  const handleUpdateSubCategoryModal = (isOpen: boolean) => {
    setUpdateSubCategoryModal(isOpen)
  }

  const onSubmitUpdateSuperCategory = async (data: any, superCategoryId: string | null) => {
    console.log(data)
    try {
      if (selectedSuperCategory) {
        await dispatch(
          updateSuperCategoryThunk({ superCategory: data.superCategory, superCategoryId: superCategoryId }),
        )
        setUpdateSuperCategoryModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message) 
      console.log(error.message)
    }
  }

  const onSubmitCategory = async (data: any) => {
    console.log(data)
    try {
      if (selectedSuperCategory) {
        await dispatch(addCategoryThunk({ category: data.category, id: selectedSuperCategory }))
        setAddCategoryModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message) 
      console.log(error.message)
    }
  }

  const onSubmitUpdateCategory = async (data: any, categoryId: string | null) => {
    console.log(data)
    try {
      if (selectedCategory) {
        await dispatch(updateCategoryThunk({ category: data.category, categoryId: categoryId }))
        setUpdateCategoryModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message) 
      console.log(error.message)
    }
  }

  const onSubmitSubCategory = async (data: any) => {
    console.log(data)
    try {
      if (selectedSuperCategory && selectedCategory) {
        await dispatch(
          addSubCategoryThunk({
            subCategory: data.subCategory,
            categoryId: selectedCategory,
          }),
        )
        setAddSubCategoryModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message) 
      console.log(error.message)
    }
  }

  const onSubmitUpdateSubCategory = async (data: any, subCategoryId: string | null) => {
    console.log(data)
    try {
      if (selectedSubCategory) {
        await dispatch(
          updateSubCategoryThunk({ subCategory: data.subCategory, subCategoryId: subCategoryId }),
        )
        setUpdateSubCategoryModal(false)
      }
    } catch (error: any) {
      errorMessage(error.message) 
      console.log(error.message)
    }
  }

  return (
    <div className="w-full flex flex-col items-center my-3">
      <div className="w-full p-3 border border-primary rounded-md">
        <div className="w-full border border-primary rounded-md p-3">
          <div className="text-xl font-semibold mb-3 flex justify-center">Super Categories</div>
          <div className="flex justify-center flex-wrap gap-3">
            {category?.length > 0 ? (
              category.map((category: any) => (
                <button
                  key={category.superCategory}
                  className={`relative bg-theme-1 p-3 rounded-md drop-shadow-lg cursor-pointer hover:scale-105 transition-all duration-300  ${selectedSuperCategory === category.id ? "opacity-100" : "opacity-60"}`}
                  onClick={() => {
                    setSelectedSuperCategory(category.id)
                    setSelectedCategory(null)
                  }}
                >
                  <div
                    className="absolute p-1 bg-secondary rounded-full -right-2 -top-2 text-sm cursor-pointer"
                    onClick={() => setUpdateSuperCategoryModal(true)}
                  >
                    <FaRegEdit />
                  </div>
                  <div className="w-full flex justify-center text-secondary text-xl">
                    {category.superCategory}
                  </div>
                </button>
              ))
            ) : (
              <div>Super Category not available</div>
            )}
            <ModalComponent
              isModalCloseAndOpen={updateSuperCategoryModal}
              handleModal={handleUpdateSuperCategory}
              title="Edit Super Category"
            >
              <form
                onSubmit={handleSubmitInUpdateSuperCategory((data: any) =>
                  onSubmitUpdateSuperCategory(data, selectedSuperCategory),
                )}
              >
                <div className="mt-8">
                  <InputText
                    name="superCategory"
                    type="text"
                    placeholder="Edit Super Category"
                    register={registerInUpdateSuperCategory}
                    required
                    error={errorsInUpdateSuperCategory.superCategory?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
          </div>
        </div>
        {selectedSuperCategory && (
          <div className="w-full border border-primary rounded-md p-3 my-3">
            <div className="text-xl font-semibold mb-3 flex justify-center">Categories</div>
            <div className="flex justify-center flex-wrap gap-3">
              {category.find((category: any) => category.id === selectedSuperCategory)?.categories?.length >
              0 ? (
                category
                  .find((category: any) => category.id === selectedSuperCategory)
                  ?.categories?.map((cat: any, index: number) => (
                    <button
                      key={index}
                      className={`relative bg-theme-1 p-3 rounded-md drop-shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ${selectedCategory === cat.id ? "opacity-100" : "opacity-60"}`}
                      onClick={() => setSelectedCategory(cat?.id)}
                    >
                      <div
                        className="absolute p-1 bg-secondary rounded-full -right-2 -top-2 text-sm cursor-pointer"
                        onClick={() => setUpdateCategoryModal(true)}
                      >
                        <FaRegEdit />
                      </div>
                      <div className="w-full flex justify-center text-secondary text-xl">
                        {cat.categoryName}
                      </div>
                    </button>
                  ))
              ) : (
                <div>Category not available</div>
              )}
            </div>
            <ModalComponent
              isModalCloseAndOpen={addCategoryModal}
              handleModal={handleCategoryModal}
              title="Add Category"
            >
              <form onSubmit={handleSubmit(onSubmitCategory)}>
                <div className="mt-8">
                  {selectedSuperCategory}
                  <InputText
                    name="category"
                    type="text"
                    placeholder="Category"
                    register={register}
                    required
                    error={errors.category?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
            <ModalComponent
              isModalCloseAndOpen={updateCategoryModal}
              handleModal={handleUpdateCategoryModal}
              title="Edit Category"
            >
              <form
                onSubmit={handleSubmitInUpdateCategory((data: any) =>
                  onSubmitUpdateCategory(data, selectedCategory),
                )}
              >
                <div className="mt-8">
                  <InputText
                    name="category"
                    type="text"
                    placeholder="Edit  Category"
                    register={registerInUpdateCategory}
                    required
                    error={errorsInUpdateCategory.category?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
            <div className="flex justify-center mt-3">
              <button
                className="flex justify-center text-sm font-semibold p-2 rounded-md text-secondary bg-theme-3"
                onClick={() => setAddCategoryModal(true)}
              >
                <IoMdAdd size={16} /> Update Category
              </button>
            </div>
          </div>
        )}

        {selectedSuperCategory && (
          <div className="w-full border border-primary rounded-md p-3">
            <div className="text-xl font-semibold mb-3 flex justify-center">Sub Categories</div>
            <div className="flex justify-center flex-wrap gap-3">
              {category
                .find((category: any) => category.id === selectedSuperCategory)
                ?.categories?.find((c: any) => c.id === selectedCategory)?.subCategories?.length > 0 ? (
                category
                  .find((category: any) => category.id === selectedSuperCategory)
                  ?.categories?.find((c: any) => c.id === selectedCategory)
                  ?.subCategories?.map((subCat: any) => (
                    <button
                      key={subCat.id}
                      className={`relative bg-theme-1 p-3 rounded-md drop-shadow-lg cursor-pointer hover:scale-105 transition-all duration-300`}
                      onClick={() => setSelectedSubCategory(subCat?.id)}
                    >
                      <div
                        className="absolute p-1 bg-secondary rounded-full -right-2 -top-2 text-sm cursor-pointer"
                        onClick={() => setUpdateSubCategoryModal(true)}
                      >
                        <FaRegEdit />
                      </div>
                      <div className="w-full flex justify-center text-secondary text-xl">
                        {subCat.subCategoryName}
                      </div>
                    </button>
                  ))
              ) : (
                <div>
                  {selectedCategory ? (
                    <div>Sub Category not available</div>
                  ) : (
                    <div className="flex justify-center flex-wrap gap-3">
                      <div>Please select any category</div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <ModalComponent
              isModalCloseAndOpen={addSubCategoryModal}
              handleModal={handleSubCategoryModal}
              title="Add Sub Category"
            >
              <form onSubmit={handleSubmitInSubCategory(onSubmitSubCategory)}>
                <div className="mt-8">
                  <InputText
                    name="subCategory"
                    type="text"
                    placeholder="Sub Category"
                    register={registerInSubCategory}
                    required
                    error={errorsInSubCategory.subCategory?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
            <ModalComponent
              isModalCloseAndOpen={updateSubCategoryModal}
              handleModal={handleUpdateSubCategoryModal}
              title="Edit Sub Category"
            >
              <form
                onSubmit={handleSubmitInUpdateSubCategory((data: any) =>
                  onSubmitUpdateSubCategory(data, selectedSubCategory),
                )}
              >
                <div className="mt-8">
                  <InputText
                    name="subCategory"
                    type="text"
                    placeholder="Edit Sub Category"
                    register={registerInUpdateSubCategory}
                    required
                    error={errorsInUpdateSubCategory.subCategory?.message}
                  />
                </div>
                <RegistrationButton text="Submit" />
              </form>
            </ModalComponent>
            <div className="flex justify-center mt-3">
              <button
                className="flex justify-center text-sm font-semibold p-2 rounded-md text-secondary bg-theme-3"
                onClick={() => setAddSubCategoryModal(true)}
              >
                <IoMdAdd size={16} /> Add Category
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryInformations
