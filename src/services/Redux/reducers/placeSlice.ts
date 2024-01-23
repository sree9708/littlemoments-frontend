import { RootState } from "../store"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../Axios/axios"
import { IProp } from "@/services/Utilities/interfaces/prop.interface"

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

export const getPlaceBySkipAndLimit = createAsyncThunk(
  "place/getPlaceBySkipAndLimit",
  async ({ skip, limit }: { skip: number; limit: number }) => {
    try {
      const response = await axios.get(`/props/get-place/${skip}/${limit}`)
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

export const getPlaceById = createAsyncThunk("place/getPlaceById", async (id: string) => {
  try {
    const response = await axios.get(`/props/${id}`)
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

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPlaceBySkipAndLimit.pending, state => {
        state.isLoading = true
      })
      .addCase(getPlaceBySkipAndLimit.fulfilled, (state, action) => {
        state.isLoading = false
        state.places = [...state.places, ...action.payload.props]
        console.log(action.payload)
      })
      .addCase(getPlaceBySkipAndLimit.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(getPlaceById.pending, state => {
        state.isLoading = true
      })
      .addCase(getPlaceById.fulfilled, (state, action) => {
        state.isLoading = false
        state.placeDetails = action.payload.prop
        console.log(action.payload)
      })
      .addCase(getPlaceById.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
  },
})

export const {} = placeSlice.actions
export default placeSlice.reducer
