import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  getCategories,
  addSuperCategory,
  addCategory,
  addSubCategory,
  updateSuperCategory,
  updateCategory,
  updateSubCategory,
} from "../thunk/categoryThunk"
import { ICategory } from "@/services/Utilities/interfaces/category.interface"

interface PlaceState {
  isLoading: boolean
  categories: ICategory[]
}

const initialState: PlaceState = {
  isLoading: false,
  categories: [],
}

export const getCategoriesThunk = createAsyncThunk("category/getCategories", getCategories)
export const addSuperCategoryThunk = createAsyncThunk("category/addSuperCategory", addSuperCategory)
export const updateSuperCategoryThunk = createAsyncThunk("category/updateSuperCategory", updateSuperCategory)
export const addCategoryThunk = createAsyncThunk("category/addCategory", addCategory)
export const updateCategoryThunk = createAsyncThunk("category/updateCategory", updateCategory)
export const addSubCategoryThunk = createAsyncThunk("category/addSubCategory", addSubCategory)
export const updateSubCategoryThunk = createAsyncThunk("category/updateSubCategory", updateSubCategory)

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCategoriesThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = action.payload.categories
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addSuperCategoryThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(addSuperCategoryThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = [...state.categories, action.payload.category]
      })
      .addCase(addSuperCategoryThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updateSuperCategoryThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updateSuperCategoryThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = action.payload.categories
      })
      .addCase(updateSuperCategoryThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addCategoryThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(addCategoryThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = action.payload.categories
      })
      .addCase(addCategoryThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updateCategoryThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updateCategoryThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = action.payload.categories
      })
      .addCase(updateCategoryThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(addSubCategoryThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(addSubCategoryThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = action.payload.categories
      })
      .addCase(addSubCategoryThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
      .addCase(updateSubCategoryThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(updateSubCategoryThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.categories = action.payload.categories
      })
      .addCase(updateSubCategoryThunk.rejected, (state, action) => {
        state.isLoading = false
        throw Error(action.error.message)
      })
  },
})

export const {} = categorySlice.actions
export default categorySlice.reducer
