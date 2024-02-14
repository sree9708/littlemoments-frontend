"use client"

import InputTextarea from "@/components/Inputs/InputTextarea"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { FaStar } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoMdCloseCircleOutline } from "react-icons/io"
import Modal from "react-modal"
import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputText from "@/components/Inputs/InputText"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { createReviewThunk, getReviewsByPropIdThunk } from "@/services/Redux/reducers/reviewSlice"
import { useParams } from "next/navigation"
import reviewValidation from "@/services/Validation/Review/reviewValidation"
import { errorMessage } from "@/hooks/useNotifications"

export const Title = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(reviewValidation) })

  const params = useParams()
  const propId: string = params?.id as string

  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.user?.id)
  const reviews = useAppSelector(state => state.review?.reviews)

  const stars = Array(5).fill(null)

  const [isModal, setisModal] = useState<boolean>(false)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleModal = () => {
    if (!userId) {
      alert("You must be logged in to write a review.")
      return
    } else {
      setisModal(!isModal)
    }
  }

  const onSubmit = async (data: any) => {
    console.log(data)
    try {
      await dispatch(createReviewThunk({ userId, propId, ...data }))
      await dispatch(getReviewsByPropIdThunk(propId))
      setisModal(false)
    } catch (error: any) {
      errorMessage(error.message) 
    }
  }

  return (
    <div>
      <div className="block sm:flex justify-between">
        <div>
          <div className="text-title-md font-title font-bold truncate">REVIEWS</div>
          <div className="flex gap-4 items-center">
            <div className="text-5xl font-title font-bold">5.0</div>
            <div className="flex-wrap">
              <div className="flex items-center">
                {stars.map((_, index) => (
                  <div key={index} className="text-theme-4">
                    <FaStar />
                  </div>
                ))}
              </div>
              <div className="text-slate-400 text-xs">{reviews.length} reviews</div>
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
            zIndex: 55,
          },
        }}
      >
        <div className="relative z-50">
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
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      {...register("rating")}
                      className="hidden"
                    />
                    <FaStar
                      className="cursor-pointer drop-shadow-sm"
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
