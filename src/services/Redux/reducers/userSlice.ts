import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "../../Axios/axios"
import { RootState } from "../store"

interface UserState {
  isLoading: boolean
  userDetails: {
    username?: string
    email?: string
    currentCity?: string
    // age?: string;
    gender?: string
    phoneNumber?: string
  } | null
  error: string | null | undefined
}

const initialState: UserState = {
  isLoading: false,
  userDetails: null,
  error: null,
}

export const generateOtp = createAsyncThunk("user/generateOtp", async (phoneNumber: string) => {
  try {
    const response = await axios.get(`/users/generate-otp`, { params: { phoneNumber } })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.error) {
      throw Error(err.response.data.error)
    } else {
      throw Error(err.message)
    }
  }
})

export const verifyOtpLogin = createAsyncThunk(
  "user/verifyOtpLogin",
  async (params: { phoneNumber: string; otp: string }) => {
    try {
      const response = await axios.get(`/users/verify-otp-login`, { params: params })
      return response.data
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        throw Error(err.response.data.error)
      } else {
        throw Error(err.message)
      }
    }
  },
)

export const verifyOtpSignup = createAsyncThunk(
  "user/verifyOtpSignup",
  async (params: { phoneNumber: string; otp: string }) => {
    try {
      const response = await axios.get(`/users/verify-otp-signup`, { params: params })
      return response.data
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        throw Error(err.response.data.error)
      } else {
        throw Error(err.message)
      }
    }
  },
)

export const createUser = createAsyncThunk("user/createUser", async (_, { getState }) => {
  try {
    const userDetails: UserState["userDetails"] = (getState() as RootState).user.userDetails
    const response = await axios.post(`/users`, userDetails)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.error) {
      console.log(err.response.data.error)
      throw Error(err.response.data.error)
    } else {
      throw Error(err.message)
    }
  }
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserDetails: (state, action: PayloadAction<UserState["userDetails"]>) => {
      state.userDetails = action.payload
    },
    addphoneNumber: (state, action: PayloadAction<string>) => {
      state.userDetails = {
        ...state.userDetails,
        phoneNumber: action.payload,
      }
      console.log(state.userDetails)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(generateOtp.pending, state => {
        state.isLoading = true
      })
      .addCase(generateOtp.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false
      })
      .addCase(generateOtp.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyOtpLogin.pending, state => {
        state.isLoading = true
      })
      .addCase(
        verifyOtpLogin.fulfilled,
        (state, action: PayloadAction<{ tokens: { accessToken: string; refreshToken: string } }>) => {
          state.isLoading = false
          console.log(action.payload)
          window.localStorage.setItem("accessTokenUser", JSON.stringify(action.payload.tokens.accessToken))
          window.localStorage.setItem("refreshTokenUser", JSON.stringify(action.payload.tokens.refreshToken))
        },
      )
      .addCase(verifyOtpLogin.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyOtpSignup.pending, state => {
        state.isLoading = true
      })
      .addCase(
        verifyOtpSignup.fulfilled,
        (state, action: PayloadAction<{ tokens: { accessToken: string; refreshToken: string } }>) => {
          state.isLoading = false
          console.log(action.payload)
        },
      )
      .addCase(verifyOtpSignup.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(createUser.pending, state => {
        state.isLoading = true
      })
      .addCase(
        createUser.fulfilled,
        (state, action: PayloadAction<{ tokens: { accessToken: string; refreshToken: string } }>) => {
          state.isLoading = false
          console.log(action.payload)
        },
      )
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
  },
})

export const { addUserDetails, addphoneNumber } = userSlice.actions
export default userSlice.reducer
