import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "./reducers/userSlice"
import propSlice from "./reducers/propSlice"
import placeSlice from "./reducers/placeSlice"

export const rootReducer = combineReducers({
  user: userSlice,
  prop: propSlice,
  place: placeSlice,
})
