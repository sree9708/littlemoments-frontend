"use client"

import InputTextarea from "@/components/Inputs/InputTextarea"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { FaStar } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoMdCloseCircleOutline } from "react-icons/io"
import Modal from "react-modal"
import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputText from "@/components/Inputs/InputText"

const schema = yup
  .object({
    title: yup
      .string()
      .required("Title is required.")
      .min(3, "Title must be at least 3 characters.")
      .max(100, "Title must not exceed 100 characters."),
    review: yup
      .string()
      .required("Review is required.")
      .min(3, "Review must be at least 3 characters.")
      .max(1000, "Review must not exceed 1000 characters."),
    rating: yup.number().required("Rating is required"),
  })
  .required()

export const Title = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const stars = Array(5).fill(null)

  const [isModal, setisModal] = useState<boolean>(false)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleModal = () => {
    setisModal(!isModal)
  }

  const onSubmit = (data: any) => {}

  return (
    <div>
      <div className="block sm:flex justify-between">
        <div>
          <div className="text-title-md font-title font-bold">REVIEWS</div>
          <div className="flex gap-4 items-center">
            <div className="text-5xl font-title font-bold">5.0</div>
            <div className="flex-wrap">
              <div className="flex items-center">
                {stars.map((_, index) => (
                  <div key={index} className="text-theme-color-4">
                    <FaStar />
                  </div>
                ))}
              </div>
              <div className="text-slate-400 text-xs">1,289 reviews</div>
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <div
            className="flex items-center gap-2 p-3 bg-blue-700 text-secondary rounded-lg drop-shadow-[5px_5px_0_rgba(0,0,0,1)] cursor-pointer"
            onClick={handleModal}
          >
            Write a review
            <div className="hover:translate-x-2 hover:opacity-80 transition-transform cursor-pointer">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModal}
        contentLabel="Review Modal"
        className={`z-50 w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 bg-background border-2 border-primary focus:outline-none focus:ring-transparent rounded-lg p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]`}
        style={{
          overlay: {
            backgroundColor: "#00000080",
          },
        }}
      >
        <div className="relative">
          <div className="font-title text-title-sm">Review</div>
          <button onClick={handleModal} className="absolute top-0 right-0">
            <IoMdCloseCircleOutline />
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                return (
                  <label key={i}>
                    <input
                      type="radio"
                      //   name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      {...register("rating")}
                      className="hidden"
                    />
                    <FaStar
                      className="cursor-pointer"
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      size={30}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                )
              })}
            </div>
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating?.message}</p>}
            <InputText
              name="title"
              placeholder="Title"
              type="text"
              register={register}
              required
              error={errors.title?.message}
            />
            <InputTextarea
              name="review"
              placeholder="Write your thoughts here..."
              type="text"
              register={register}
              required
              error={errors.review?.message}
            />
            <RegistrationButton text="Submit" />
          </form>
        </div>
      </Modal>
    </div>
  )
}
