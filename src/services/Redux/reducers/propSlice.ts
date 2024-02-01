import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { IProp } from "@/services/Utilities/interfaces/prop.interface"
import {
  addDispalyImages,
  addPlace,
  addPropDisplayImages,
  createProp,
  getPropById,
  loginProp,
  logoutPropBackend,
  removePropDisplayImages,
  updatePlaceDetails,
  updatePropBusinessDetails,
  updatePropInformations,
  updatePropSocialLinks,
  verifyPropId,
  verifyPropToken,
} from "../thunk/propThunk"

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

export const verifyPropIdThunk = createAsyncThunk("prop/verifyPropId", verifyPropId)
export const verifyPropTokenThunk = createAsyncThunk("user/verifyToken", verifyPropToken)
export const getPropByIdThunk = createAsyncThunk("place/getPropById", getPropById)
export const createPropThunk = createAsyncThunk("prop/createProp", createProp)
export const loginPropThunk = createAsyncThunk("prop/loginProp", loginProp)
export const addPlaceThunk = createAsyncThunk("prop/addPlace", addPlace)
export const addDispalyImagesThunk = createAsyncThunk("prop/addDispalyImages", addDispalyImages)
export const updatePlaceDetailsThunk = createAsyncThunk("prop/updatePlaceDetails", updatePlaceDetails)
export const updatePropBusinessDetailsThunk = createAsyncThunk(
  "prop/updatePropBusinessDetails",
  updatePropBusinessDetails,
)
export const updatePropInformationsThunk = createAsyncThunk(
  "prop/updatePropInformations",
  updatePropInformations,
)
export const addPropDisplayImagesThunk = createAsyncThunk("prop/addPropDisplayImages", addPropDisplayImages)
export const removePropDisplayImagesThunk = createAsyncThunk(
  "prop/removePropDisplayImages",
  removePropDisplayImages,
)
export const updatePropSocialLinksThunk = createAsyncThunk(
  "prop/updatePropSocialLinks",
  updatePropSocialLinks,
)
export const logoutPropThunk = createAsyncThunk("prop/logoutProp", logoutPropBackend)

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
      .addCase(verifyPropIdThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyPropIdThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.prop.id
        state.propInformations = action.payload.prop
      })
      .addCase(verifyPropIdThunk.rejected, (state, action) => {
        state.isLoading = false
        state.id = null
        throw Error(action.error.message)
      })
      .addCase(verifyPropTokenThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyPropTokenThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.id
      })
      .addCase(verifyPropTokenThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(getPropByIdThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getPropByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.prop.id
        state.propInformations = action.payload.prop
      })
      .addCase(getPropByIdThunk.rejected, (state, action) => {
        state.isLoading = false
        state.id = null
        throw Error(action.error.message)
      })
      .addCase(createPropThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(createPropThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.prop?.id
        state.propInformations = action.payload.prop
      })
      .addCase(createPropThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(loginPropThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(loginPropThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.id
      })
      .addCase(loginPropThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addDispalyImagesThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(addDispalyImagesThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(addDispalyImagesThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePlaceDetailsThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePlaceDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.propInformations = action.payload.prop
      })
      .addCase(updatePlaceDetailsThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePropBusinessDetailsThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePropBusinessDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(updatePropBusinessDetailsThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePropInformationsThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePropInformationsThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(updatePropInformationsThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addPropDisplayImagesThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(addPropDisplayImagesThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.propInformations = action.payload.prop
      })
      .addCase(addPropDisplayImagesThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(removePropDisplayImagesThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(removePropDisplayImagesThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.propInformations = action.payload.prop
      })
      .addCase(removePropDisplayImagesThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updatePropSocialLinksThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updatePropSocialLinksThunk.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(updatePropSocialLinksThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(logoutPropThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(logoutPropThunk.fulfilled, (state, action) => {
        Object.assign(state, initialState)
      })
      .addCase(logoutPropThunk.rejected, (state, action) => {
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
