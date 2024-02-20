import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { generateOtpAdmin, verifyOtpAdmin } from "../thunk/adminThunk"

interface ReviewState {
  isLoading: boolean
  adminLoggedIn: boolean
  error: string | null | undefined
}

const initialState: ReviewState = {
  isLoading: false,
  adminLoggedIn: false,
  error: null,
}

export const generateOtpAdminThunk = createAsyncThunk("admin/generateOtp", generateOtpAdmin)
export const verifyOtpAdminThunk = createAsyncThunk("admin/verifyOtp", verifyOtpAdmin)

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(generateOtpAdminThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(generateOtpAdminThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(generateOtpAdminThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyOtpAdminThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyOtpAdminThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.adminLoggedIn = true
      })
      .addCase(verifyOtpAdminThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
  },
})

export const {} = adminSlice.actions
export default adminSlice.reducer
