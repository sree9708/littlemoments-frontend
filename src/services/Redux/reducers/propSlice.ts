import { RootState } from "../store"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "../../Axios/axios"
import { IProp, IPropCreate } from "@/services/Utilities/interfaces/prop.interface"
import { base64ToFile } from "@/services/Utilities/base64/base64.services"

interface PropState {
  isLoading: boolean
  id: string | null
  propDetailsForm: IProp | null
  propInformations: IProp | null
}

const initialState: PropState = {
  isLoading: false,
  id: null,
  propDetailsForm: null,
  propInformations: null,
}

export const verifyPropId = createAsyncThunk("prop/verifyPropId", async (id: string) => {
  try {
    const response = await axios.get(`/props/verify-id/${id}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.error) {
      throw Error(err.response.data.error)
    } else {
      throw Error(err.message)
    }
  }
})

export const getPropById = createAsyncThunk("place/getPropById", async (_, { getState }) => {
  try {
    const propId = (getState() as RootState).prop.id as string
    const response = await axios.get(`/props/${propId}`)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.error) {
      throw Error(err.response.data.error)
    } else {
      throw Error(err.message)
    }
  }
})

export const createProp = createAsyncThunk("prop/createProp", async ({ email, password }: IPropCreate) => {
  try {
    const response = await axios.post(`/props`, { email, password })
    return response.data
  } catch (err: any) {
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
    const response = await axios.post(`/props/login`, { email, password })
    return response.data
  } catch (err: any) {
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
    const formData = new FormData()
    const propId = (getState() as RootState).prop.id as string
    const gstinFile = (getState() as RootState).prop.propDetailsForm?.gstin as string
    const panFile = (getState() as RootState).prop.propDetailsForm?.pan as string
    const displayImages = (getState() as RootState).prop.propDetailsForm?.displayImages as string[]
    const propDetailsForm = (getState() as RootState).prop.propDetailsForm
    formData.append("propDetails", JSON.stringify(propDetailsForm))

    const gstin = base64ToFile(gstinFile as string, `gstin`)
    const pan = base64ToFile(panFile as string, `pan`)
    formData.append("gstin", gstin)
    formData.append("pan", pan)
    Array.from(displayImages ?? []).forEach((image: unknown) => {
      const file = base64ToFile(image as string, `image`)
      formData.append("displayImages", file)
    })
    const response = await axios.put(`/props/add-place/${propId}`, formData)
    return response.data
  } catch (err: any) {
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
    const displayImages = (getState() as RootState).prop.propDetailsForm?.displayImages as string[]
    const formData = new FormData()
    Array.from(displayImages ?? []).forEach((image: unknown) => {
      const file = base64ToFile(image as string, `file`)
      formData.append("displayImages", file)
    })
    const response = await axios.put(`/props/add-dispaly-images/12345`, formData)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.error) {
      console.log(err.response.data.error)
      throw Error(err.response.data.error)
    } else {
      throw Error(err.message)
    }
  }
})

export const updatePlaceDetails = createAsyncThunk(
  "prop/updatePlaceDetails",
  async ({ id, placeName }: { id: string | undefined; placeName: string }) => {
    try {
      const response = await axios.put(`/props/update-place/${id}`, { placeName, city: "hyderabad" })
      return response.data
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        console.log(err.response.data.error)
        throw Error(err.response.data.error)
      } else {
        throw Error(err.message)
      }
    }
  },
)

export const updatePropBusinessDetails = createAsyncThunk(
  "prop/updatePropBusinessDetails",
  async ({ id, data }: { id: string | undefined; data: any }) => {
    try {
      const response = await axios.put(`/props/business-details/${id}`, data)
      return response.data
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        console.log(err.response.data.error)
        throw Error(err.response.data.error)
      } else {
        throw Error(err.message)
      }
    }
  },
)

export const updatePropInformations = createAsyncThunk(
  "prop/updatePropInformations",
  async ({ id, data }: { id: string | undefined; data: any }) => {
    console.log("data", data)
    try {
      const response = await axios.put(`/props/informations/${id}`, data)
      return response.data
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        console.log(err.response.data.error)
        throw Error(err.response.data.error)
      } else {
        throw Error(err.message)
      }
    }
  },
)

export const addPropDisplayImages = createAsyncThunk(
  "prop/addPropDisplayImages",
  async ({ id, file }: { id: string | undefined; file: any }) => {
    try {
      const formData = new FormData()
      formData.append("displayImages", file)
      const response = await axios.put(`/props/add-dispaly-images/${id}`, formData)
      return response.data
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        console.log(err.response.data.error)
        throw Error(err.response.data.error)
      } else {
        throw Error(err.message)
      }
    }
  },
)

export const removePropDisplayImages = createAsyncThunk(
  "prop/removePropDisplayImages",
  async ({ id, imageUrls }: { id: string | undefined; imageUrls: string[] }) => {
    try {
      const response = await axios.put(`/props/remove-dispaly-images/${id}`, { imageUrls })
      return response.data
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        console.log(err.response.data.error)
        throw Error(err.response.data.error)
      } else {
        throw Error(err.message)
      }
    }
  },
)

export const updatePropSocialLinks = createAsyncThunk(
  "prop/updatePropSocialLinks",
  async ({ id, data }: { id: string | undefined; data: any }) => {
    try {
      const response = await axios.put(`/props/social-links/${id}`, { socialLinks: data })
      return response.data
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        console.log(err.response.data.error)
        throw Error(err.response.data.error)
      } else {
        throw Error(err.message)
      }
    }
  },
)

export const propSlice = createSlice({
  name: "prop",
  initialState,
  reducers: {
    setPropId: (state, action: PayloadAction<string | null>) => {
      state.id = action.payload
    },
    addPlaceOwner: (state, action: PayloadAction<IProp>) => {
      state.propDetailsForm = {
        ...state.propDetailsForm,
        placeName: action.payload.placeName,
        email: action.payload.email,
        displayContactNo: action.payload.displayContactNo,
      }
    },
    addBusinessDetails: (state, action: PayloadAction<IProp>) => {
      state.propDetailsForm = {
        ...state.propDetailsForm,
        location: action.payload.location,
        address: action.payload.address,
        city: "hyderabad",
        gstin: action.payload.gstin,
        pan: action.payload.pan,
        pocName: action.payload.pocName,
        pocContactNo: action.payload.pocContactNo,
        pocDesignation: action.payload.pocDesignation,
      }
    },
    addInformations: (state, action: PayloadAction<IProp>) => {
      state.propDetailsForm = {
        ...state.propDetailsForm,
        rateCard: action.payload.rateCard,
        timings: action.payload.timings,
        placeDescription: action.payload.placeDescription,
        category: action.payload.category,
        subCategory: action.payload.subCategory,
        age: action.payload.age,
      }
    },
    addUploadImages: (state, action: PayloadAction<IProp>) => {
      state.propDetailsForm = {
        ...state.propDetailsForm,
        displayImages: action.payload.displayImages,
      }
    },
    addSocialLinks: (state, action: PayloadAction<IProp>) => {
      state.propDetailsForm = {
        ...state.propDetailsForm,
        socialLinks: action.payload.socialLinks,
      }
    },
    logoutProp: state => {
      Object.assign(state, initialState)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(verifyPropId.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyPropId.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.prop._id
        state.propInformations = action.payload.prop
      })
      .addCase(verifyPropId.rejected, (state, action) => {
        state.isLoading = false
        state.id = null
        throw Error(action.error.message)
      })
      .addCase(getPropById.pending, state => {
        state.isLoading = true
      })
      .addCase(getPropById.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.prop._id
        state.propInformations = action.payload.prop
      })
      .addCase(getPropById.rejected, (state, action) => {
        state.isLoading = false
        state.id = null
        throw Error(action.error.message)
      })
      .addCase(createProp.pending, state => {
        state.isLoading = true
      })
      .addCase(createProp.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.prop?._id
        state.propInformations = action.payload.prop
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
      })
      .addCase(addDispalyImages.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePlaceDetails.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePlaceDetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.propInformations = action.payload.newProp
      })
      .addCase(updatePlaceDetails.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePropBusinessDetails.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePropBusinessDetails.fulfilled, (state, action) => {
        state.isLoading = false
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
      })
      .addCase(updatePropInformations.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addPropDisplayImages.pending, state => {
        state.isLoading = true
      })
      .addCase(addPropDisplayImages.fulfilled, (state, action) => {
        state.isLoading = false
        state.propInformations = action.payload.newProp
      })
      .addCase(addPropDisplayImages.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(removePropDisplayImages.pending, state => {
        state.isLoading = true
      })
      .addCase(removePropDisplayImages.fulfilled, (state, action) => {
        state.isLoading = false
        state.propInformations = action.payload.newProp
      })
      .addCase(removePropDisplayImages.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePropSocialLinks.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePropSocialLinks.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(updatePropSocialLinks.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
  },
})

export const {
  setPropId,
  addPlaceOwner,
  addBusinessDetails,
  addInformations,
  addUploadImages,
  addSocialLinks,
  logoutProp,
} = propSlice.actions
export default propSlice.reducer
