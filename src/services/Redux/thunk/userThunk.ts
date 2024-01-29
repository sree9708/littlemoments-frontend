import axios from "../../Axios/axios"
import { UserState } from "../reducers/userSlice"
import { RootState } from "../store"

export const generateOtp = async (phoneNumber: string) => {
  try {
    const response = await axios.get(`/users/generate-otp`, { params: { phoneNumber } })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const verifyOtpLogin = async (params: { phoneNumber: string; otp: string }) => {
  try {
    const response = await axios.get(`/users/verify-otp-login`, { params: params })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const verifyOtpSignup = async (params: { phoneNumber: string; otp: string }) => {
  try {
    const response = await axios.get(`/users/verify-otp-signup`, { params: params })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const verifyToken = async () => {
  try {
    const response = await axios.get(`/users/verify-token`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const verifyUserId = async (id: string) => {
  try {
    const response = await axios.get(`/users/verify-id/${id}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const createUser = async (_: any, { getState }: { getState: any }) => {
  try {
    const userDetailsForm: UserState["userDetailsForm"] = (getState() as RootState).user.userDetailsForm
    const response = await axios.post(`/users`, userDetailsForm)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      console.log(err.response.data.message)
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updateWishlist = async ({ propId, wishlist }: any, { getState }: { getState: any }) => {
  try {
    const userId: UserState["id"] = (getState() as RootState).user.id
    const response = await axios.put(`/users/wishlist/${userId}/${propId}/${wishlist}`)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      console.log(err.response.data.message)
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const removeWishlist = async (propId: string, { getState }: { getState: any }) => {
  try {
    const userId: UserState["id"] = (getState() as RootState).user.id
    const response = await axios.post(`/users/wishlist/${userId}/${propId}/remove`)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      console.log(err.response.data.message)
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}
