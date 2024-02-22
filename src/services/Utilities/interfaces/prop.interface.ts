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
  timings?: ITimings
  placeDescription?: string
  superCategory?: any
  category?: any
  subCategory?: any
  age?: number[]
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

export interface ITimings {
  [day: string]: string[] | "closed";
  sunday: string[] | "closed"
  monday: string[] | "closed"
  tuesday: string[] | "closed"
  wednesday: string[] | "closed"
  thursday: string[] | "closed"
  friday: string[] | "closed"
  saturday: string[] | "closed"
}
