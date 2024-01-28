import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "@/services/Utilities/interfaces/user.interface"
import { createUser, generateOtp, removeWishlist, updateWishlist, verifyOtpLogin, verifyOtpSignup, verifyToken, verifyUserId } from "../thunk/userThunk"

export interface UserState {
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

export const generateOtpThunk = createAsyncThunk("user/generateOtp", generateOtp)
export const verifyOtpLoginThunk = createAsyncThunk("user/verifyOtpLogin", verifyOtpLogin)
export const verifyOtpSignupThunk = createAsyncThunk("user/verifyOtpSignup", verifyOtpSignup)
export const verifyTokenThunk = createAsyncThunk("user/verifyToken", verifyToken)
export const verifyUserIdThunk = createAsyncThunk("user/verifyUserId", verifyUserId)
export const createUserThunk = createAsyncThunk("user/createUser", createUser)
export const updateWishlistThunk = createAsyncThunk("user/updateWishlist", updateWishlist)
export const removeWishlistThunk = createAsyncThunk("user/removeWishlist", removeWishlist)

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
    },
    logoutUser: state => {
      Object.assign(state, initialState)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(generateOtpThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(generateOtpThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(generateOtpThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyOtpLoginThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyOtpLoginThunk.fulfilled, (state, action) => {
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
      .addCase(verifyOtpLoginThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyOtpSignupThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyOtpSignupThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(verifyOtpSignupThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyUserIdThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyUserIdThunk.fulfilled, (state, action) => {
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
      .addCase(verifyUserIdThunk.rejected, (state, action) => {
        state.isLoading = false
        state.id = null
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(createUserThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(
        createUserThunk.fulfilled,
        (state, action: PayloadAction<{ tokens: { accessToken: string; refreshToken: string } }>) => {
          state.isLoading = false
        },
      )
      .addCase(createUserThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(updateWishlistThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updateWishlistThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(updateWishlistThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(removeWishlistThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(removeWishlistThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(removeWishlistThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
  },
})

export const { setUserId, adduserDetailsForm, addphoneNumber, logoutUser } = userSlice.actions
export default userSlice.reducer
