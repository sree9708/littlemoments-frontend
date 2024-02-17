import { AccountStatus } from "../Enum/account.status.enum"

export interface IProp {
  id?: string
  email?: string
  passaword?: string
  placeName?: string
  displayContactNo?: string
  password?: string
  city?: any
  state?: any
  country?: any
  location?: {
    lat: number
    long: number
  }
  address?: string
  gstin?: string
  pan?: string
  pocName?: string
  pocContactNo?: string
  pocDesignation?: string
  rateCard?: [
    {
      title: string
      price: number
    },
  ]
  timings?: {
    sunday: [string]
    monday: [string]
    tuesday: [string]
    wednesday: [string]
    thursday: [string]
    friday: [string]
    saturday: [string]
  }
  placeDescription?: string
  superCategory?: any
  category?: any
  subCategory?: any
  age?: [number]
  displayImages?: string[]
  socialLinks?: ISocialLinks
  isProfileAdded?: boolean
  accountStatus?: AccountStatus
}

export interface ISocialLinks {
  fb: string
  instagram: string
  youtube: string
  twitter: string
}

export interface IPropCreate {
  email: string
  password: string
}
