import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "@/services/Redux/reducers/userSlice"
// import propSlice from "@/services/Redux/reducers/userSlice2"
import placeSlice from "@/services/Redux/reducers/placeSlice"
import reviewSlice from "@/services/Redux/reducers/reviewSlice"
import propSlice from "@/services/Redux/reducers/propSlice"

export const rootReducer = combineReducers({
  user: userSlice,
  prop: propSlice,
  place: placeSlice,
  review: reviewSlice,
})
