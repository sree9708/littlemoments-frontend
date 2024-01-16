import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "../../Axios/axios"
import { IProp, IPropCreate } from "@/services/Utilities/interfaces/prop.interface"
import { RootState } from "../store"
import { base64ToFile } from "@/services/Utilities/base64/base64.services"

interface PropState {
  isLoading: boolean
  id: string | null
  propDetails: IProp | null
}

const initialValue: PropState = {
  isLoading: false,
  id: null,
  propDetails: null,
}

export const createProp = createAsyncThunk("prop/createUser", async ({ email, password }: IPropCreate) => {
  try {
    console.log(email, password)
    const response = await axios.post(`/props`, { email, password })
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

export const loginProp = createAsyncThunk("prop/loginProp", async ({ email, password }: IPropCreate) => {
  try {
    console.log(email, password)
    const response = await axios.post(`/props/login`, { email, password })
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

export const addPlace = createAsyncThunk("prop/addPlace", async (_, { getState }) => {
  try {
    interface PropState {
      isLoading: boolean
      propDetails: IProp | null
      displayImages: unknown[]
    }

    const formData = new FormData()
    const gstinFile = (getState() as RootState).prop.propDetails?.gstin as string
    const panFile = (getState() as RootState).prop.propDetails?.pan as string
    const displayImages = (getState() as RootState).prop.propDetails?.displayImages as string[]
    const propDetails: PropState["propDetails"] = (getState() as RootState).prop.propDetails

    const gstin = base64ToFile(gstinFile as string, `gstin`)
    const pan = base64ToFile(panFile as string, `pan`)
    formData.append("propDetails", JSON.stringify(propDetails))
    formData.append("gstin", gstin)
    formData.append("pan", pan)

    Array.from(displayImages ?? []).forEach((image: unknown) => {
      const file = base64ToFile(image as string, `image`)
      formData.append("displayImages", file)
    })
    const response = await axios.put(`/props/add-place/12345`, formData)
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

export const addDispalyImages = createAsyncThunk("prop/addDispalyImages", async (_, { getState }) => {
  try {
    const displayImages = (getState() as RootState).prop.propDetails?.displayImages as string[]
    const formData = new FormData()
    Array.from(displayImages ?? []).forEach((image: unknown) => {
      const file = base64ToFile(image as string, `file`)
      console.log("file :", file)
      formData.append("displayImages", file)
    })
    const response = await axios.put(`/props/add-dispaly-images/12345`, formData)
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

export const updatePropBusinessDetails = createAsyncThunk(
  "prop/updatePropBusinessDetails",
  async (data: any) => {
    try {
      console.log(data)
      const response = await axios.put(`/props/business-details/12345`, data)
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

export const updatePropInformations = createAsyncThunk("prop/updatePropInformations", async (data: any) => {
  try {
    const response = await axios.put(`/props/informations/659901a5907c24c5227a59d8`, data)
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

export const updatePropSocialLinks = createAsyncThunk("prop/updatePropSocialLinks", async (data: any) => {
  try {
    const response = await axios.put(`/props/social-links/659901a5907c24c5227a59d8`, { socialLinks: data })
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

export const getProps = createAsyncThunk("prop/updatePropSocialLinks", async (data: any) => {
  try {
    console.log("updatePropSocialLinks :", data)
    const response = await axios.put(`/props/social-links/659901a5907c24c5227a59d8`, { socialLinks: data })
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

export const propSlice = createSlice({
  name: "prop",
  initialState: initialValue,
  reducers: {
    addPlaceOwner: (state, action: PayloadAction<IProp>) => {
      state.propDetails = {
        ...state.propDetails,
        placeName: action.payload.placeName,
        email: action.payload.email,
        displayContactNo: action.payload.displayContactNo,
      }
    },
    addBusinessDetails: (state, action: PayloadAction<IProp>) => {
      state.propDetails = {
        ...state.propDetails,
        location: action.payload.location,
        address: action.payload.address,
        city: "hyderabad",
        gstin: action.payload.gstin,
        pan: action.payload.pan,
        pocName: action.payload.pocName,
        pocContactNo: action.payload.pocContactNo,
        pocDesignation: action.payload.pocDesignation,
      }
      console.log("State : ", state.propDetails)
    },
    addInformations: (state, action: PayloadAction<IProp>) => {
      state.propDetails = {
        ...state.propDetails,
        rateCard: action.payload.rateCard,
        timings: action.payload.timings,
        placeDescription: action.payload.placeDescription,
        category: action.payload.category,
        subCategory: action.payload.subCategory,
        age: action.payload.age,
      }
      console.log("State : ", state.propDetails)
    },
    addUploadImages: (state, action: PayloadAction<IProp>) => {
      console.log("upload images", action.payload.displayImages)
      state.propDetails = {
        ...state.propDetails,
        displayImages: action.payload.displayImages,
      }
    },
    addSocialLinks: (state, action: PayloadAction<IProp>) => {
      console.log("redux", action.payload)
      state.propDetails = {
        ...state.propDetails,
        socialLinks: action.payload.socialLinks,
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createProp.pending, state => {
        state.isLoading = true
      })
      .addCase(createProp.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
      })
      .addCase(createProp.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(loginProp.pending, state => {
        state.isLoading = true
      })
      .addCase(loginProp.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.id
      })
      .addCase(loginProp.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addDispalyImages.pending, state => {
        state.isLoading = true
      })
      .addCase(addDispalyImages.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
      })
      .addCase(addDispalyImages.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePropBusinessDetails.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePropBusinessDetails.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
      })
      .addCase(updatePropBusinessDetails.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePropInformations.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePropInformations.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
      })
      .addCase(updatePropInformations.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePropSocialLinks.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePropSocialLinks.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
      })
      .addCase(updatePropSocialLinks.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
  },
})

export const { addPlaceOwner, addBusinessDetails, addInformations, addUploadImages, addSocialLinks } =
  propSlice.actions
export default propSlice.reducer
