import { AccountStatus } from "@/services/Utilities/Enum/account.status.enum"
import axios from "../../Axios/axios"

export const getPlaces = async ({ skip, limit }: { skip: number; limit: number }) => {
  try {
    const response = await axios.get(`/props/${skip}/${limit}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const getPlacesBySkipAndLimit = async ({ skip, limit }: { skip: number; limit: number }) => {
  try {
    const response = await axios.get(`/props/${skip}/${limit}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const getPlaceById = async (id: string) => {
  try {
    const response = await axios.get(`/props/${id}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const getPlaceByIdWithDetails = async (id: string) => {
  try {
    const response = await axios.get(`/admin/${id}/details`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const getPlaceByAdmin = async ({
  accountStatus,
  skip,
  limit,
}: {
  accountStatus: AccountStatus
  skip: number
  limit: number
}) => {
  try {
    let status
    if (accountStatus === AccountStatus.ALL) {
      status = "all"
    } else if (accountStatus === AccountStatus.ACTIVE) {
      status = "active"
    } else if (accountStatus === AccountStatus.INACTIVE) {
      status = "in-active"
    } else if (accountStatus === AccountStatus.PENDING) {
      status = "pending"
    } else if (accountStatus === AccountStatus.ON_HOLD) {
      status = "on-hold"
    } else if (accountStatus === AccountStatus.BLOCKED) {
      status = "blocked"
    } else if (accountStatus === AccountStatus.DISMISSED) {
      status = "dismissed"
    } else {
      throw Error("Invalid account status")
    }

    const response = await axios.get(`/admin/${status}/${skip}/${limit}`)
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updateAccountStatus = async ({
  id,
  accountStatus,
}: {
  id: string
  accountStatus: AccountStatus
}) => {
  try {
    const response = await axios.put(`/admin/${id}/status`, { accountStatus })
    return response.data
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}
