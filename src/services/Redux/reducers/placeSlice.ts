import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { IProp } from "@/services/Utilities/interfaces/prop.interface"
import {
  getPlaceById,
  getPlaces,
  getPlacesBySkipAndLimit,
  getPlaceByAdmin,
  getPlaceByIdWithDetails,
  updateAccountStatus,
} from "../thunk/placeThunk"

interface PlaceState {
  isLoading: boolean
  searchText: string
  places: IProp[]
  placeDetails: IProp | null
  adminPlaces: IProp[]
  error: string | null | undefined
}

const initialState: PlaceState = {
  isLoading: false,
  searchText: "",
  places: [],
  placeDetails: null,
  adminPlaces: [],
  error: null,
}

export const getPlacesThunk = createAsyncThunk("place/getPlaces", getPlaces)
export const getPlacesBySkipAndLimitThunk = createAsyncThunk(
  "place/getPlacesBySkipAndLimit",
  getPlacesBySkipAndLimit,
)
export const getPlaceByIdThunk = createAsyncThunk("place/getPlaceById", getPlaceById)
export const getPlaceByAdminThunk = createAsyncThunk("place/getPropByAdmin", getPlaceByAdmin)
export const getPlaceByIdWithDetailsThunk = createAsyncThunk(
  "place/getPlaceByIdWithDetails",
  getPlaceByIdWithDetails,
)
export const updateAccountStatusThunk = createAsyncThunk("place/updateAccountStatus", updateAccountStatus)

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
      .addCase(getPlaceByAdminThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getPlaceByAdminThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.adminPlaces = action.payload.props
      })
      .addCase(getPlaceByAdminThunk.rejected, (state, action) => {
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
      .addCase(getPlaceByIdWithDetailsThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getPlaceByIdWithDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false
        console.log("action.payload.prop :", action.payload.prop)
        state.placeDetails = action.payload.prop
      })
      .addCase(getPlaceByIdWithDetailsThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updateAccountStatusThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updateAccountStatusThunk.fulfilled, (state, action) => {
        state.isLoading = false
        // state.placeDetails = action.payload.prop
      })
      .addCase(updateAccountStatusThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
  },
})

export const {} = placeSlice.actions
export default placeSlice.reducer
