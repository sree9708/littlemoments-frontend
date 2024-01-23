import { RootState } from "../store"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "../../Axios/axios"
import { IUser } from "@/services/Utilities/interfaces/user.interface"

interface UserState {
  isLoading: boolean
  id: string | null
  userDetailsForm: IUser | null
  userInformations: IUser | null
  error: string | null | undefined
}

const initialState: UserState = {
  isLoading: false,
  id: null,
  userDetailsForm: null,
  userInformations: null,
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

export const verifyUserId = createAsyncThunk("user/verifyUserId", async (id: string) => {
  try {
    const response = await axios.get(`/users/verify-id/${id}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.error) {
      throw Error(err.response.data.error)
    } else {
      throw Error(err.message)
    }
  }
})

export const createUser = createAsyncThunk("user/createUser", async (_, { getState }) => {
  try {
    const userDetailsForm: UserState["userDetailsForm"] = (getState() as RootState).user.userDetailsForm
    const response = await axios.post(`/users`, userDetailsForm)
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

export const updateWishlist = createAsyncThunk(
  "user/updateWishlist",
  async ({ propId, wishlist }: any, { getState }) => {
    try {
      const userId: UserState["id"] = (getState() as RootState).user.id
      const response = await axios.put(`/users/wishlist/${userId}/${propId}/${wishlist}`)
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
  },
)

export const removeWishlist = createAsyncThunk(
  "user/removeWishlist",
  async (propId: string, { getState }) => {
    try {
      const userId: UserState["id"] = (getState() as RootState).user.id
      const response = await axios.post(`/users/wishlist/${userId}/${propId}/remove`)
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
  },
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string | null>) => {
      state.id = action.payload
    },
    adduserDetailsForm: (state, action: PayloadAction<UserState["userDetailsForm"]>) => {
      state.userDetailsForm = action.payload
    },
    addphoneNumber: (state, action: PayloadAction<string>) => {
      state.userDetailsForm = {
        ...state.userDetailsForm,
        phoneNumber: action.payload,
      }
      console.log(state.userDetailsForm)
    },
    logoutUser: state => {
      Object.assign(state, initialState)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(generateOtp.pending, state => {
        state.isLoading = true
      })
      .addCase(generateOtp.fulfilled, (state, action) => {
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
      .addCase(verifyOtpLogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.user._id
        state.userInformations = {
          _id: action.payload.user._id,
          username: action.payload.user.username,
          email: action.payload.user.email,
          currentCity: action.payload.user.currentCity,
          gender: action.payload.user.gender,
          phoneNumber: action.payload.user.phoneNumber,
          wishlists: action.payload.user.wishlists,
        }
      })
      .addCase(verifyOtpLogin.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyOtpSignup.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyOtpSignup.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(verifyOtpSignup.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyUserId.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyUserId.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.user._id
        console.log(action.payload.user)
        state.userInformations = {
          _id: action.payload.user._id,
          username: action.payload.user.username,
          email: action.payload.user.email,
          currentCity: action.payload.user.currentCity,
          gender: action.payload.user.gender,
          phoneNumber: action.payload.user.phoneNumber,
          wishlists: action.payload.user.wishlists,
        }
      })
      .addCase(verifyUserId.rejected, (state, action) => {
        state.isLoading = false
        state.id = null
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
        },
      )
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(updateWishlist.pending, state => {
        state.isLoading = true
      })
      .addCase(updateWishlist.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(updateWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(removeWishlist.pending, state => {
        state.isLoading = true
      })
      .addCase(removeWishlist.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(removeWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
  },
})

export const { setUserId, adduserDetailsForm, addphoneNumber, logoutUser } = userSlice.actions
export default userSlice.reducer
