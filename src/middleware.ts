import { NextRequest, NextResponse } from "next/server"
import { useAppDispatch, useAppSelector } from "./hooks/useStore"
import { store, RootState } from "./services/Redux/store"
import { verifyPropIdThunk } from "./services/Redux/reducers/propSlice"

const protectRouteAddPlace = [
  "/add-place",
  "/add-place/business-details",
  "/add-place/information",
  "/add-placesocial-links",
  "/add-place/upload-images",
]

export default async function middleware(req: any) {
  // const propId = RootState.prop.id as string
  const propId = (store.getState() as RootState).prop.id as string
  const userId = (store.getState() as RootState).user.id as string
  const phone = (store.getState() as RootState).user.phoneNumberVerified as boolean
  const places = (store.getState() as RootState).place.places as any[]

  try {
    await store.dispatch(verifyPropIdThunk(propId))
  } catch (error) {
    console.log("Error : ", error)
  }

  console.log("propId :", propId)
  console.log("userId :", userId)
  console.log("phone :", phone)
  console.log("places :", places)
  console.log("akshlflkahsdk")

  if (!propId && protectRouteAddPlace.includes(req.nextUrl.pathname)) {
    // const absoluteURL = new URL("/", req.nextUrl.origin)
    // return NextResponse.redirect(absoluteURL.toString())
  }
}
