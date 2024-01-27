import { RootState } from "../store"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../Axios/axios"
import { IReview } from "@/services/Utilities/interfaces/review.interface"
import { getPlaceById } from "./placeSlice"

interface ReviewState {
  isLoading: boolean
  reviews: IReview[]
  error: string | null | undefined
}

const initialState: ReviewState = {
  isLoading: false,
  reviews: [],
  error: null,
}

export const getReviewsByPropId = createAsyncThunk("review/getReviewsByPropId", async (id: string) => {
  try {
    const response = await axios.get(`/reviews/prop-id/${id}`)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.error) {
      throw Error(err.response.data.error)
    } else {
      throw Error(err.message)
    }
  }
})

export const getReviewsByUserId = createAsyncThunk("review/getReviewsByUserId", async (id: string) => {
  try {
    console.log(id)
    const response = await axios.get(`/reviews/user-id/${id}`)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.error) {
      throw Error(err.response.data.error)
    } else {
      throw Error(err.message)
    }
  }
})

export const createReview = createAsyncThunk(
  "review/createReview",
  async ({ userId, propId, title, review, rating }: IReview) => {
    try {
      const response = await axios.post(`/users/review/${userId}/${propId}`, { title, review, rating })
      return response.data
    } catch (err: any) {
      console.log(err)
      if (err.response && err.response.data && err.response.data.error) {
        throw Error(err.response.data.error)
      } else {
        throw Error(err.message)
      }
    }
  },
)

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReviews: (state, action) => {
      state.reviews = action.payload
    },
    logoutReview: state => {
      Object.assign(state, initialState)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getReviewsByPropId.pending, state => {
        state.isLoading = true
      })
      .addCase(getReviewsByPropId.fulfilled, (state, action) => {
        state.isLoading = false
        state.reviews = action.payload.reviews
      })
      .addCase(getReviewsByPropId.rejected, (state, action) => {
        state.isLoading = false
        state.reviews = []
        throw Error(action.error.message)
      })
      .addCase(getReviewsByUserId.pending, state => {
        state.isLoading = true
      })
      .addCase(getReviewsByUserId.fulfilled, (state, action) => {
        state.isLoading = false
        state.reviews = action.payload.reviews
      })
      .addCase(getReviewsByUserId.rejected, (state, action) => {
        state.isLoading = false
        state.reviews = []
        throw Error(action.error.message)
      })
      .addCase(createReview.pending, state => {
        state.isLoading = true
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(createReview.rejected, (state, action) => {
        state.isLoading = false
        state.reviews = []
        throw Error(action.error.message)
      })
      .addCase(getPlaceById.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews
      })
  },
})

export const { addReviews, logoutReview } = reviewSlice.actions
export default reviewSlice.reducer
