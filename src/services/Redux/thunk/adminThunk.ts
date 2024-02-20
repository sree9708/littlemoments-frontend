import axios from "../../Axios/axios"

export const generateOtpAdmin = async () => {
  try {
    const response = await axios.get(`/admin/generate-otp`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const verifyOtpAdmin = async (otp: string) => {
  try {
    const response = await axios.get(`/admin/verify-otp`, { params: { otp } })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}
