import React from "react"
import { FaStar } from "react-icons/fa"

interface SingleReviewProps {
  name: string
  place: string
  title: string
  date: string
  rating: number
  review: string
}

const SingleReview: React.FC<SingleReviewProps> = ({ name, place, title, date, rating, review }) => {
  const stars = Array(rating).fill(null)

  const dateReview = new Date(date)

  const year = dateReview.getFullYear()
  const month = dateReview.getMonth() + 1 // Months are zero-based in JavaScript
  const day = dateReview.getDate()

  const formattedDate = `${day < 10 ? "0" + day : day}-${month < 10 ? "0" + month : month}-${year}`

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-12 py-3">
        <div className="sm:col-span-3">
          <div>{name}</div>
          <div className="text-xs text-slate-400">{place}</div>
        </div>
        <div className="sm:col-span-6">
          <div className="flex flex-col sm:flex-row gap-3 items-start mt-4 sm:mt-0">
            <div className="flex">
              {stars.map((_, index) => (
                <div key={index} className="text-primary">
                  <FaStar />
                </div>
              ))}
            </div>
            <div className="text-xl font-bold">{title}</div>
          </div>
          <div className="my-4">{review}</div>
        </div>
        <div className="sm:col-span-3 relative">
          <div className="absolute sm:top-0 sm:right-0 font-semibold">{formattedDate}</div>
        </div>
      </div>
      <div className="w-full border-t border-gray-500 my-4"></div>
    </div>
  )
}

export default SingleReview
