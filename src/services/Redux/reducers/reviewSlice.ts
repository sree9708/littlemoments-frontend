import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { IReview } from "@/services/Utilities/interfaces/review.interface"
import { getPlaceByIdThunk } from "./placeSlice"
import { createReview, getReviewsByPropId, getReviewsByUserId } from "../thunk/reviewThunk"

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

export const getReviewsByPropIdThunk = createAsyncThunk("review/getReviewsByPropId", getReviewsByPropId)
export const getReviewsByUserIdThunk = createAsyncThunk("review/getReviewsByUserId", getReviewsByUserId)
export const createReviewThunk = createAsyncThunk("review/createReview", createReview)

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
      .addCase(getReviewsByPropIdThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getReviewsByPropIdThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.reviews = action.payload.reviews
      })
      .addCase(getReviewsByPropIdThunk.rejected, (state, action) => {
        state.isLoading = false
        state.reviews = []
        throw Error(action.error.message)
      })
      .addCase(getReviewsByUserIdThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getReviewsByUserIdThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.reviews = action.payload.reviews
      })
      .addCase(getReviewsByUserIdThunk.rejected, (state, action) => {
        state.isLoading = false
        state.reviews = []
        throw Error(action.error.message)
      })
      .addCase(createReviewThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(createReviewThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(createReviewThunk.rejected, (state, action) => {
        state.isLoading = false
        state.reviews = []
        throw Error(action.error.message)
      })
      .addCase(getPlaceByIdThunk.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews
      })
  },
})

export const { addReviews, logoutReview } = reviewSlice.actions
export default reviewSlice.reducer
