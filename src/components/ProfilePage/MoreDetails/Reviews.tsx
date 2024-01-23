import React, { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useAppSelector } from "@/hooks/useStore"
import SingleReview from "@/components/Review/SingleReview"

const Reviews = () => {
  const reviews = useAppSelector(state => state.review?.reviews)
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 3

  const indexOfLastReview = currentPage * reviewsPerPage
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const totalPages = Math.ceil(reviews.length / reviewsPerPage)
  return (
    <div>
      <div className="w-full border-t border-gray-500 my-4"></div>
      {currentReviews.length !== 0 ? (
        currentReviews?.map(review => (
          <SingleReview
            key={review._id}
            name={review?.propId?.placeName || "Anonymous"}
            place={review?.propId?.city || "Unknown"}
            title={review?.title || "No title"}
            date={review?.updatedAt || "No date"}
            rating={review?.rating || 5}
            review={review?.review || "No review"}
          />
        ))
      ) : (
        <div>No reviews available</div>
      )}
      <div className="flex gap-2 justify-end">
        {currentPage > 1 && (
          <div
            className="p-3 border-2 rounded-full border-primary w-fit bg-secondary hover:bg-theme-color-4 cursor-pointer"
            onClick={() => paginate(currentPage - 1)}
          >
            <IoIosArrowBack />
          </div>
        )}
        {currentPage < totalPages && (
          <div
            className="p-3 border-2 rounded-full border-primary w-fit bg-secondary hover:bg-theme-color-4 cursor-pointer"
            onClick={() => paginate(currentPage + 1)}
          >
            <IoIosArrowForward />
          </div>
        )}
      </div>
    </div>
  )
}

export default Reviews
