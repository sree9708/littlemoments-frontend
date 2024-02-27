import { AccountStatus } from "@/services/Utilities/Enum/account.status.enum"
import { IPropCreate } from "@/services/Utilities/interfaces/prop.interface"
import axios from "../../Axios/axios"
import { RootState } from "../store"
import { base64ToFile } from "@/services/Utilities/base64/base64.services"

export const verifyPropId = async (id: string) => {
  try {
    const response = await axios.get(`/props/verify-id/${id}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const verifyPropToken = async () => {
  try {
    const response = await axios.get(`/props/refresh-token/verify`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const getPropById = async (_: any, { getState }: { getState: any }) => {
  try {
    const propId = (getState() as RootState).prop.id as string
    const response = await axios.get(`/props/profile/${propId}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const createProp = async ({ email, password }: IPropCreate) => {
  try {
    const response = await axios.post(`/props`, { email, password })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const loginProp = async ({ email, password }: IPropCreate) => {
  try {
    const response = await axios.post(`/props/login`, { email, password })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addPlace = async (_: any, { getState }: { getState: any }) => {
  try {
    const formData = new FormData()
    const propId = (getState() as RootState).prop.id as string
    const gstinFile = (getState() as RootState).prop.propDetailsForm?.gstin as string
    const panFile = (getState() as RootState).prop.propDetailsForm?.pan as string
    const displayImages = (getState() as RootState).prop.propDetailsForm?.displayImages as string[]
    const propDetailsForm = (getState() as RootState).prop.propDetailsForm
    // formData.append("propDetails", propDetailsForm)
    // formData.append("propDetails", JSON.stringify(propDetailsForm))
    const modifiedPropDetailsForm = { ...propDetailsForm }
    delete modifiedPropDetailsForm.gstin
    delete modifiedPropDetailsForm.pan
    delete modifiedPropDetailsForm.displayImages

    formData.append("propDetails", JSON.stringify(modifiedPropDetailsForm))

    const gstin = base64ToFile(gstinFile as string, `gstin`)
    const pan = base64ToFile(panFile as string, `pan`)
    formData.append("gstin", gstin)
    formData.append("pan", pan)

    Array.from(displayImages ?? []).forEach((image: unknown) => {
      const file = base64ToFile(image as string, `image`)
      formData.append("displayImages", file)
    })

    console.log("propDetailsForm :", propDetailsForm)
    console.log("formData :", formData)
    const response = await axios.put(`/props/${propId}/add-place`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addDispalyImages = async (_: any, { getState }: { getState: any }) => {
  try {
    const displayImages = (getState() as RootState).prop.propDetailsForm?.displayImages as string[]
    const formData = new FormData()
    Array.from(displayImages ?? []).forEach((image: unknown) => {
      const file = base64ToFile(image as string, `file`)
      formData.append("displayImages", file)
    })
    const response = await axios.put(`/props/12345/add-images`, formData)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updatePlaceDetails = async ({
  id,
  placeName,
}: {
  id: string | undefined
  placeName: string
}) => {
  try {
    const response = await axios.put(`/props/${id}/update-place`, { placeName, city: "hyderabad" })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updatePropBusinessDetails = async ({ id, data }: { id: string | undefined; data: any }) => {
  try {
    const response = await axios.put(`/props/${id}/business-details`, data)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updatePropInformations = async ({ id, data }: { id: string | undefined; data: any }) => {
  try {
    const response = await axios.put(`/props/${id}/informations`, data)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addPropDisplayImages = async ({ id, file }: { id: string | undefined; file: any }) => {
  try {
    const formData = new FormData()
    formData.append("displayImages", file)
    const response = await axios.put(`/props/${id}/add-images`, formData)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const removePropDisplayImages = async ({
  id,
  imageUrls,
}: {
  id: string | undefined
  imageUrls: string[]
}) => {
  try {
    const response = await axios.put(`/props/${id}/remove-images`, { imageUrls })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updatePropSocialLinks = async ({ id, data }: { id: string | undefined; data: any }) => {
  try {
    const response = await axios.put(`/props/${id}/social-links`, { socialLinks: data })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const logoutPropBackend = async () => {
  try {
    const response = await axios.put(`/props/logout`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}
