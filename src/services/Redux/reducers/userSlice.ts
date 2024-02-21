import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "@/services/Utilities/interfaces/user.interface"
import {
  createUser,
  generateOtp,
  getUserById,
  removeWishlist,
  updateWishlist,
  verifyToken,
  verifyUserId,
  logoutUserBackend,
  verifyOtp,
  generateOtpWithPhoneNumber,
  generateOtpByLogin,
  userLogin,
  addLocation,
} from "../thunk/userThunk"

export interface UserState {
  isLoading: boolean
  id: string | null
  phoneNumberVerified: boolean
  userDetailsForm: IUser | null
  userInformations: IUser | null
  error: string | null | undefined
}

const initialState: UserState = {
  isLoading: false,
  id: null,
  phoneNumberVerified: false,
  userDetailsForm: null,
  userInformations: null,
  error: null,
}

export const getUserByIdThunk = createAsyncThunk("user/getUserById", getUserById)
export const generateOtpThunk = createAsyncThunk("user/generateOtp", generateOtp)
export const generateOtpByLoginThunk = createAsyncThunk("user/generateOtpByLogin", generateOtpByLogin)
export const generateOtpWithPhoneNumberThunk = createAsyncThunk(
  "user/generateOtpWithPhoneNumber",
  generateOtpWithPhoneNumber,
)
export const verifyOtpThunk = createAsyncThunk("user/verifyOtp", verifyOtp)
export const userLoginThunk = createAsyncThunk("user/userLogin", userLogin)
export const addLocationThunk = createAsyncThunk("user/addLocation", addLocation)
export const verifyUserTokenThunk = createAsyncThunk("user/verifyToken", verifyToken)
export const verifyUserIdThunk = createAsyncThunk("user/verifyUserId", verifyUserId)
export const createUserThunk = createAsyncThunk("user/createUser", createUser)
export const updateWishlistThunk = createAsyncThunk("user/updateWishlist", updateWishlist)
export const removeWishlistThunk = createAsyncThunk("user/removeWishlist", removeWishlist)
export const logoutUserThunk = createAsyncThunk("user/logoutUser", logoutUserBackend)

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
      .addCase(getUserByIdThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getUserByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.user.id
        state.userInformations = {
          id: action.payload.user.id,
          username: action.payload.user.username,
          email: action.payload.user.email,
          currentCity: action.payload.user.currentCity,
          gender: action.payload.user.gender,
          phoneNumber: action.payload.user.phoneNumber,
          wishlists: action.payload.user.wishlists,
        }
      })
      .addCase(getUserByIdThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
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
      .addCase(generateOtpByLoginThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(generateOtpByLoginThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(generateOtpByLoginThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(generateOtpWithPhoneNumberThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(generateOtpWithPhoneNumberThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(generateOtpWithPhoneNumberThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyOtpThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyOtpThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.phoneNumberVerified = true
      })
      .addCase(verifyOtpThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(userLoginThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(userLoginThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.id
      })
      .addCase(userLoginThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyUserTokenThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyUserTokenThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.id
      })
      .addCase(verifyUserTokenThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
      .addCase(verifyUserIdThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyUserIdThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.user.id
        state.userInformations = {
          id: action.payload.user.id,
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
      .addCase(createUserThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.id
      })
      .addCase(createUserThunk.rejected, (state, action) => {
        state.isLoading = false
        console.log("Action :", action.error)
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
      .addCase(logoutUserThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = null
        state.userDetailsForm = null
        state.userInformations = null
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
        throw Error(action.error.message)
      })
  },
})

export const { setUserId, adduserDetailsForm, addphoneNumber, logoutUser } = userSlice.actions
export default userSlice.reducer
