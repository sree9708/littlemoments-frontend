import { IReview } from "@/services/Utilities/interfaces/review.interface"
import axios from "../../Axios/axios"

export const getReviewsByPropId = async (id: string) => {
  try {
    const response = await axios.get(`/reviews/prop-id/${id}`)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const getReviewsByUserId = async (id: string) => {
  try {
    console.log(id)
    const response = await axios.get(`/reviews/user-id/${id}`)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const createReview = async ({ userId, propId, title, review, rating }: IReview) => {
  try {
    const response = await axios.post(`/users/review/${userId}/${propId}`, { title, review, rating })
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}
