import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "@/services/Redux/reducers/userSlice"
import placeSlice from "@/services/Redux/reducers/placeSlice"
import reviewSlice from "@/services/Redux/reducers/reviewSlice"
import propSlice from "@/services/Redux/reducers/propSlice"
import categorySlice from "./reducers/categorySlice"
import citySlice from "./reducers/citySlice"
import adminSlice from "./reducers/adminSlice"

export const rootReducer = combineReducers({
  user: userSlice,
  prop: propSlice,
  place: placeSlice,
  review: reviewSlice,
  category: categorySlice,
  city: citySlice,
  admin: adminSlice,
})
