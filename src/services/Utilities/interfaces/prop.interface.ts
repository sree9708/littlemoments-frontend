export interface IProp {
  _id?: string
  email?: string
  passaword?: string
  placeName?: string
  displayContactNo?: string
  password?: string
  city?: string
  location?: string
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
  category?: string
  subCategory?: string
  age?: [number]
  displayImages?: string[]
  socialLinks?: ISocialLinks
  reviews?: IReview[]
}

export interface IReview {
  rating: number
  review: string
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
