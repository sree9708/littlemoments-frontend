import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  getCities,
  addCountry,
  addState,
  addCity,
  updateCountry,
  updateState,
  updateCity,
} from "../thunk/cityThunk"
import { ICity } from "@/services/Utilities/interfaces/city.interface"

interface PlaceState {
  isLoading: boolean
  cities: ICity[]
}

const initialState: PlaceState = {
  isLoading: false,
  cities: [],
}

export const getCitiesThunk = createAsyncThunk("city/getCities", getCities)
export const addCountryThunk = createAsyncThunk("city/addCountry", addCountry)
export const updateCountryThunk = createAsyncThunk("city/updateCountry", updateCountry)
export const addStateThunk = createAsyncThunk("city/addState", addState)
export const updateStateThunk = createAsyncThunk("city/updateState", updateState)
export const addCityThunk = createAsyncThunk("city/addCity", addCity)
export const updateCityThunk = createAsyncThunk("city/updateCity", updateCity)

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCitiesThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getCitiesThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.cities = action.payload.cities
      })
      .addCase(getCitiesThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addCountryThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(addCountryThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.cities = [...state.cities, action.payload.city]
      })
      .addCase(addCountryThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updateCountryThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updateCountryThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.cities = action.payload.cities
      })
      .addCase(updateCountryThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addStateThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(addStateThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.cities = action.payload.cities
      })
      .addCase(addStateThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updateStateThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updateStateThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.cities = action.payload.cities
      })
      .addCase(updateStateThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addCityThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(addCityThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.cities = action.payload.cities
      })
      .addCase(addCityThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updateCityThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updateCityThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.cities = action.payload.cities
      })
      .addCase(updateCityThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
  },
})

export const {} = citySlice.actions
export default citySlice.reducer
