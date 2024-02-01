import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { IProp } from "@/services/Utilities/interfaces/prop.interface"
import { getPlaceById, getPlaces, getPlacesBySkipAndLimit } from "../thunk/placeThunk"

interface PlaceState {
  isLoading: boolean
  places: IProp[]
  placeDetails: IProp | null
  error: string | null | undefined
}

const initialState: PlaceState = {
  isLoading: false,
  places: [],
  placeDetails: null,
  error: null,
}

export const getPlacesThunk = createAsyncThunk("place/getPlaces", getPlaces)
export const getPlacesBySkipAndLimitThunk = createAsyncThunk(
  "place/getPlacesBySkipAndLimit",
  getPlacesBySkipAndLimit,
)
export const getPlaceByIdThunk = createAsyncThunk("place/getPlaceById", getPlaceById)

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPlacesThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getPlacesThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.places = action.payload.props
      })
      .addCase(getPlacesThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(getPlacesBySkipAndLimitThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getPlacesBySkipAndLimitThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.places = [...state.places, ...action.payload.props]
      })
      .addCase(getPlacesBySkipAndLimitThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(getPlaceByIdThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getPlaceByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.placeDetails = action.payload.prop
      })
      .addCase(getPlaceByIdThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
  },
})

export const {} = placeSlice.actions
export default placeSlice.reducer
