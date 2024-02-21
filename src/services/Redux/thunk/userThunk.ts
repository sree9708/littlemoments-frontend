import axios from "../../Axios/axios"
import { UserState } from "../reducers/userSlice"
import { RootState } from "../store"

export const getUserById = async (_: any, { getState }: { getState: any }) => {
  try {
    const userId = (getState() as RootState).user.id as string
    const response = await axios.get(`/users/${userId}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

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

export const generateOtpByLogin = async (phoneNumber: string) => {
  try {
    const response = await axios.get(`/users/generate-otp/login`, { params: { phoneNumber } })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const generateOtpWithPhoneNumber = async (phoneNumber: string) => {
  try {
    const response = await axios.get(`/users/generate-otp/phonenumber`, { params: { phoneNumber } })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const verifyOtp = async (params: { phoneNumber: string; otp: string }) => {
  try {
    const response = await axios.get(`/users/verify-otp`, { params: params })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const userLogin = async (params: { phoneNumber: string; otp: string }) => {
  try {
    const response = await axios.get(`/users/login`, { params: params })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addLocation = async ({ lat, long, browser, device }: any, { getState }: { getState: any }) => {
  try {
    const userId: UserState["id"] = (getState() as RootState).user.id
    const response = await axios.put(`/locations/${userId}`, { lat, long, browser, device })
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
    const response = await axios.get(`/users/refresh-token/verify`)
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
    console.log("hlooo")
    const userDetailsForm: UserState["userDetailsForm"] = (getState() as RootState)?.user?.userDetailsForm
    const response = await axios.post(`/users`, userDetailsForm)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
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
    if (err.response && err.response.data && err.response.data.message) {
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
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const logoutUserBackend = async () => {
  try {
    const response = await axios.put(`/users/logout`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}
