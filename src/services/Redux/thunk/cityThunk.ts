import axios from "../../Axios/axios"

export const getCities = async () => {
  try {
    const response = await axios.get(`/cities`)
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addCountry = async (country: string) => {
  try {
    const response = await axios.post(`/cities/add-country`, { country })
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updateCountry = async ({
  country,
  countryId,
}: {
  country: string
  countryId: string | null
}) => {
  try {
    const response = await axios.put(`/cities/update-country/${countryId}`, {
      country,
    })
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addState = async ({ state, id }: { state: string; id: string }) => {
  try {
    const response = await axios.put(`/cities/add-state/${id}`, { state })
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updateState = async ({ state, stateId }: { state: string; stateId: string | null }) => {
  try {
    const response = await axios.put(`/cities/update-state/${stateId}`, {
      state,
    })
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const addCity = async ({ city, stateId }: { city: string; stateId: string }) => {
  try {
    const response = await axios.put(`/cities/add-city/${stateId}`, {
      city,
    })
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}

export const updateCity = async ({ city, cityId }: { city: string; cityId: string | null }) => {
  try {
    const response = await axios.put(`/cities/update-city/${cityId}`, {
      city,
    })
    return response.data
  } catch (err: any) {
    console.log(err)
    if (err.response && err.response.data && err.response.data.message) {
      throw Error(err.response.data.message)
    } else {
      throw Error(err.message)
    }
  }
}
