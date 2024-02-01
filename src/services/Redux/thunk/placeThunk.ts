import axios from "../../Axios/axios"

export const getPlaces = async ({ skip, limit }: { skip: number; limit: number }) => {
  try {
    const response = await axios.get(`/props/get-prop/${skip}/${limit}`)
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

export const getPlacesBySkipAndLimit = async ({ skip, limit }: { skip: number; limit: number }) => {
  try {
    const response = await axios.get(`/props/get-prop/${skip}/${limit}`)
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

export const getPlaceById = async (id: string) => {
  try {
    const response = await axios.get(`/props/${id}`)
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
