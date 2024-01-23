import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "./reducers/userSlice"
import placeSlice from "./reducers/placeSlice"
import reviewSlice from "./reducers/reviewSlice"
import propSlice from "./reducers/propSlice copy"

export const rootReducer = combineReducers({
  user: userSlice,
  prop: propSlice,
  place: placeSlice,
  review: reviewSlice,
})
